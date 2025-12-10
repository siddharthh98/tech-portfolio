import React from 'react';
import { BentoGrid } from './BentoGrid';
import SpotlightCard from './SpotlightCard';

const projects = [
    {
        title: "Quippler",
        tech: ["ReactJS", "Firebase"],
        desc: "Productivity-focused Chrome extension for knowledge retention, featuring quote tracking and automated email digests.",
        link: "https://github.com/siddharthh98/quippler",
        span: 2
    },
    {
        title: "Image Forensics",
        tech: ["Matlab", "Signal Processing"],
        desc: "Novel algorithm for Digital Image Forensics, detecting copy-move forgery with high accuracy using Local Binary Patterns.",
        span: 1
    },
    {
        title: "Portfolio V2",
        tech: ["React", "Vite", "Framer"],
        desc: "Modern developer portfolio built with React & Vite, showcasing advanced 3D animations, glassmorphism, and responsive design.",
        span: 1
    }
];

const Projects = () => {
    return (
        <section id="projects">
            <div className="container">
                <h2 className="section-heading" style={{ marginBottom: '3rem' }}>
                    Featured <span className="accent">Projects</span>
                </h2>
                <BentoGrid>
                    {projects.map((project, index) => (
                        <SpotlightCard key={index} span={project.span}>
                            <div style={{ marginBottom: 'auto' }}>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{project.title}</h3>
                                <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                                    {project.tech.map(t => (
                                        <span key={t} style={{
                                            color: 'var(--accent-cyan)',
                                            fontSize: '0.8rem',
                                            fontFamily: 'monospace'
                                        }}>#{t}</span>
                                    ))}
                                </div>
                                <p style={{ color: 'var(--text-secondary)' }}>
                                    {project.desc}
                                </p>
                            </div>

                            {project.link && (
                                <a href={project.link} target="_blank" rel="noreferrer" style={{
                                    marginTop: '1.5rem',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    color: 'var(--text-primary)',
                                    fontWeight: 500
                                }}>
                                    View Code <i className="fa-solid fa-arrow-up-right-from-square"></i>
                                </a>
                            )}
                        </SpotlightCard>
                    ))}
                </BentoGrid>
            </div>
        </section>
    );
};

export default Projects;
