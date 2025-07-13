import React, { useState } from 'react';
import "../styles/auth.css";

const JobFeatures = () => {
  const [activeCard, setActiveCard] = useState(null);

  const features = [
    {
      id: 1,
      icon: '🔍',
      title: 'Browse Jobs',
      description: 'High Quality Job Openings',
      details: [
        'Curated job listings from top companies',
        'Advanced filters by salary and location',
        'One-click application process',
        'Personalized recommendations',
      ],
    },
    {
      id: 2,
      icon: '🤝',
      title: 'Talent Acquisition',
      description: 'Build professional connections',
      details: [
        'Connect with industry professionals',
        'Join mentorship programs',
        'Virtual networking events',
        'Collaboration opportunities',
      ],
    },
    {
      id: 3,
      icon: '📄',
      title: 'Resume Builder',
      description: 'Resumes favored by employers',
      details: [
        'ATS-friendly templates',
        'Real-time content suggestions',
        'Customizable designs',
        'Multiple export formats',
      ],
    },
    {
      id: 4,
      imageUrl: 'https://static.ambitionbox.com/assets/v2/images/rs:fit:1280:960:false:false/bG9jYWw6Ly8vbG9nb3Mvb3JpZ2luYWxzL2lubm92YXRvcnMtdGVjaC1zb2x1dGlvbnMuanBn.png',
      title: 'ITS AI',
      description: 'Enhance job-seeking',
      details: [
        'AI interview preparation',
        'Cover letter generator',
        'Skill gap analysis',
        'Career path suggestions',
      ],
    },
  ];

  return (
    <div className="job-container">
      <h2 className="job-title">Job Search Features</h2>
      <div className="features-container">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="card-wrapper"
            onMouseEnter={() => setActiveCard(feature.id)}
            onMouseLeave={() => setActiveCard(null)}
          >
            <div className="feature-card">
              {feature.imageUrl ? (
                <img src={feature.imageUrl} alt={feature.title} className="feature-icon-img" />
              ) : (
                <div className="feature-icon">{feature.icon}</div>
              )}
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
            <div className={`card-info ${activeCard === feature.id ? "active" : ""}`}>
              <ul>
                {feature.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobFeatures;
