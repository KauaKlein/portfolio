import { FaGithub, FaExternalLinkAlt, FaHome, FaGamepad } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Projetos.css';

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
                <div className="project-card featured">
                    <div className="project-image">
                        <img src="/aportvest.png" alt="Preview do AportVest" />
                        <div className="project-overlay">
                            <div className="project-links">
                                <a href="https://aportvest.vercel.app/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="project-link">
                                    <FaExternalLinkAlt /> Visitar
                                </a>
                                <a href="https://github.com/KauaKlein/AportVest"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="project-link">
                                    <FaGithub /> Código
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="project-info">
                        <h3>AportVest</h3>
                        <p className="project-description">
                            Plataforma de investimentos que oferece recomendações personalizadas com base no perfil do usuário,
                            utilizando algoritmos avançados para análise de mercado e gestão de portfólio.
                        </p>
                        <div className="project-tech">
                            <span className="tech-tag">Laravel (PHP)</span>
                            <span className="tech-tag">React</span>
                            <span className="tech-tag">TypeScript</span>
                            <span className="tech-tag">Node.js</span>
                            <span className="tech-tag">Vercel</span>
                        </div>
                    </div>
                </div>

                <div className="project-card featured">
                    <div className="project-image">
                        <img src="/mario.jpg" alt="Preview do Super Mario Bros" />
                        <div className="project-overlay">
                            <div className="project-links">
                                <a href="https://super-mario-remake.vercel.app/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="project-link">
                                    <FaGamepad /> Jogar
                                </a>
                                <a href="https://github.com/KauaKlein/SuperMario-Remake"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="project-link">
                                    <FaGithub /> Código
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="project-info">
                        <h3>Super Mario Bros Web</h3>
                        <p className="project-description">
                            Recriação do clássico Super Mario Bros para navegador, desenvolvido com JavaScript e Canvas.
                            Um projeto que combina nostalgia com tecnologias web modernas, oferecendo uma experiência
                            de jogo fluida e responsiva.
                        </p>
                        <div className="project-tech">
                            <span className="tech-tag">JavaScript</span>
                            <span className="tech-tag">HTML Canvas</span>
                            <span className="tech-tag">CSS</span>
                            <span className="tech-tag">Game Development</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
}