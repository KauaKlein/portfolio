import './Home.css';
import { Link } from 'react-router-dom';
import {
    FaDesktop,
    FaMobile,
    FaPaintBrush,
    FaLaptopCode,
    FaRegLightbulb,
    FaCoffee,
    FaUsers,
    FaTrophy,
    FaCode,
    FaGithub,
    FaLinkedin,
    FaDownload
} from "react-icons/fa";

export default function Home() {
    return (
        <div className="home">
            <section className="hero">
                <div className="hero-content">
                    <div className="hero-text">
                        <h1>Kauã Klein</h1>
                        <p className="subtitle">Desenvolvedor Full Stack</p>
                        <div className="hero-links">
                            <a href="https://github.com/KauaKlein" target="_blank" rel="noreferrer" className="social-link">
                                <FaGithub /> GitHub
                            </a>
                            <a href="https://www.linkedin.com/in/kauã-klein-3a461524a/" target="_blank" rel="noreferrer" className="social-link">
                                <FaLinkedin /> LinkedIn
                            </a>
                            <a href="/curriculo.pdf" download className="cv-link">
                                <FaDownload /> Baixar Currículo
                            </a>
                        </div>
                        <Link to="/projetos" className="projects-link">
                            <FaCode />Projetos
                        </Link>
                    </div>
                    <div className="hero-image">
                        <img src="/kaua.jpg" alt="Kauã Klein" />
                    </div>
                </div>
            </section>

            <section className="stats">
                <div className="stat-item">
                    <FaCode />
                    <h3>3</h3>
                    <p>Projetos Hospedados</p>
                </div>
                <div className="stat-item">
                    <FaUsers />
                    <h3>1</h3>
                    <p>Clientes Satisfeitos</p>
                </div>
                <div className="stat-item">
                    <FaTrophy />
                    <h3>1</h3>
                    <p>Premiações</p>
                </div>
                <div className="stat-item">
                    <FaRegLightbulb />
                    <h3>14</h3>
                    <p>Ideias Surreais</p>
                </div>
                <div className="stat-item">
                    <FaCoffee />
                    <h3>97</h3>
                    <p>Xícaras de Café</p>
                </div>


            </section>

            <section className="services">
                <h2>Como posso ajudar você?</h2>
                <p className="services-intro">
                    Se você precisa de um site, aplicativo ou arte gráfica, está no lugar certo!
                </p>

                <div className="services-grid">
                    <div className="service-card">
                        <FaLaptopCode className="service-icon" />
                        <h3>Sistema Integrado</h3>
                        <p>Desenvolvimento multiplataforma onde diferentes dispositivos se comunicam e trabalham em sincronia pela internet.</p>
                    </div>

                    <div className="service-card">
                        <FaDesktop className="service-icon" />
                        <h3>Aplicação Web</h3>
                        <p>Desde uma landing page simples até lojas virtuais completas e sistemas complexos para internet.</p>
                    </div>

                    <div className="service-card">
                        <FaMobile className="service-icon" />
                        <h3>Aplicação Mobile</h3>
                        <p>Apps híbridos ou nativos para Android e iOS, com publicação nas lojas oficiais e geração de instaladores.</p>
                    </div>

                    <div className="service-card">
                        <FaDesktop className="service-icon" />
                        <h3>Aplicação Desktop</h3>
                        <p>Software multiplataforma para Windows, Linux e macOS, com instalação local e alta performance.</p>
                    </div>

                    <div className="service-card">
                        <FaPaintBrush className="service-icon" />
                        <h3>Design Gráfico</h3>
                        <p>Marketing digital com arte gráfica de impacto para seu negócio: panfletos, flyers, banners e muito mais.</p>
                    </div>

                    <div className="service-card">
                        <FaRegLightbulb className="service-icon" />
                        <h3>UI/UX Design</h3>
                        <p>Design centrado no usuário com foco em usabilidade e experiência, criando interfaces modernas e intuitivas.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
