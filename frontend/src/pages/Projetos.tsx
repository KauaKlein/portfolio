import type { ReactNode } from 'react';
import { FaGithub, FaExternalLinkAlt, FaHome, FaGamepad } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Projetos.css';

type ProjectLink = {
    url: string;
    label: string;
    icon: ReactNode;
};

type Project = {
    title: string;
    description: string;
    image: string;
    imageAlt: string;
    tech: string[];
    links: ProjectLink[];
};

const projects: Project[] = [
    {
        title: 'AportVest',
        description:
            'Plataforma de investimentos que oferece recomendações personalizadas com base no perfil do usuário, utilizando algoritmos avançados para análise de mercado e gestão de portfólio.',
        image: '/aportvest.png',
        imageAlt: 'Preview do AportVest',
        tech: ['Laravel (PHP)', 'React', 'TypeScript', 'Node.js', 'Vercel'],
        links: [
            { url: 'https://aportvest.vercel.app/', label: 'Visitar', icon: <FaExternalLinkAlt /> },
            { url: 'https://github.com/KauaKlein/AportVest', label: 'Código', icon: <FaGithub /> }
        ]
    },
    {
        title: 'Super Mario Bros Web',
        description:
            'Recriação do clássico Super Mario Bros para navegador, desenvolvido com JavaScript e Canvas. Um projeto que combina nostalgia com tecnologias web modernas, oferecendo uma experiência de jogo fluida e responsiva.',
        image: '/mario.jpg',
        imageAlt: 'Preview do Super Mario Bros',
        tech: ['JavaScript', 'HTML Canvas', 'CSS', 'Game Development'],
        links: [
            { url: 'https://super-mario-remake.vercel.app/', label: 'Jogar', icon: <FaGamepad /> },
            { url: 'https://github.com/KauaKlein/SuperMario-Remake', label: 'Código', icon: <FaGithub /> }
        ]
    }
];

export default function Projetos() {
    return (
        <div className="projects-container">
            <div className="projects-header">
                <h1>Meus Projetos</h1>
                <Link to="/" className="home-link">
                    <FaHome /> Voltar para Home
                </Link>
            </div>

            <div className="projects-grid">
                {projects.map((project) => (
                    <article className="project-card featured" key={project.title}>
                        <div className="project-image">
                            <img src={project.image} alt={project.imageAlt} loading="lazy" decoding="async" />
                            <div className="project-overlay">
                                <div className="project-links">
                                    {project.links.map((projectLink) => (
                                        <a
                                            key={projectLink.url}
                                            href={projectLink.url}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="project-link"
                                            aria-label={`${projectLink.label} projeto ${project.title}`}
                                        >
                                            {projectLink.icon} {projectLink.label}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="project-info">
                            <h3>{project.title}</h3>
                            <p className="project-description">{project.description}</p>
                            <div className="project-tech">
                                {project.tech.map((tech) => (
                                    <span className="tech-tag" key={tech}>
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
}
