import Atwork from '../assets/images/login/atwork.png'
import '../styles/Auth.css'
import { Link } from 'react-router-dom';

function Login() {
    return (
        <div className="auth-container">
            <div className="auth-item">
                <div className="auth-form">
                    <h1>¡Bienvenido de nuevo!</h1>
                    <p>Tecnología inteligente para ambientes seguros</p>

                    <form>
                        <input type="email" placeholder="Correo electrónico" />
                        <input type="password" placeholder="Contraseña" />
                        <button className="auth-button">Iniciar sesión</button>
                    </form>

                    <p className="auth-link">
                        ¿No tienes cuenta? <Link to="/Register">Regístrate</Link>
                    </p>
                </div>
            </div>
            <div className="auth-item">
                <img src={Atwork} className="auth-image" alt="Trabajadores seguros" />
            </div>
        </div>
    )
}

export default Login