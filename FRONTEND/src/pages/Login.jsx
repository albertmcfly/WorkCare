import Atwork from '../assets/images/login/atwork.png';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo/logo.png';

function Login() {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen  p-4">
            <div className="w-full lg:w-1/2 max-w-md p-8  lg:mr-8 mb-8 lg:mb-0">
                <div className="flex justify-center mb-6">
                    <Link to="/home" className="transition-transform hover:scale-105">
                        <img
                            src={logo}
                            alt="Company Logo"
                            className="h-10 w-auto"
                        />
                    </Link>
                </div>
                
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">¡Bienvenido de nuevo!</h1>
                    <p className="text-gray-600">Tecnología inteligente para ambientes seguros</p>
                </div>

                <form className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Correo electrónico
                        </label>
                        <input
                            id="email"
                            type="email"
                            placeholder="tu@email.com"
                            className="w-full px-4 py-3 bg-[#f5f7fa] rounded-2xl focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                        />
                    </div>
                    
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                            Contraseña
                        </label>
                        <input
                            id="password"
                            type="password"
                            placeholder="••••••••"
                            className="w-full px-4 py-3 bg-[#f5f7fa] rounded-2xl focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                id="remember-me"
                                name="remember-me"
                                type="checkbox"
                                className="h-4 w-4 text-black focus:ring-black border-gray-300 rounded"
                            />
                            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                                Recordarme
                            </label>
                        </div>

                        <div className="text-sm">
                            <Link to="/forgot-password" className="font-medium text-black hover:text-gray-700">
                                ¿Olvidaste tu contraseña?
                            </Link>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-black text-white py-3 px-4 rounded-2xl font-medium hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition-colors"
                    >
                        Iniciar sesión
                    </button>
                </form>

                <div className="mt-6 text-center text-sm">
                    <p className="text-gray-600">
                        ¿No tienes cuenta?{' '}
                        <Link to="/Register" className="font-medium text-black hover:text-gray-700">
                            Regístrate
                        </Link>
                    </p>
                </div>
            </div>

            <div className="w-full lg:w-1/2 max-w-2xl flex justify-center">
                <img 
                    src={Atwork} 
                    className="w-full h-auto max-h-[600px] object-contain hidden lg:block" 
                    alt="Person working" 
                />
            </div>
        </div>
    );
}

export default Login;