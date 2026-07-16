import React from 'react';
import { Award, Users, Edit3, Globe } from 'lucide-react';

export default function Leadership() {
    const leadershipData = [
        {
            icon: Award,
            role: "Chairperson",
            organization: "IEEE Student Branch, University of Vavuniya",
            period: "2024 - Present",
            description:
                "Leading branch operations, organizing technical events, and empowering students through professional development initiatives."
        },
        {
            icon: Users,
            role: "Program Manager",
            organization: "AIESEC in Vavuniya",
            period: "2023 - Present",
            description:
                "Coordinating programs and events that promote leadership, cultural exchange, and student engagement."
        },
        {
            icon: Edit3,
            role: "Editor",
            organization: "Rotaract Club, University of Vavuniya",
            period: "2023 - Present",
            description:
                "Creating and managing digital content, newsletters, and social media communications."
        },
        {
            icon: Globe,
            role: "Web Administrator",
            organization: "Computer Society, University of Vavuniya",
            period: "2023 - Present",
            description:
                "Maintaining the society website and ensuring timely updates of online content and announcements."
        }
    ];

    return (
        <section id="leadership" className="leadership-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Leadership & Activities</h2>
                    <p className="section-subtitle">
                        Leadership experiences that shaped my professional and personal growth.
                    </p>
                </div>

                <div className="leadership-grid">
                    {leadershipData.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <div className="leadership-card" key={index}>
                                <div className="card-header">
                                    <div className="role-icon">
                                        <Icon size={24} />
                                        <h4>{item.role}</h4>
                                    </div>
                                    <span className="period">{item.period}</span>
                                </div>

                                <p className="organization">{item.organization}</p>
                                <p className="description">{item.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
