import React from 'react';
import '../styles/Glass.css';

const Contact = () => {
    return (
        <section id="contact" style={{ textAlign: 'center' }}>
            <div className="container">
                <h2 className="section-heading" style={{ marginBottom: '3rem' }}>
                    Get In <span className="accent">Touch</span>
                </h2>
                <div className="glass-card" style={{
                    maxWidth: '600px',
                    margin: '0 auto',
                    padding: '3rem',
                    borderRadius: '10px'
                }}>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-primary)', marginBottom: '2rem' }}>
                        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>
                    <a href="mailto:siddharthh.gaurr@gmail.com" className="btn-primary" style={{
                        fontSize: '1.2rem',
                        padding: '1rem 2rem',
                        border: '1px solid var(--accent-color)',
                        borderRadius: '5px',
                        color: 'var(--accent-color)',
                        display: 'inline-block'
                    }}>
                        Say Hello
                    </a>
                    <a href="https://www.linkedin.com/in/siddharth-singh-gaur-81aa51114/" target="_blank" rel="noreferrer" className="btn-secondary" style={{
                        fontSize: '1.2rem',
                        padding: '1rem 2rem',
                        marginLeft: '1rem',
                        border: '1px solid var(--text-secondary)',
                        borderRadius: '5px',
                        color: 'var(--text-primary)',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        textDecoration: 'none'
                    }}>
                        <i className="fab fa-linkedin"></i> LinkedIn
                    </a>
                </div>
                <footer style={{ marginTop: '5rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                    <p>Designed & Built by Siddharth Singh Gaur</p>
                </footer>
            </div>
        </section>
    );
};

export default Contact;
