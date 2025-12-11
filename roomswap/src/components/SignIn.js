import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Add this import
import './Register.css'; // You can reuse the CSS from the Register modal

// The component now accepts an `onGoToRegister` prop
export default function SignIn({ isOpen, onClose, onGoToRegister }) {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate(); // Add this hook

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Signed in! (Demo only)");
    onClose(); // Close the modal first
    navigate('/profile'); // Then redirect to profile page
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-button" onClick={onClose}>&times;</button>
        <h1 className="main-title">Welcome back!</h1>
        <p className="subtitle">Sign in to your account.</p>

        <form onSubmit={handleSubmit} className="form">
          <input type="text" placeholder="Enter email address or phone number" required />

          <div className="password-wrapper">
            <input type={showPassword ? 'text' : 'password'} placeholder="Enter password" required />
            <button type="button" className="toggle-password" onClick={() => setShowPassword(!showPassword)}>
              <svg className="eye-icon" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 24 24" width="20" fill="#6F6C6C"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 4.5C7.05 4.5 2.73 7.61 1 12c1.73 4.39 6.05 7.5 11 7.5s9.27-3.11 11-7.5C21.27 7.61 16.95 4.5 12 4.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/><circle cx="12" cy="12" r="2.5"/></svg>
            </button>
          </div>

          <button type="submit" className="signup-button">Sign in →</button>

          <div className="divider">
            <div className="line"></div>
            <span>or</span>
            <div className="line"></div>
          </div>

          <button type="button" className="oauth-button google">
            <svg className="oauth-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="22px" height="22px"><path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" /><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" /><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" /><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.574l6.19,5.238C39.712,34.464,44,28.756,44,24C44,22.659,43.862,21.35,43.611,20.083z" /></svg>
            Sign in with Google
          </button>
          <button type="button" className="oauth-button facebook">
            <svg className="oauth-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22px" height="22px" fill="#1877F2"><path d="M22,12c0-5.52-4.48-10-10-10S2,6.48,2,12c0,4.84,3.44,8.87,8,9.8V15H8v-3h2V9.5C10,7.57,11.57,6,13.5,6H16v3h-2c-0.55,0-1,0.45-1,1v2h3v3h-3v6.95C18.05,21.45,22,17.19,22,12z"/></svg>
            Sign in with Facebook
          </button>
        </form>

        {/* This is the new button */}
        <button type="button" className="create-account-link" onClick={onGoToRegister}>
          Not a member? Create an account
        </button>
      </div>
    </div>
  );
}