import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { hardwareProducts, softwareProducts } from '../data/productsData';

// Flattened product list for the header submenu, grouped by kind.
const groups = [
  { label: 'Hardware', items: hardwareProducts },
  { label: 'Software', items: softwareProducts },
];

// Desktop nav "Products" trigger with a hover/focus dropdown of every product —
// closes the gap where the navbar only linked to the index while the footer
// deep-linked to detail pages.
const ProductDropdown = ({ active }) => {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef();

  const openNow = () => {
    clearTimeout(closeTimer.current);
    setOpen(true);
  };
  const closeSoon = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  };

  return (
    <div className="relative" onMouseEnter={openNow} onMouseLeave={closeSoon}>
      <Link
        to="/products"
        aria-haspopup="true"
        aria-expanded={open}
        onFocus={openNow}
        onKeyDown={(e) => e.key === 'Escape' && setOpen(false)}
        className={`relative inline-flex items-center gap-1 font-medium transition-colors ${
          active ? 'text-primary' : 'text-text-secondary'
        } hover:text-primary`}
      >
        Products
        <svg
          className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
        </svg>
      </Link>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.18 }}
            onMouseEnter={openNow}
            onMouseLeave={closeSoon}
            className="absolute left-1/2 -translate-x-1/2 top-full pt-4"
          >
            <div className="w-64 rounded-xl bg-surface/95 backdrop-blur-xl border border-white/10 shadow-elev-2 p-2">
              {groups.map((group) => (
                <div key={group.label} className="py-1">
                  <div className="px-3 py-1 text-eyebrow font-semibold uppercase text-text-muted">
                    {group.label}
                  </div>
                  {group.items.map((item) => (
                    <Link
                      key={item.id}
                      to={`/products/${item.id}`}
                      className="block px-3 py-2 rounded-lg text-sm text-text-secondary hover:text-white hover:bg-white/5 transition-colors"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              ))}
              <div className="border-t border-white/10 mt-1 pt-1">
                <Link
                  to="/products"
                  className="block px-3 py-2 rounded-lg text-sm font-medium text-primary hover:bg-primary/10 transition-colors"
                >
                  View all products →
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProductDropdown;
