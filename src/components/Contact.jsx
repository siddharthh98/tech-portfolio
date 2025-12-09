import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import '../styles/Glass.css';

const Contact = () => {
    // REPLACE "YOUR_FORM_ID" WITH YOUR ACTUAL FORMSPREE ID
    const [state, handleSubmit] = useForm("mvgebdyn");

    if (state.succeeded) {
        return (
            <section id="contact" style={{ textAlign: 'center', padding: '4rem 0' }}>
                <div className="container">
                    <div className="glass-card" style={{ maxWidth: '600px', margin: '0 auto', padding: '3rem', borderRadius: '20px' }}>
                        <h2 className="gradient-text" style={{ fontSize: '2rem', marginBottom: '1rem' }}>Message Sent! 🚀</h2>
                        <p style={{ color: 'var(--text-secondary)' }}>
                            Thanks for reaching out! I'll get back to you as soon as possible.
                        </p>
                    </div>
                </div>
            </section>
        );
    }

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
                    borderRadius: '20px',
                    textAlign: 'left'
                }}>
                    <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '2rem', textAlign: 'center' }}>
                        Have a question or want to work together? Drop a message below!
                    </p>

                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div>
                            <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
                                Email Address
                            </label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                className="contact-input"
                            />
                            <ValidationError prefix="Email" field="email" errors={state.errors} />
                        </div>

                        <div>
                            <label htmlFor="message" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
                                Your Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                className="contact-input"
                                style={{ resize: 'vertical' }}
                            />
                            <ValidationError prefix="Message" field="message" errors={state.errors} />
                        </div>

                        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginTop: '1rem' }}>
                            <button type="submit" disabled={state.submitting} className="btn-primary" style={{
                                fontSize: '1.1rem',
                                padding: '1rem 2rem',
                                border: 'none',
                                borderRadius: '50px',
                                background: 'linear-gradient(45deg, var(--accent-cyan), var(--accent-purple))',
                                color: '#000',
                                fontWeight: 'bold',
                                cursor: 'pointer',
                                flex: 2
                            }}>
                                Send Message
                            </button>

                            <a href="https://www.linkedin.com/in/siddharth-singh-gaur-81aa51114/" target="_blank" rel="noreferrer" style={{
                                flex: 1,
                                textAlign: 'center',
                                padding: '1rem',
                                border: '1px solid rgba(255,255,255,0.1)',
                                borderRadius: '50px',
                                color: 'var(--text-primary)',
                                textDecoration: 'none',
                                background: 'rgba(255,255,255,0.05)'
                            }}>
                                <i className="fab fa-linkedin"></i> LinkedIn
                            </a>
                        </div>
                    </form>
                </div>
                <footer style={{ marginTop: '5rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                    <p>Designed & Built by Siddharth Singh Gaur</p>
                </footer>
            </div>
        </section>
    );
};

export default Contact;
