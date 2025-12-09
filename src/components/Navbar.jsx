import React from 'react';
import '../styles/Glass.css';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();

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
                        <a href="#contact" className="nav-btn">Contact Me</a>
                    </li>
                    <li>
                        <button onClick={toggleTheme} style={{
                            background: 'none',
                            border: 'none',
                            color: 'var(--text-primary)',
                            fontSize: '1.2rem',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            padding: '0.5rem'
                        }}>
                            {theme === 'dark' ? <i className="fas fa-sun"></i> : <i className="fas fa-moon"></i>}
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
