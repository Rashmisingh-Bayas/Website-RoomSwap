import React from 'react';
import './About.css';

export default function About() {
  const teamMembers = [
    { name: 'Krisha Karki', role: 'Developer' },
    { name: 'Mykhailo Masnyk', role: 'Developer' },
    { name: 'Chantel Chapoterera', role: 'Developer' },
    { name: 'Natavan Jafarova', role: 'UI/UX Designer & Developer' },
    { name: 'Rashmisingh Bayas', role: 'Developer' },
    { name: 'Jonas Mumm', role: 'Database Architect & Developer' },
    { name: 'Bakhodir Rasulov', role: 'Developer' },
  ];

  return (
    <div className="about-page">
      <div className="about-content">
        <p className="about-intro">
          We are a passionate group of 7 dedicated individuals committed to making your abroad experiences seamless and connected.
        </p>

        <div className="team-section">
          <h2 className="team-title">Meet Our Team</h2>
          <div className="team-grid">
            {teamMembers.map((member) => (
              <div key={member.name} className="team-card">
                <h3 className="member-name">{member.name}</h3>
                <p className="member-role">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}