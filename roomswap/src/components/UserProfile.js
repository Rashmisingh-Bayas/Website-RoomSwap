import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './UserProfile.css';


const UserProfile = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    offerLocation: '',
    offerDates: '',
    offerRent: '',
    offerDescription: '',
    searchLocation: '',
    searchDates: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', form);
    navigate('/search-results');
  };

  return (
    <div className="user-profile-page">
      <div className="profile-content">
        {/* Left Sidebar */}
        <div className="profile-sidebar">
          <div className="profile-avatar">
            <span className="avatar-letter">N</span>
          </div>

          <div className="user-info">
            <div className="username-tag">Nelly_03</div>
            <div className="email-tag">nelly03@gmail.com</div>
          </div>
        </div>

        {/* Main Content */}
        <div className="profile-main">
          <div className="profile-header">
            <h1>My Profile</h1>
            <p className="profile-description">
              Hosts and guests can see your profile and it may appear across RoomSwap to help us build trust in our community. <a href="#learn-more">Learn more</a>
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            {/* Offering My Room Section */}
            <section className="form-section">
              <h2>Offering My Room</h2>
              <p className="section-subtitle">I am offering my current accommodation for an international room swap.</p>

              <div className="form-layout">
                <div className="form-fields">
                  <div className="field-group">
                    <div className="icon-wrapper">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                        <circle cx="12" cy="10" r="3"/>
                      </svg>
                    </div>
                    <div className="field-content">
                      <label>Location</label>
                      <input
                        type="text"
                        name="offerLocation"
                        value={form.offerLocation}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="field-group">
                    <div className="icon-wrapper">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                        <line x1="16" y1="2" x2="16" y2="6"/>
                        <line x1="8" y1="2" x2="8" y2="6"/>
                        <line x1="3" y1="10" x2="21" y2="10"/>
                      </svg>
                    </div>
                    <div className="field-content">
                      <label>Dates</label>
                      <input
                        type="text"
                        name="offerDates"
                        value={form.offerDates}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="field-group">
                    <div className="icon-wrapper">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="12" y1="1" x2="12" y2="23"/>
                        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                      </svg>
                    </div>
                    <div className="field-content">
                      <label>Rent</label>
                      <input
                        type="text"
                        name="offerRent"
                        value={form.offerRent}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="room-description">
                  <label className="description-label">Add Room Description</label>
                  <div className="description-box">
                    <textarea
                      name="offerDescription"
                      value={form.offerDescription}
                      onChange={handleChange}
                      placeholder=""
                    />
                    <button type="button" className="add-photo-description">
                      📷 Add photo
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* Searching for a Room Section */}
            <section className="form-section">
              <h2>Searching for a Room</h2>
              <p className="section-subtitle">Searching for a room to swap with another international student.</p>

              <div className="search-fields">
                <div className="field-group">
                  <div className="icon-wrapper">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <div className="field-content">
                    <label>Location</label>
                    <input
                      type="text"
                      name="searchLocation"
                      value={form.searchLocation}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="field-group">
                  <div className="icon-wrapper">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                      <line x1="16" y1="2" x2="16" y2="6"/>
                      <line x1="8" y1="2" x2="8" y2="6"/>
                      <line x1="3" y1="10" x2="21" y2="10"/>
                    </svg>
                  </div>
                  <div className="field-content">
                    <label>Dates</label>
                    <input
                      type="text"
                      name="searchDates"
                      value={form.searchDates}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
            </section>

            <button type="submit" className="submit-button">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;