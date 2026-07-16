import React from 'react';

export default function Hero() {
    return (
        <section className="hero-section" id="home">
            <div className="container hero-container">
                <div className="hero-content">
                    <div className="badge-container scroll-reveal">
                        <span className="badge">Open for Opportunities</span>
                    </div>
                    <h1 className="hero-title scroll-reveal">
                        Building Digital Solutions <br />
                        with <span class="gradient-text">Innovation & Impact</span> &amp;
                    </h1>
                    <p class="hero-subtitle scroll-reveal">
                        I am an Information Technology undergraduate,&amp;  
                        developer, and technology enthusiast who enjoys creating modern, 
                        user-friendly, and impactful digital solutions. I combine technical expertise with creative thinking to build efficient web applications, data-driven systems, and intuitive user experiences that solve real-world challenges.
                    </p>
                    <div class="hero-ctas scroll-reveal">
                        <a href="#projects" class="btn btn-primary">
                            <span>Explore Projects</span>
                            <svg class="btn-arrow" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                        </a>
                        <a href="#contact" class="btn btn-secondary">Let's Connect</a>
                    </div>
                </div>
            </div>
            {/* Decorative Wave Divider */}
            <div class="hero-wave">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C26.9,8.75,57.05,18.3,80.74,25.82C172.16,55,263.38,67.24,321.39,56.44Z" class="shape-fill"></path>
                </svg>
            </div>
        </section>
    );
}
