import React, { useState, useEffect } from 'react';

export default function Navbar() {
    const [theme, setTheme] = useState('dark');
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    // 1. Theme Management
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        const systemPrefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
        
        const initialTheme = savedTheme || (systemPrefersLight ? 'light' : 'dark');
        setTheme(initialTheme);
        
        if (initialTheme === 'light') {
            document.body.classList.remove('dark-theme');
            document.body.classList.add('light-theme');
        } else {
            document.body.classList.remove('light-theme');
            document.body.classList.add('dark-theme');
        }
    }, []);

    const toggleTheme = () => {
        if (theme === 'dark') {
            document.body.classList.remove('dark-theme');
            document.body.classList.add('light-theme');
            localStorage.setItem('theme', 'light');
            setTheme('light');
        } else {
            document.body.classList.remove('light-theme');
            document.body.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark');
            setTheme('dark');
        }
    };

    // 2. Scroll and Active Nav Tracking
    useEffect(() => {
        const handleScroll = () => {
            // Sticky Navbar
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }

            // Section Active Highlighting
            const sections = document.querySelectorAll('section');
            let currentSection = 'home';
            sections.forEach(section => {
                const sectionTop = section.offsetTop - 150;
                const sectionHeight = section.offsetHeight;
                if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                    currentSection = section.getAttribute('id') || 'home';
                }
            });
            setActiveSection(currentSection);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
            <div className="nav-container">
                <a href="#home" className="logo" onClick={() => setMenuOpen(false)}>
                    <span className="logo-dot"></span>
                    Thasika<span>Ragupathy</span>
                </a>
                
                <nav className={`nav-links ${menuOpen ? 'open' : ''}`} id="navLinks">
                    <a 
                        href="#home" 
                        className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
                        onClick={() => setMenuOpen(false)}
                    >
                        Home
                    </a>
                    <a 
                        href="#about" 
                        className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
                        onClick={() => setMenuOpen(false)}
                    >
                        About
                    </a>
                   <a
                        href="#leadership"
                        className={`nav-link ${activeSection === 'leadership' ? 'active' : ''}`}
                        onClick={() => setMenuOpen(false)}
                    >
                        Leadership
                    </a>
                    <a 
                        href="#projects" 
                        className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
                        onClick={() => setMenuOpen(false)}
                    >
                        Projects
                    </a>
                    <a 
                        href="#contact" 
                        className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
                        onClick={() => setMenuOpen(false)}
                    >
                        Contact
                    </a>
                    
                </nav>

                <div className="nav-actions">
                    {/* Theme Toggle Button */}
                    <button className="theme-toggle-btn" id="themeToggle" onClick={toggleTheme} aria-label="Toggle theme">
                        {theme === 'dark' ? (
                            <svg className="sun-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <circle cx="12" cy="12" r="4"></circle>
                                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"></path>
                            </svg>
                        ) : (
                            <svg className="moon-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                            </svg>
                        )}
                    </button>

                    {/* Mobile Menu Button */}
                    <button 
                        className={`mobile-menu-btn ${menuOpen ? 'open' : ''}`} 
                        id="mobileMenuBtn" 
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Open navigation menu"
                    >
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </button>
                </div>
            </div>
        </header>
    );
}
