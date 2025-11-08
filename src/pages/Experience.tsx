import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Experience.css';

interface ExperienceCard {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  logo?: string;
  icon?: string;
  detailPath?: string;
}

const Experience: React.FC = () => {
  const navigate = useNavigate();
  
  const experiences: ExperienceCard[] = [
    {
      id: 1,
      title: "Software Engineer Intern",
      company: "AWS Fargate",
      period: "Aug 2025 - Present",
      description: "AWS serverless container solutions",
      achievements: [
        "Led team of 5 developers",
        "Improved performance by 40%",
        "Implemented design system",
        "Mentored junior developers"
      ],
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png",
      detailPath: "/experience/amazon2025"
    },
    {
      id: 2,
      title: "Software Engineering Intern",
      company: "Microsoft Office Products",
      period: "May 2025 - Aug 2025",
      description: "GLSL Based Shader Development and LLM Fine-tuning",
      achievements: [
        "Developed 10+ features",
        "Optimized database queries",
        "Integrated payment systems",
        "Automated deployments"
      ],
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/2560px-Microsoft_logo_%282012%29.svg.png",
      detailPath: "/experience/microsoft2025"
    },
    {
      id: 3,
      title: "Software Engineering Intern",
      company: "Energy Sciences Network",
      period: "May 2023 - May 2025",
      description: "Data pipeline and monitoring systems",
      achievements: [
        "Built 20+ websites",
        "Improved SEO scores",
        "Enhanced accessibility",
        "Client satisfaction 95%"
      ],
      logo: "https://upload.wikimedia.org/wikipedia/commons/3/36/Lawrence_Berkeley_National_Laboratory_logo.svg",
      detailPath: "/experience/berkeleylab2023"
    },
    {
      id: 4,
      title: "Software Engineering Intern",
      company: "Microsoft Office Products",
      period: "May 2024 - Aug 2024",
      description: "Microsoft Designers, Diffusion Models, and AI Integration",
      achievements: [
        "Mastered React.js",
        "Learned Node.js",
        "Contributed to 5 projects",
        "Completed certifications"
      ],
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/2560px-Microsoft_logo_%282012%29.svg.png",
      detailPath: "/experience/microsoft2024"
    }
  ];

  return (
    <div className="experience-page">
      <div className="experience-container">
        {/* <h1 className="page-title">Experience</h1> */}
        <div className="experience-grid">
          {experiences.map((exp) => (
            <div 
              key={exp.id} 
              className="flip-card"
              onClick={() => exp.detailPath && navigate(exp.detailPath)}
              style={{ cursor: exp.detailPath ? 'pointer' : 'default' }}
            >
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className="card-icon">
                    {exp.logo ? (
                      <img src={exp.logo} alt={`${exp.company} logo`} />
                    ) : (
                      <span>{exp.icon || "💼"}</span>
                    )}
                  </div>
                  <h3 className="card-title">{exp.title}</h3>
                  <h4 className="card-company">{exp.company}</h4>
                  <p className="card-period">{exp.period}</p>
                  <p className="card-description">{exp.description}</p>
                  {exp.detailPath && <div className="click-hint">Click for more info →</div>}
                </div>
                <div className="flip-card-back">
                  <h3>Key Achievements</h3>
                  <ul className="achievements-list">
                    {exp.achievements.map((achievement, index) => (
                      <li key={index}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;