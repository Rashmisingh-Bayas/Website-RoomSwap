import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import all your components
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SignIn from './components/SignIn';
import Register from './components/Register';
import UserProfile from './components/UserProfile';
import SearchResults from './components/SearchResult'; // Add this import
import './App.css';

function App() {
  // Both modal states are managed here
  const [isSignInOpen, setSignInOpen] = useState(false);
  const [isRegisterOpen, setRegisterOpen] = useState(false);

  // --- Handlers to switch between modals ---
  const handleGoToRegister = () => {
    setSignInOpen(false);  // Close Sign In
    setRegisterOpen(true); // Open Register
  };

  const handleGoToSignIn = () => {
    setRegisterOpen(false); // Close Register
    setSignInOpen(true);  // Open Sign In
  };

  return (
    <Router>
      <div className="app-container">
        {/* Pass the function to open the sign-in modal down to the Navbar */}
        <Navbar onSignInClick={() => setSignInOpen(true)} />

        <main className="app-content">
          <Routes>
            {/* Pass the function to open the register modal down to Home */}
            <Route path="/" element={<Home onRegisterClick={() => setRegisterOpen(true)} />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/search-results" element={<SearchResults />} /> {/* Add this route */}
          </Routes>
        </main>

        <Footer />
      </div>

      {/* Render both modals here, controlled by App's state */}
      <SignIn
        isOpen={isSignInOpen}
        onClose={() => setSignInOpen(false)}
        onGoToRegister={handleGoToRegister}
      />
      <Register
        isOpen={isRegisterOpen}
        onClose={() => setRegisterOpen(false)}
        onGoToSignIn={handleGoToSignIn}
      />
    </Router>
  );
}

export default App;