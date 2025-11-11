import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Projects.css';

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string;
  image: string;
  route?: string;
}

const Projects: React.FC = () => {
  const navigate = useNavigate();
  const projects: Project[] = [
    {
      id: 1,
      title: "Video Streaming Platform with AI Conversational Assistant",
      description: "A full-stack video streaming platform featuring an AI-powered chatbot that maintains context-aware conversations about video content. Built with microservices distributed architecture for scalability and fault tolerance. Integrated OpenAI's Whisper API for automatic transcription, enabling the AI to understand and discuss video context. The assistant remembers previous conversation history and can answer questions about specific video moments, timestamps, and content details. Leverages Google Cloud services for deployment and infrastructure.",
      tech: ["React", "Node.js", "Firebase", "Whisper", "Google Cloud"],
      github: "https://github.com/sunami09/streamly",
      demo: "https://streamly-sunami.vercel.app/",
      image: "/project-images/streamly.png",
      route: '/projects/videoStreaming'
    },
    {
      id: 2,
      title: "Real-Time Collaborative Chat Application",
      description: "A full-stack chat application built with Node.js and Express.js framework. The backend uses MongoDB to store messages and WebSockets to establish real-time communication between client and server. The frontend is built using React.js with Material UI components. WebSockets technology enables instant message delivery, providing a seamless chat experience for users.",
      tech: ["React", "Node.js", "Express", "WebSockets", "MongoDB", "Material UI"],
      github: "https://github.com/yourusername/chat-app",
      demo: "https://your-chat-app.com",
      image: "https://cdn.prod.website-files.com/616e938268c8f0a92cb2b540/61b3b5b10ea79b429da54b5d_best%20video%20editing%20apps%20creators%20swear%20by.jpg"
    },
    {
      id: 3,
      title: "E-Commerce Platform with Payment Integration",
      description: "Built a scalable e-commerce platform featuring real-time inventory management, secure payment processing with Stripe integration, and personalized product recommendations using machine learning algorithms. Implemented advanced search and filtering capabilities with Elasticsearch.",
      tech: ["TypeScript", "React", "Stripe", "PostgreSQL", "Redis", "Elasticsearch"],
      github: "https://github.com/yourusername/ecommerce",
      image: "https://via.placeholder.com/600x400/1a365d/64ffda?text=E-Commerce"
    },
    {
      id: 4,
      title: "Distributed Systems Monitoring Tool",
      description: "Comprehensive monitoring system for distributed architectures with real-time alerting and performance analytics. Built custom dashboards for system health tracking, implemented log aggregation, and created automated incident response workflows. Supports monitoring of microservices, databases, and cloud infrastructure.",
      tech: ["Go", "Prometheus", "Grafana", "Docker", "Kubernetes", "AWS"],
      github: "https://github.com/yourusername/monitor",
      image: "https://via.placeholder.com/600x400/1a365d/64ffda?text=System+Monitor"
    }
  ];

  return (
    <div className="projects-page">
      <div className="projects-container">
        <div className="section-header">
          <h2 className="section-title">Some Things I've Built</h2>
        </div>
        
        <div className="featured-projects">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`featured-project ${index % 2 === 0 ? 'left' : 'right'}`}
              onClick={() => {
                if (project.route) {
                  navigate(project.route);
                } else {
                  window.location.href = '#';
                }
              }}
              style={project.route ? { cursor: 'pointer' } : {}}
            >
              <div className="project-image-container">
                <img src={project.image} alt={project.title} className="project-image" />
              </div>
              
              <div className="project-content">
                <p className="project-label">Featured Project</p>
                <h3 className="project-title">{project.title}</h3>
                <div className="project-description">
                  <p>{project.description}</p>
                </div>
                <div className="project-tech-list">
                  {project.tech.map((tech, i) => (
                    <span key={i}>{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </a>
                  )}
                </div>
                <div className="project-more-info">
                  <span className="more-info-text">Click for more info →</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;