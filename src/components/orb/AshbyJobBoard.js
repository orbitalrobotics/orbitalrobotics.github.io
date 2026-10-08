import { useEffect, useRef, useState } from 'react';

// Ashby's hosted job board (jobs.ashbyhq.com/orbital-robotics), embedded as an
// iframe. Listings, role pages, and the application form all live in Ashby —
// this site no longer carries any role data.
//
// Ashby's embed script auto-inserts its iframe on page load, which only works
// once in a single-page app: navigate away from /careers and back and the
// container is new but the script has already run. So autoLoad is off, the
// script is injected once, and every mount asks it to load into the fresh
// container. A role opened inside the board is tracked as ?ashby_jid=… on the
// real URL (ahead of the #/careers hash), so those links are shareable.
//
// autoScroll is off too: Ashby would scroll the iframe container to the top of
// the viewport, flush under the floating nav. The careers page scrolls the
// board into view itself, with room for the nav.

const BOARD_URL = 'https://jobs.ashbyhq.com/orbital-robotics';
const ASHBY_ORIGIN = 'https://jobs.ashbyhq.com';
const SCRIPT_ID = 'ashby-embed-script';
// Board messages that mean the viewer acted inside a role (opened it, hit
// Apply, submitted) — the page scrolls back to its heading for each.
const USER_ACTIONS = ['job_tapped', 'apply_for_job_tapped', 'application_submitted', 'application_errored'];

// Until the script has run, window.__Ashby is only the settings stub below.
const isReady = () => typeof window.__Ashby?.iFrame === 'function';
const loadBoard = () => {
  if (isReady() && document.getElementById('ashby_embed')) window.__Ashby.iFrame().load();
};

const AshbyJobBoard = ({ className }) => {
  useEffect(() => {
    let script = document.getElementById(SCRIPT_ID);
    if (isReady()) {
      loadBoard();
      return undefined;
    }

    if (!script) {
      window.__Ashby = {
        settings: { ashbyBaseJobBoardUrl: BOARD_URL, autoLoad: false, autoScroll: false },
      };
      script = document.createElement('script');
      script.id = SCRIPT_ID;
      script.src = `${BOARD_URL}/embed?version=2`;
      script.async = true;
      document.body.appendChild(script);
    }

    // Script injected but still downloading (first visit, or React's dev-mode
    // double effect run) — load once it arrives.
    script.addEventListener('load', loadBoard);
    return () => script.removeEventListener('load', loadBoard);
  }, []);

  return <div id="ashby_embed" className={className} />;
};

// The Ashby id of the role currently open inside the board, or null on the
// listing. The board posts "set_jid=<id>" / "reset_jid" to this page as the
// viewer moves between the listing and a role (the same messages Ashby's
// script uses to keep ?ashby_jid in sync). `onNavigate` fires on every move
// between listing, role, and application, so the page can bring the board's
// top back into view.
export const useAshbyOpenJob = (onNavigate) => {
  const [jobId, setJobId] = useState(
    () => new URLSearchParams(window.location.search).get('ashby_jid')
  );
  // Mirrors jobId for the message handler, so it can tell a real move from the
  // board re-announcing where it already is (e.g. on first load) — only real
  // moves should scroll the page.
  const jobIdRef = useRef(jobId);

  useEffect(() => {
    const onMessage = (e) => {
      if (e.origin !== ASHBY_ORIGIN || typeof e.data !== 'string') return;
      let next;
      if (e.data === 'reset_jid') next = null;
      else if (e.data.startsWith('set_jid=')) next = e.data.slice('set_jid='.length);
      else {
        if (USER_ACTIONS.includes(e.data)) onNavigate?.();
        return;
      }
      if (next === jobIdRef.current) return;
      jobIdRef.current = next;
      setJobId(next);
      onNavigate?.();
    };
    window.addEventListener('message', onMessage);
    return () => window.removeEventListener('message', onMessage);
  }, [onNavigate]);

  return jobId;
};

export default AshbyJobBoard;
