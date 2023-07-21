import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleMenuClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            {/* <div className="navbar-logo">Your Logo</div> */}
            <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
                <div className='navLinkDiv'>
                    <Link to={'/'}>Warehouses</Link>
                </div>
                <div className='navLinkDiv'>
                    <Link to={'/addItem'}>Add Warehouse</Link>
                </div>
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
