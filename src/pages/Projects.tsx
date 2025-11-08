import React from 'react';
import './Projects.css';

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
  image: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "#",
      demo: "#",
      image: "🛍️"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates",
      tech: ["React", "Firebase", "Material-UI"],
      github: "#",
      demo: "#",
      image: "📋"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Real-time weather tracking with beautiful visualizations",
      tech: ["TypeScript", "Chart.js", "Weather API"],
      github: "#",
      demo: "#",
      image: "☀️"
    },
    {
      id: 4,
      title: "Social Media App",
      description: "Connect and share with friends in real-time",
      tech: ["React Native", "GraphQL", "PostgreSQL"],
      github: "#",
      demo: "#",
      image: "💬"
    },
    {
      id: 5,
      title: "Portfolio Website",
      description: "Modern portfolio with animations and responsive design",
      tech: ["React", "CSS3", "Framer Motion"],
      github: "#",
      demo: "#",
      image: "🎨"
    },
    {
      id: 6,
      title: "Blog Platform",
      description: "Content management system with markdown support",
      tech: ["Next.js", "MDX", "Tailwind"],
      github: "#",
      demo: "#",
      image: "✍️"
    }
  ];

  return (
    <div className="projects-page">
      <div className="projects-container">
        {/* <h1 className="page-title">Projects</h1> */}
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">{project.image}</div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.github} className="project-link">
                  <span>GitHub</span>
                </a>
                <a href={project.demo} className="project-link">
                  <span>Live Demo</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;