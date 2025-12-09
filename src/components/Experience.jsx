import React from 'react';
import { BentoGrid, BentoItem } from './BentoGrid';

const experiences = [
    {
        role: "Senior Software Engineer",
        company: "Microsoft",
        date: "Dec 2024 – Present",
        desc: "Designed and delivered the core runtime engine for the Multimodal Workstream, enhancing speech recognition performance. Led integration of Genesys CTI with Microservices architecture.",
        span: 2
    },
    {
        role: "Software Engineer 2",
        company: "Microsoft",
        date: "May 2024 – Dec 2024",
        desc: "Architected and deployed core functionalities for Generative AI integration within Copilot Studio. Supported Digital Contact Center regional expansion.",
        span: 1
    },
    {
        role: "Software Engineer 2",
        company: "Microsoft",
        date: "Mar 2022 – May 2024",
        desc: "Designed scalable microservices for expense automation. Established secure OData bridge for FnO system and contributed to platform compliance.",
        span: 1
    },
    {
        role: "Software Associate",
        company: "Goldman Sachs",
        date: "Dec 2021 – Mar 2022",
        desc: "FICC ION GCEM Strats. Developed routing of Emerging Markets SSA bonds for RFQ and streaming.",
        span: 1
    },
    {
        role: "Software Analyst",
        company: "Goldman Sachs",
        date: "May 2021 – Dec 2021",
        desc: "Created software solutions for inventory-based bond streaming and overnight price streaming.",
        span: 1
    },
    {
        role: "SDE II",
        company: "Expedia Group",
        date: "Sep 2020 – Apr 2021",
        desc: "Implemented user provisioning on Resource Manager Service & developed RBAC solutions.",
        span: 1
    },
    {
        role: "SDE I",
        company: "Expedia Group",
        date: "July 2019 – Aug 2020",
        desc: "Built IAM Test Tool for instant role switching. Implemented shallow/deep fetch capabilities.",
        span: 1
    },
    {
        role: "Internships & Early Career",
        company: "Various",
        date: "2016 – 2018",
        desc: "Expedia Intern (2018), Coding Ninjas TA (2018), ReadersCrib Developer (2016).",
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
                        <BentoItem key={index} span={exp.span}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1rem' }}>
                                <div>
                                    <h3 style={{ fontSize: '1.4rem' }}>{exp.role}</h3>
                                    <h4 style={{ color: 'var(--accent-purple)', fontWeight: 500 }}>{exp.company}</h4>
                                </div>
                                <span style={{
                                    background: 'rgba(255,255,255,0.05)',
                                    padding: '4px 8px',
                                    borderRadius: '4px',
                                    fontSize: '0.8rem',
                                    color: 'var(--text-secondary)'
                                }}>{exp.date}</span>
                            </div>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                                {exp.desc}
                            </p>
                        </BentoItem>
                    ))}
                </BentoGrid>
            </div>
        </section>
    );
};

export default Experience;
