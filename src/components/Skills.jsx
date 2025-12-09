import React from 'react';
import '../styles/Glass.css';

const skillsData = {
    Languages: ["Java", "C#", "C++", "JavaScript", "Python"],
    Frameworks: ["Dotnet", "SpringBoot", "React", "Node.js"],
    Cloud: ["Azure", "AWS", "Google Cloud"],
    Tools: ["Git", "Docker", "Kubernetes", "Figma"]
};

const Skills = () => {
    return (
        <section id="skills">
            <div className="container">
                <h2 className="section-heading" style={{ marginBottom: '3rem' }}>
                    Technical <span className="accent">Skills</span>
                </h2>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '2rem'
                }}>
                    {Object.entries(skillsData).map(([category, skills]) => (
                        <div key={category} className="glass-card" style={{ padding: '1.5rem', borderRadius: '15px' }}>
                            <h3 style={{
                                marginBottom: '1rem',
                                fontSize: '1.2rem',
                                background: 'linear-gradient(to right, #00fff2, #bd34fe)',
                                webkitBackgroundClip: 'text',
                                color: 'transparent'
                            }}>{category}</h3>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                                {skills.map(skill => (
                                    <span key={skill} style={{
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        background: 'rgba(255,255,255,0.03)',
                                        color: 'var(--text-primary)',
                                        padding: '0.4rem 0.8rem',
                                        borderRadius: '50px',
                                        fontSize: '0.85rem'
                                    }}>
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
