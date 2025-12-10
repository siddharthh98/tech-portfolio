import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const Hero = () => {
    const [text, setText] = useState('');
    const fullText = "Senior Software Engineer";

    // Typewriter effect
    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setText(fullText.substring(0, i));
            i++;
            if (i > fullText.length) clearInterval(interval);
        }, 100);
        return () => clearInterval(interval);
    }, []);

    // 3D Tilt Effect
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-100, 100], [10, -10]);
    const rotateY = useTransform(x, [-100, 100], [-10, 10]);

    const handleMouseMove = (event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct * 200);
        y.set(yPct * 200);
    };

    return (
        <section id="about" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '80px' }}>
            <div className="container hero-container">
                <div style={{ flex: 1, width: '100%' }}>
                    <motion.span
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                        style={{
                            background: 'linear-gradient(to right, #00fff2, #bd34fe)',
                            webkitBackgroundClip: 'text',
                            color: 'transparent',
                            fontSize: '1.2rem', fontWeight: 'bold'
                        }}
                    >
                        Hello, I'm
                    </motion.span>
                    <h1 className="hero-title">
                        Siddharth Singh Gaur
                    </h1>
                    <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', color: '#8b949e', height: 'auto', minHeight: '2.5rem', marginBottom: '1.5rem' }}>
                        {text}<span style={{ animation: 'blink 1s infinite' }}>|</span>
                    </h2>
                    <p style={{ color: '#8b949e', maxWidth: '600px', marginBottom: '2.5rem', fontSize: '1.1rem' }}>
                        Architecting <strong>scalable microservices</strong> and <strong>AI-driven runtime engines</strong>. Specializing in secure enterprise integrations, high-performance cloud systems, and enhancing user experiences at scale.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                        <a href="#projects" className="hero-btn-primary">View Work</a>
                        <a href="#contact" className="hero-btn-secondary">Contact Me</a>
                    </div>
                </div>

                <div
                    style={{ flex: 1, display: 'flex', justifyContent: 'center', perspective: 1000, width: '100%' }}
                    onMouseMove={handleMouseMove}
                >
                    {/* 3D Code Block */}
                    <motion.div
                        className="hero-code-card"
                        style={{
                            rotateX,
                            rotateY,
                        }}
                    >
                        <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
                            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }}></div>
                            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }}></div>
                            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f' }}></div>
                        </div>
                        <code className="code-content">
                            <span className="token-keyword">const</span> <span className="token-entity">developer</span> = &#123;<br />
                            &nbsp;&nbsp;name: <span className="token-string">"Siddharth"</span>,<br />
                            &nbsp;&nbsp;role: <span className="token-string">"Senior Engineer"</span>,<br />
                            &nbsp;&nbsp;stack: [<span className="token-string">"Java"</span>, <span className="token-string">"C#"</span>, <span className="token-string">"AWS"</span>, <span className="token-string">"Azure"</span>],<br />
                            &nbsp;&nbsp;mission: <span className="token-string">"Build the Future"</span><br />
                            &#125;;
                        </code>
                    </motion.div>
                </div>
            </div>
            <style>{`
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
      `}</style>
        </section>
    );
};

export default Hero;
