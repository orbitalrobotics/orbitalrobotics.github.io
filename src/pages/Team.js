import React from 'react';
import Riley from '../assets/images/headshots/riley.jpg';
import Adeel from '../assets/images/headshots/adeel.jpg';
import Sohil from '../assets/images/headshots/sohil.jpeg';
import Aaron from '../assets/images/headshots/aaron.png';
import Eric from '../assets/images/headshots/Eric_Kolte.jpeg';
import Doug from '../assets/images/headshots/Doug.jpg';
import './Team.css'; // CSS file for styling

function Team() {
  return (
    <div className="team-container">
      <div className='team-background'>
        <div className="team-content">
          <h1>Meet the <g><b><i>Orbital Robotics</i></b></g> Team</h1>
          <p>Bringing you top engineering talent from the Space Industry</p>
          <section className="team-section">
            <div className="team-member">
              <img src={Aaron} alt="Team Member" />
              <h3>Aaron Borger</h3>
              <p>Founder & CEO</p>
            </div>
            <div className="team-member">
              <img src={Doug} alt="Team Member" />
              <h3>Doug Kohl</h3>
              <p>COO</p>
            </div>
            {/* <div className="team-member">
              <img src={Eric} alt="Team Member" />
              <h3>Eric Kolte</h3>
              <p>CPO</p>
            </div> */}
            <div className="team-member">
              <img src={Sohil} alt="Team Member" />
              <h3>Sohil Pokharna</h3>
              <p>Founding Engineer</p>
            </div>
            <div className="team-member">
              <img src={Riley} alt="Team Member" />
              <h3>Riley Mark</h3>
              <p>Founding Engineer</p>
            </div>
            <div className="team-member">
              <img src={Adeel} alt="Team Member" />
              <h3>Adeel Qureshi</h3>
              <p>Founding Engineer</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Team;