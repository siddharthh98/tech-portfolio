import React from 'react';
import { BentoGrid, BentoItem } from './BentoGrid';

const projects = [
    {
        title: "Quippler",
        tech: ["ReactJS", "Firebase"],
        desc: "Chrome extension to track highlighted quotes (200 words max) with auto-email notifications.",
        link: "https://github.com/siddharthh98/quippler",
        span: 2
    },
    {
        title: "Image Forensics",
        tech: ["Matlab", "Signal Processing"],
        desc: "Copy-move forgery detection algorithm using local binary patterns.",
        span: 1
    },
    {
        title: "Portfolio V2",
        tech: ["React", "Vite", "Framer"],
        desc: "The current portfolio site featuring cosmic bento design and gradient meshes.",
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
                        <BentoItem key={index} span={project.span}>
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
                        </BentoItem>
                    ))}
                </BentoGrid>
            </div>
        </section>
    );
};

export default Projects;
