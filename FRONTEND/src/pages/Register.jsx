import Atwork from '../assets/images/login/atwork.png'
import '../styles/auth.css' 

function Register() {
    return (
        <div className="auth-container">
            <div className="auth-item">
                <div className="auth-form">
                    <h1>¡Crea tu cuenta en WorkCare!</h1>
                    <p>Comienza a proteger a tu equipo hoy mismo</p>
                    <form>
                        <input type="text" placeholder="Nombre completo" />
                        <input type="email" placeholder="Correo electrónico" />
                        <input type="password" placeholder="Contraseña" />
                        <button className="auth-button">Registrarse</button>
                    </form>

                    <p className="auth-link">
                        ¿Ya tienes cuenta? <a href="/login">Inicia sesión</a>
                    </p>
                </div>
            </div>
            <div className="auth-item">
                <img src={Atwork} className="auth-image" alt="Trabajadores seguros" />
            </div>
        </div>
    )
}

export default Register