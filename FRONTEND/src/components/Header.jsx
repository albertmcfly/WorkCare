import { Link } from 'react-router-dom';
import logo from '../assets/images/logo/logo-white.png'
import './Header.css'

function Header() {
    return (
        <header className='header'>
            <nav className='nav-primary'>
                <div className="navbar">
                    <ul>
                        <li>
                            <div className="logo">
                                <img src={logo} alt="" />
                            </div>
                        </li>
                        <li>
                            <span>Funciones</span>
                        </li>
                        <li>
                            <span>Soluciones</span>
                        </li>
                        <li>
                            <span>Productos</span>
                        </li>
                        <li>
                            <span>Modelos</span>
                        </li>
                    </ul>
                </div>
            </nav>
            <nav className="nav-secondary">
                <ul>
                    <li>
                        <Link to="/Login">Iniciar sesión</Link>
                    </li>
                    <li>
                        <Link to="/Register">Crear cuenta</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;