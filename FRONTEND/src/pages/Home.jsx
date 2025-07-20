
import "../App.css";
import HomeHeader from "../components/HomeHeader";
import BgHero from '../assets/images/ladingPage/mock-dash.mitad.png'
import BgHeroResponsive from '../assets/images/ladingPage/mock-dash.png'
import ilus from '../assets/images/ladingPage/ilustracion.webp'
import mock from '../assets/images/ladingPage/mock-dash1.png'


function Home() {
    return (
        <>
            <HomeHeader />
            <section className="hero">
                <div className="hero-contenido">
                    <div className="hero-item">
                        <h1 className="hero-titulo">Seguridad Automatizada para tu Equipo</h1>
                        <p className="hero-info">Sistema de IA que detecta en tiempo real el uso de cascos, guantes y más, evitando accidentes</p>

                    </div>
                    <div className="hero-item">
                        <picture>
                            <source srcSet={BgHeroResponsive} media="(max-width: 1200px" className="bg-hero-image" />
                            <img src={BgHero} className="bg-hero-image" />
                        </picture>
                    </div>
                </div>
            </section>
            <section className="bienvenida">
                <div className="bienvenida-item">
                    <img src={ilus} alt="" />
                </div>
                <div className="bienvenida-item">
                    <hgroup className="bienvenida-titulos">
                        <h5>Bienvenido a WorkCare</h5>
                        <h1>Reducción de Riesgos con Inteligencia Artificial</h1>
                    </hgroup>
                    <p>Supervisa el uso correcto del equipo de protección personal en tiempo real, generando alertas y reportes precisos que ayudan a prevenir accidentes.</p>
                    <ul className="list-bienvenida">
                        <li>
                            <span>Reduce accidentes</span>
                        </li>
                        <li>
                            <span>Disminuye multas por incumplimiento</span>
                        </li>
                        <li>
                            <span>Protege la vida de tus trabajadores</span>
                        </li>
                    </ul>
                </div>
            </section>
            <section className="centro-visual">
                <div className="centro-item">
                    <h1>Centro de Control Visual para la Seguridad en Tiempo Real</h1>
                    <p>Nuestro panel centraliza el monitoreo con alertas visuales cuando detecta trabajadores sin EPP, todo en una interfaz</p>
                </div>
                <div className="centro-item">
                    <img src={mock} alt="" />
                </div>
            </section>
        </>
    );
}

export default Home;
