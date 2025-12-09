import React from 'react';
import '../styles/Glass.css';
import { motion } from 'framer-motion';

export const BentoGrid = ({ children, className = "" }) => {
    return (
        <div className={`bento-grid ${className}`} style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem',
            width: '100%'
        }}>
            {children}
        </div>
    );
};

export const BentoItem = ({ children, className = "", span = 1 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`glass-card ${className}`}
            style={{
                borderRadius: '20px',
                padding: '1.5rem',
                gridColumn: `span ${span}`,
                // Mobile fallback
                gridColumnEnd: 'span 1',
                '@media (min-width: 768px)': {
                    gridColumnEnd: `span ${span}`
                },
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
            }}
        >
            {children}
        </motion.div>
    );
};
