import React from 'react';
import './SearchResult.css';

import {
    FiMapPin, FiCalendar, FiDollarSign, FiPlus, FiChevronLeft, FiChevronRight, FiMessageSquare
} from 'react-icons/fi';

import listingImg from '../images/Ap1.jpeg';
import matchImg1 from '../images/Ap2.avif';
import matchImg2 from '../images/Ap3.jpeg';
import matchImg3 from '../images/Ap4.jpeg';
import matchImg4 from '../images/Ap1.jpeg';

export default function SearchResults() {
    const searchResults = [
        { id: 1, username: '@niko_153', image: matchImg1 },
        { id: 2, username: '@niko_153', image: matchImg2 },
        { id: 3, username: '@niko_153', image: matchImg3 },
        { id: 4, username: '@niko_153', image: matchImg4 },
    ];

    return (
        <div className="search-page-wrapper">
            <div className="profile-container">
                {/* --- Left Sidebar --- */}
                <aside className="profile-sidebar">
                    <div className="profile-avatar">
                        <span className="avatar-letter">N</span>
                        <button className="add-photo-btn"><FiPlus size={12} /> Add</button>
                    </div>
                    <p className="profile-username">Nelly_03</p>
                    <p className="profile-email">nelly03@gmail.com</p>
                </aside>

                {/* --- Main Content --- */}
                <main className="profile-main-content">
                    <div className="profile-header">
                        <h2>My Profile</h2>
                        <p>
                            Hosts and guests can see your profile and it may appear across RoomSwap to help us build trust in our community. <a href="/learn-more">Learn more</a>
                        </p>
                    </div>

                    <section className="profile-section">
                        <h3>My Listings</h3>
                        <div className="listings-container">
                            <div className="image-carousel">
                                <button className="carousel-arrow left"><FiChevronLeft size={24} /></button>
                                <img src={listingImg} alt="User's listing" className="listing-image" />
                                <button className="carousel-arrow right"><FiChevronRight size={24} /></button>
                            </div>
                            <div className="listing-details">
                                <div className="detail-item">
                                    <FiMapPin className="detail-icon" />
                                    <span>Lubeck</span>
                                </div>
                                <div className="detail-item">
                                    <FiCalendar className="detail-icon" />
                                    <span>26.07.25 - 27.08.25</span>
                                </div>
                                <div className="detail-item">
                                    <FiDollarSign className="detail-icon" />
                                    <span>750 €</span>
                                </div>
                            </div>
                        </div>
                        <textarea
                            className="room-details-textarea"
                            placeholder="Add Room Details"
                            defaultValue="A bright and fully furnished private room in a 3-bedroom apartment, located 5 minutes from the city center. The room includes a bed, desk, wardrobe, and large window. Shared kitchen, bathroom, and living area with Wi-Fi included. Ideal for students."
                        />
                    </section>

                    <section className="profile-section">
                        <h3>My Matches</h3>
                        <div className="results-grid">
                            {searchResults.map(result => (
                                <div key={result.id} className="result-card">
                                    <img src={result.image} alt={`Match from ${result.username}`} className="result-image" />
                                    <div className="result-info">
                                        <span className="result-username">{result.username}</span>
                                        <div className="message-icon-wrapper">
                                            <FiMessageSquare className="message-icon" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
}
