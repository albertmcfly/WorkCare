import { useEffect, useState } from 'react';
import logo from '../assets/images/ladingPage/logo/logo.png';
import '../styles/Header.css';
import { Link } from 'react-router-dom';


function HomeHeader() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <nav className='navbar'>
                <ul className='nav-lista'>
                    <li>
                        <img src={logo} alt="Logo WorkCare" className='logo' />
                    </li>
                    <li><span>Funciones</span></li>
                    <li><span>Soluciones</span></li>
                    <li><span>Productos</span></li>
                    <li><span>Modelos</span></li>
                </ul>
            </nav>
            <nav className="navbar-secondary">
                <ul className='acceso-usuarios'>
                    <li><Link to="/login">Iniciar sesión</Link></li><span></span>
                    <li><Link to="/Register">Crear cuenta</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default HomeHeader;
