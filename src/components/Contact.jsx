import React, { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({ name: false, email: false, message: false });
    const [submitStatus, setSubmitStatus] = useState({ show: false, success: false, message: '' });
    const [submitting, setSubmitting] = useState(false);

    const handleMouseMove = (e) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--x', `${x}px`);
        card.style.setProperty('--y', `${y}px`);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Reset error on type
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: false }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        let hasErrors = false;
        const newErrors = { name: false, email: false, message: false };

        // Name Validation
        if (!formData.name.trim()) {
            newErrors.name = true;
            hasErrors = true;
        }

        // Email Validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
            newErrors.email = true;
            hasErrors = true;
        }

        // Message Validation
        if (!formData.message.trim()) {
            newErrors.message = true;
            hasErrors = true;
        }

        setErrors(newErrors);

        if (hasErrors) {
            setSubmitStatus({
                show: true,
                success: false,
                message: 'Please fix the errors above before sending.'
            });
            return;
        }

        // Simulate Submission
        setSubmitting(true);
        setSubmitStatus({ show: false, success: false, message: '' });

        setTimeout(() => {
            setSubmitting(false);
            setSubmitStatus({
                show: true,
                success: true,
                message: 'Thank you! Your message has been sent successfully.'
            });
            setFormData({ name: '', email: '', message: '' });

            // Clear success message after 5 seconds
            setTimeout(() => {
                setSubmitStatus(prev => ({ ...prev, show: false }));
            }, 5000);
        }, 1200);
    };

    return (
        <section className="contact-section" id="contact">
            <div className="container">
                <div className="section-header scroll-reveal">
                    <h2 className="section-title">Get In Touch</h2>
                    <p className="section-subtitle">Let's build something exceptional together. Drop a message!</p>
                </div>

                <div className="contact-grid">
                    {/* Info Card */}
                    <div 
                        className="contact-info card glass scroll-reveal"
                        onMouseMove={handleMouseMove}
                    >
                        <div className="card-glow"></div>
                        <h3 className="card-title">Contact Details</h3>
                        <p className="contact-text">
I'm always excited to connect with fellow developers, industry professionals, and innovators. 
Whether it's a project, internship opportunity, collaboration, or just a friendly conversation about technology, 
feel free to reach out. I'd love to hear from you and explore new opportunities together.                       
 </p>

                        <div className="contact-details-list">
                            <div className="detail-item">
                                <div className="detail-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                </div>
                                <div className="detail-content">
                                    <h4>Email</h4>
                                    <a href="mailto:hello@alexcarter.dev">thasikaragupathy@gmail.com</a>
                                </div>
                            </div>
                            <div className="detail-item">
                                <div className="detail-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                </div>
                                <div className="detail-content">
                                    <h4>Location</h4>
                                    <p>Sri Lanka (Open to Remote)</p>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="social-links">
                            <a href="https://github.com/ThasikaRagupathy" className="social-btn" aria-label="GitHub">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                            </a>
                            <a href="https://www.linkedin.com/in/thasika-ragupathy-b4864a311/" className="social-btn" aria-label="LinkedIn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                            </a>
                            
                        </div>
                    </div>

                    {/* Form Card */}
                    <div 
                        className="contact-form-container card glass scroll-reveal"
                        onMouseMove={handleMouseMove}
                    >
                        <div className="card-glow"></div>
                        <h3 className="card-title">Send a Message</h3>
                        <form className="contact-form" onSubmit={handleSubmit} noValidate>
                            <div className={`form-group ${errors.name ? 'error' : ''}`}>
                                <label htmlFor="name">Your Name</label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    name="name" 
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required 
                                    placeholder="Full Name" 
                                />
                                <span className="error-msg">Name is required</span>
                            </div>
                            <div className={`form-group ${errors.email ? 'error' : ''}`}>
                                <label htmlFor="email">Your Email</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="email" 
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required 
                                    placeholder="abc@gmail.com" 
                                />
                                <span className="error-msg">Please enter a valid email address</span>
                            </div>
                            <div className={`form-group ${errors.message ? 'error' : ''}`}>
                                <label htmlFor="message">Message</label>
                                <textarea 
                                    id="message" 
                                    name="message" 
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required 
                                    rows="5" 
                                    placeholder="Hi Thasika, let's talk about..."
                                ></textarea>
                                <span className="error-msg">Message cannot be empty</span>
                            </div>
                            <button type="submit" className="btn btn-primary btn-submit" disabled={submitting}>
                                <span>{submitting ? 'Sending...' : 'Send Message'}</span>
                                {!submitting && (
                                    <svg className="btn-arrow" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" 
                                    fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                        <line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                                )}
                            </button>
                            {/* Form feedback status toast */}
                            {submitStatus.show && (
                                <div className={`form-status ${submitStatus.success ? 'success' : 'error'}`}>
                                    {submitStatus.message}
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
