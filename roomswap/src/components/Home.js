import React, { useState } from 'react';
import './Home.css';
import Register from './Register';
import RoomCollage from './RoomCollage';

export default function Home() {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
      {/* New wrapper for the side-by-side layout */}
      <div className="home-layout-container">
        {/* Left Side: Text Content */}
        <div className="hero-text-content">
          <h1 className="main-hero-title">Room Swap</h1>
          <p className="hero-subtitle">Your Key Abroad, Their Key Here</p>
          <button className="hero-button" onClick={() => setModalOpen(true)}>
            Get started
          </button>
        </div>

        {/* Right Side: Image Collage */}
        <div className="hero-collage-wrapper">
          <RoomCollage />
        </div>
      </div>

      {/* The Register modal logic remains the same */}
      <Register
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}