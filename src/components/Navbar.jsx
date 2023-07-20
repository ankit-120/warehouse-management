import React, { useState } from 'react';
import './Navbar.css'; // Import your CSS file for styling

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleMenuClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">Your Logo</div>
            <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#services">Services</a>
                <a href="#contact">Contact</a>
            </div>
            <div className="navbar-menu" onClick={handleMenuClick}>
                <div className={`menu-line ${isOpen ? 'line1' : ''}`}></div>
                <div className={`menu-line ${isOpen ? 'line2' : ''}`}></div>
                <div className={`menu-line ${isOpen ? 'line3' : ''}`}></div>
            </div>
        </nav>
    );
};

export default Navbar;
