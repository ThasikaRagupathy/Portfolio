import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Leadership from './components/Leadership';


function App() {
  // Intersection Observer for scroll-reveal animations
  useEffect(() => {
    const revealElements = document.querySelectorAll('.scroll-reveal');

    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(element => {
      revealObserver.observe(element);
    });

    return () => {
      revealElements.forEach(element => {
        revealObserver.unobserve(element);
      });
    };
  }, []);

  return (
    <>
      {/* Ambient Background Glows */}
      <div className="glow-bg glow-1"></div>
      <div className="glow-bg glow-2"></div>

      {/* Navigation */}
      <Navbar />

      {/* Main content grid */}
      <main>
        <Hero />
        <About />
        <Leadership />
        <Projects />
        <Contact />
     
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
