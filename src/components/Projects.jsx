import React from 'react';

export default function Projects() {
    const projectsData = [
        {
            category: "Web site / Web App",
            featured: false,
            title: "Internship & Career Development Hub",
            description: [<p>•Developed a web-based platform to help students find internships and career opportunities.</p>,
            <p>•Designed and implemented user-friendly UI/ UX for smooth navigation and accessibility</p>],
            tags: [" HTML", "CSS", "JavaScript", "React.js", "MySQL","next.js"],
            imgSrc: "src/assets/project01.png" ,
             liveLink: "#",
             codeLink: "https://github.com/thasikaragupathy/career-guidance-hub"
        }
    ];

    const handleMouseMove = (e) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--x', `${x}px`);
        card.style.setProperty('--y', `${y}px`);
    };

    return (
        <section className="projects-section" id="projects">
            <div className="container">
                <div className="section-header scroll-reveal">
                    <h2 className="section-title">Selected Projects</h2>
                    <p className="section-subtitle">A collection of projects showcasing my expertise in full-stack development, UI/UX design, data analytics, and problem-solving.</p>
                </div>

                <div className="projects-grid">
                    {projectsData.map((project, index) => (
                        <article 
                            className="project-card card glass scroll-reveal" 
                            key={index}
                            onMouseMove={handleMouseMove}
                        >
                            <div className="card-glow"></div>
                            <div className="project-image-container">
                                <img src={project.imgSrc} alt={`${project.title} screenshot`} className="project-image" />
                                <div className="project-overlay">
                                    <div className="project-links">
                                      <a
                                          href={project.liveLink}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="project-link-btn"
>                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                      </a>
                                      <a
                                          href={project.codeLink}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="project-link-btn"
>                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="project-info">
                                <div className="project-meta">
                                    <span className="project-category">{project.category}</span>
                                    {project.featured && <span className="project-featured-badge">Featured</span>}
                                </div>
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>
                                <div className="project-tags">
                                    {project.tags.map((tag, tIdx) => (
                                        <span className="project-tag" key={tIdx}>{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
