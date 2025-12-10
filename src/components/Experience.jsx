import React from 'react';
import { BentoGrid } from './BentoGrid';
import SpotlightCard from './SpotlightCard';

// Helper to handle GH Pages base path
const getLogoPath = (filename) => {
    // In production (GH Pages), we might need the repository name prefix
    // But Vite handles 'public' folder assets at root. 
    // If base is set to '/tech-portfolio/', then public assets are at '/tech-portfolio/assets/...'
    const basePath = import.meta.env.BASE_URL;
    return `${basePath}assets/logos/${filename}`;
};

const experiences = [
    {
        role: "Senior Software Engineer",
        company: "Microsoft",
        logo: getLogoPath("microsoft.svg"),
        date: "Dec 2024 – Present",
        desc: "Architected the core runtime engine for advanced speech recognition, driving significant performance gains in multimodal interactions. Spearheaded the microservices transformation of critical telephony infrastructure for seamless cloud scalability.",
        span: 2
    },
    {
        role: "Software Engineer 2",
        company: "Microsoft",
        logo: getLogoPath("microsoft.svg"),
        date: "May 2024 – Dec 2024",
        desc: "Engineered core Generative AI capabilities within Copilot Studio, empowering enterprise-grade conversational systems. Optimized regional deployment strategies for global contact center solutions.",
        span: 1
    },
    {
        role: "Software Engineer 2",
        company: "Microsoft",
        logo: getLogoPath("microsoft.svg"),
        date: "Mar 2022 – May 2024",
        desc: "Designed high-throughput microservices for automated financial workflows. Implemented secure data bridges for ERP system integrations, ensuring rigorous regulatory compliance.",
        span: 1
    },
    {
        role: "Software Associate",
        company: "Goldman Sachs",
        logo: getLogoPath("goldman.svg"),
        date: "Dec 2021 – Mar 2022",
        desc: "Developed low-latency routing algorithms for Emerging Markets bond trading. Enhanced real-time RFQ and price streaming systems for high-frequency trading environments.",
        span: 1
    },
    {
        role: "Software Analyst",
        company: "Goldman Sachs",
        logo: getLogoPath("goldman.svg"),
        date: "May 2021 – Dec 2021",
        desc: "Engineered robust solutions for Inventory Management and Overnight Price Streaming, significantly optimizing bond trading liquidity and operational efficiency.",
        span: 1
    },
    {
        role: "SDE II",
        company: "Expedia Group",
        logo: getLogoPath("expedia.png"),
        date: "Sep 2020 – Apr 2021",
        desc: "Implemented comprehensive User Provisioning systems and granular RBAC solutions, fortifying platform security and access management resources.",
        span: 1
    },
    {
        role: "SDE I",
        company: "Expedia Group",
        logo: getLogoPath("expedia.png"),
        date: "July 2019 – Aug 2020",
        desc: "Built an IAM Simulation Tool for instant role switching, accelerating testing cycles by 40%. Optimized data retrieval with advanced shallow & deep fetch strategies.",
        span: 1
    },
    {
        role: "Internships & Early Career",
        company: "Various",
        logo: null,
        date: "2016 – 2018",
        desc: "Expedia Intern (2018), Coding Ninjas TA (2018), ReadersCrib Developer (2016). Focus on full-stack development and algorithm education.",
        span: 2
    }
];

const Experience = () => {
    return (
        <section id="experience">
            <div className="container">
                <h2 className="section-heading" style={{ marginBottom: '3rem' }}>
                    Work <span className="accent">Experience</span>
                </h2>
                <BentoGrid>
                    {experiences.map((exp, index) => (
                        <SpotlightCard key={index} span={exp.span}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1rem' }}>
                                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                    {exp.logo && (
                                        <img
                                            src={exp.logo}
                                            alt={exp.company}
                                            className="company-logo"
                                            style={{
                                                width: '60px',
                                                height: '60px',
                                                objectFit: 'contain'
                                            }}
                                        />
                                    )}
                                    <div>
                                        <h3 style={{ fontSize: '1.2rem', lineHeight: '1.2' }}>{exp.role}</h3>
                                        <h4 style={{ color: 'var(--accent-purple)', fontWeight: 500, fontSize: '0.9rem' }}>{exp.company}</h4>
                                    </div>
                                </div>
                                <span style={{
                                    background: 'rgba(255,255,255,0.05)',
                                    padding: '4px 8px',
                                    borderRadius: '4px',
                                    fontSize: '0.75rem',
                                    color: 'var(--text-secondary)',
                                    whiteSpace: 'nowrap',
                                    marginLeft: '0.5rem'
                                }}>{exp.date}</span>
                            </div>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.95rem' }}>
                                {exp.desc}
                            </p>
                        </SpotlightCard>
                    ))}
                </BentoGrid>
            </div>
        </section>
    );
};

export default Experience;
