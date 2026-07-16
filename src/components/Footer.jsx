import React from 'react';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <p className="copyright">&copy; {new Date().getFullYear()} Thasika Ragupathy. All rights reserved.</p>
            </div>
        </footer>
    );
}
