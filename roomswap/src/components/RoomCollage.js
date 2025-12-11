import React from 'react';
import './RoomCollage.css';

// --- IMPORTANT ---
// Replace these with the actual paths to your images
import diningImg from '../images/dining-room.jpg';
import bedImg from '../images/bed-room.jpg';
import livingImg from '../images/living-room.jpg';


export default function RoomCollage() {
  const rooms = [
    { id: 'dining', src: diningImg, label: 'DINING ROOM' },
    { id: 'bed', src: bedImg, label: 'BED ROOM' },
    { id: 'living', src: livingImg, label: 'LIVING ROOM' },
  ];

  return (
    <div className="collage-section">
      <div className="collage-container">
        {rooms.map(room => (
          <div key={room.id} className={`collage-item collage-item--${room.id}`}>
            <img src={room.src} alt={room.label} className="collage-image" />
            <div className="collage-label">{room.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}