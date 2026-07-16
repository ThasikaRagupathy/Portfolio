import React, { useRef } from 'react';

export default function About() {
    const bioCardRef = useRef(null);
    const skillsCardRef = useRef(null);

    // Dynamic mouse move handler for radial glows
    const handleMouseMove = (e, ref) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        ref.current.style.setProperty('--x', `${x}px`);
        ref.current.style.setProperty('--y', `${y}px`);
    };

    const timelineData = [
        {
            year: "2023 - Present",
            title: "Bachelor of Science in Information Technology",
            org: "University of Vavuniya"
        },
        {
            year: "2018 - 2019",
            title: "Diploma in IT & Diploma in English",
            org: "Esoft Metro Campus"
        }
    ];

    const skillsData = [
        {
            category: "Frontend",
            skills: ["HTML5 / CSS3", "JavaScript", "TypeScript", "React / Next.js", "Figma / UI Design"]
        },
        {
            category: "Backend",
            skills: ["Node.js", "Express", "Python", "Java"]
        },
        {
            category: "Databases",
            skills: ["MySQL", "PostgreSQL", "MongoDB"]
        }
    ];

    return (
        <section className="about-section" id="about">
            <div className="container">
                <div className="section-header scroll-reveal">
                    <h2 className="section-title">About Me</h2>
                    <p className="section-subtitle">A glimpse into my background, philosophy, and tech stack.</p>
                </div>

                <div className="about-grid">
                    {/* Bio & Journey Card */}
                    <div 
                        className="about-bio card glass scroll-reveal"
                        ref={bioCardRef}
                        onMouseMove={(e) => handleMouseMove(e, bioCardRef)}
                    >
                        <div className="card-glow"></div>
                        <h3 className="card-title">My Journey</h3>
                        <p className="bio-text">
Hello! I'm Thasika Ragupathy, an Information Technology undergraduate at the University of Vavuniya with a passion for technology and innovation. I enjoy building digital solutions through software development, web technologies, data analytics, and UI/UX design.

Through academic projects, industry experience, and leadership roles, I have developed strong technical and problem-solving skills. I am committed to continuous learning and creating impactful solutions that deliver meaningful user experiences.                        </p>
                        <p className="bio-text">
I am always eager to connect with like-minded individuals, collaborate on exciting projects, and explore new opportunities in the tech industry. Let's build something amazing together!
                        </p>
                        
                        <div className="experience-timeline">
                            {timelineData.map((item, index) => (
                                <div className="timeline-item" key={index}>
                                    <span className="timeline-year">{item.year}</span>
                                    <h4 className="timeline-title">{item.title}</h4>
                                    <p className="timeline-org">{item.org}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Tech Stack & Skills Card */}
                    <div 
                        className="about-skills card glass scroll-reveal"
                        ref={skillsCardRef}
                        onMouseMove={(e) => handleMouseMove(e, skillsCardRef)}
                    >
                        <div className="card-glow"></div>
                        <h3 className="card-title">Tech Stack</h3>
                        <p className="skills-desc">Here are the main languages, frameworks, and tools I use to bring ideas to life:</p>
                        
                        <div className="skills-categories">
                            {skillsData.map((cat, idx) => (
                                <div className="skills-category" key={idx}>
                                    <h4>{cat.category}</h4>
                                    <div className="skills-list">
                                        {cat.skills.map((skill, sIdx) => (
                                            <span className="skill-tag" key={sIdx}>{skill}</span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
