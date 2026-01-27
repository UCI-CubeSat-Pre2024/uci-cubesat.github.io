import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { IoCloseCircleSharp } from "react-icons/io5";

import "./NavbarStyle.css";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const isActive = (path: string) => {
        if (path === '/home') {
            return location.pathname === '/home' || location.pathname === '/';
        }
        return location.pathname.startsWith(path);
    };

    return (
        <>
            <a href="#main-content" className="skip-link">Skip to content</a>
            <nav className="navbar">
                <div className="navbar-inner">
                    <Link to="/home" className="nav-logo">
                        <img
                            src="/images/CubeSat_logo.png"
                            alt="UCI CubeSat logo"
                            width={40}
                            height={40}
                        />
                    </Link>

                    <div className="nav-links">
                        <Link to="/home" className={`nav-link ${isActive('/home') ? 'active' : ''}`}>
                            Home
                        </Link>

                        <div className="dropdown">
                            <Link to="/aboutus/what-we-do" className={`nav-link ${isActive('/aboutus') ? 'active' : ''}`}>
                                About Us
                            </Link>
                            <div className="dropdown-content">
                                <Link to="/aboutus/what-we-do" className="dropdown-item">
                                    What We Do
                                </Link>
                                <Link to="/aboutus/meet-the-team" className="dropdown-item">
                                    Meet the Team
                                </Link>
                            </div>
                        </div>

                        <Link to="/contact" className="nav-cta">
                            Contact Us
                        </Link>
                    </div>

                    <button
                        className="hamburger-btn"
                        onClick={toggleMobileMenu}
                        aria-label="Open navigation menu"
                    >
                        <FaBars />
                    </button>
                </div>
            </nav>

            {isMobileMenuOpen && (
                <div className="mobile-overlay">
                    <button
                        className="mobile-close"
                        onClick={toggleMobileMenu}
                        aria-label="Close navigation menu"
                    >
                        <IoCloseCircleSharp />
                    </button>
                    <div className="mobile-links">
                        <Link onClick={toggleMobileMenu} to="/home" className="mobile-link">Home</Link>
                        <Link onClick={toggleMobileMenu} to="/aboutus/what-we-do" className="mobile-link">What We Do</Link>
                        <Link onClick={toggleMobileMenu} to="/aboutus/meet-the-team" className="mobile-link">Meet the Team</Link>
                        <Link onClick={toggleMobileMenu} to="/contact" className="mobile-link">Contact</Link>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;
