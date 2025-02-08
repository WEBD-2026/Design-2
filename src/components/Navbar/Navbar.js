import React, { useState, useEffect } from "react";
import { FiMenu } from "react-icons/fi";
import { GrClose } from "react-icons/gr";
import "./Navbar.css"; // Import the CSS file

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const [scrolling, setScrolling] = useState(false);

    // Toggle Mobile Menu
    const menuHandler = () => {
        setOpenMenu(!openMenu);
    };

    // Scroll Effect
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <nav className={`navbar ${scrolling ? "scrolling" : ""}`}>
                {/* Desktop Navigation */}
                <ul className="nav-links">
                    <li><a href="/">Home</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Pricing</a></li>
                    <li><a href="/">Testimonials</a></li>
                </ul>

                {/* Mobile Menu Button */}
                <div className="menu-btn" onClick={menuHandler} aria-label="Menu">
                    {openMenu ? <GrClose size={25} /> : <FiMenu size={25} />}
                </div>

                {/* Mobile Navigation */}
                <ul className={`nav-links-mobile ${openMenu ? "open" : ""}`}>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Pricing</a></li>
                    <li><a href="/">Testimonials</a></li>
                </ul>
            </nav>

            {/* Backdrop for mobile menu */}
            {openMenu && <div className="menu-backdrop show" onClick={menuHandler}></div>}
        </>
    );
};

export default Navbar;
