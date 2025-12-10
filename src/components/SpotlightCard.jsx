import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/Glass.css';
import { useTheme } from '../context/ThemeContext';

const SpotlightCard = ({ children, className = "", span = 1 }) => {
    const divRef = useRef(null);
    const [isFocused, setIsFocused] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const { theme } = useTheme();

    const handleMouseMove = (e) => {
        if (!divRef.current) return;

        const div = divRef.current;
        const rect = div.getBoundingClientRect();

        setPosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    const handleFocus = () => {
        setIsFocused(true);
        setIsHovered(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
        setIsHovered(false);
    };

    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    // Dynamic grid span classes
    const spanClass = span === 2 ? 'span-2' : span === 3 ? 'span-3' : 'bento-item';

    return (
        <motion.div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`glass-card ${spanClass} ${className}`}
            style={{
                position: 'relative',
                overflow: 'hidden',
                // Keep existing glass card styles, just adding spotlight overlay support
            }}
            variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.5 }}
        >
            <div
                className="spotlight-overlay"
                style={{
                    opacity: isHovered ? 1 : 0,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(${theme === 'light' ? '0,0,0,0.05' : '255,255,255,0.06'}), transparent 40%)`,
                }}
            />
            <div style={{ position: 'relative', zIndex: 1, height: '100%', display: 'flex', flexDirection: 'column' }}>
                {children}
            </div>
        </motion.div>
    );
};

export default SpotlightCard;
