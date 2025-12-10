import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Glass.css';

export const BentoGrid = ({ children }) => {
    return (
        <motion.div
            className="bento-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
                hidden: { opacity: 0 },
                visible: {
                    opacity: 1,
                    transition: {
                        staggerChildren: 0.15
                    }
                }
            }}
            style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '1.5rem',
                width: '100%'
            }}
        >
            {children}
        </motion.div>
    );
};

export const BentoItem = ({ children, className = "", span = 1 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`glass-card bento-item ${span > 1 ? `span-${span}` : ''} ${className}`}
            style={{
                borderRadius: '20px',
                padding: '1.5rem',
                // gridColumn logic successfully moved to CSS for responsiveness
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
            }}
        >
            {children}
        </motion.div>
    );
};
