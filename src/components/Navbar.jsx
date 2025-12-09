import React from 'react';
import '../styles/Glass.css';

const Navbar = () => {
    return (
        <nav className="glass" style={{
            position: 'fixed',
            top: 0,
            width: '100%',
            zIndex: 1000,
            padding: '1rem 0'
        }}>
            <div className="container nav-container">
                <a href="#" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                    Siddharth<span className="accent">.</span>
                </a>
                <ul className="nav-links">
                    <li><a href="#about">About</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li>
                        <a href="#contact" style={{
                            border: '1px solid var(--accent-color)',
                            padding: '0.5rem 1rem',
                            borderRadius: '5px',
                            color: 'var(--accent-color)'
                        }}>Contact Me</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
