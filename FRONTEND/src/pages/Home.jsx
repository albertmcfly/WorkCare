import "../App.css";
import { Link } from "react-router-dom";
import mockUp1 from '../assets/images/ladingPage/mock-dash-mitad.png';
import mockUp2 from '../assets/images/ladingPage/mock-dash.png';
import logo from '../assets/images/logo/logo.png'
import ilus from '../assets/images/ladingPage/ilustracion.webp';
import mock from '../assets/images/ladingPage/mock-dash1.png';
import Moconst from '../assets/images/ladingPage/constructor.png';
import MoCoci from '../assets/images/ladingPage/cocineros.jpg';
import MoMine from '../assets/images/ladingPage/mineros.jpg';
import cta from '../assets/images/ladingPage/cta.png';

function Home() {
    return (
        <div className="bg-white">
            <header className="absolute inset-x-0 top-0 z-50 px-1.5">
                <nav
                    aria-label="Global"
                    className="flex items-center justify-between p-6 lg:px-8"
                >
                    <div className="flex lg:flex-1">
                        <Link to="/home" className="-m-1.5 p-1.5">
                            <img
                                src={logo}
                                alt=""
                                className="h-8 w-auto"
                            />
                        </Link>
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            command="show-modal"
                            commandfor="mobile-menu"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                data-slot="icon"
                                aria-hidden="true"
                                className="size-6"
                            >
                                <path
                                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-12">
                        <a href="#" className="text-sm/6 font-semibold text-gray-900">
                            Product
                        </a>
                        <a href="#" className="text-sm/6 font-semibold text-gray-900">
                            Features
                        </a>
                        <a href="#" className="text-sm/6 font-semibold text-gray-900">
                            Marketplace
                        </a>
                        <a href="#" className="text-sm/6 font-semibold text-gray-900">
                            Company
                        </a>
                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        <Link to="/login" className="text-sm font-semibold text-gray-900 leading-6">
                            Log in <span aria-hidden="true">&rarr;</span>
                        </Link>
                    </div>
                </nav>
            </header>

            <section className="hero pt-14 w-full">
                <div className="py-20 sm:py-24 lg:py-28 w-full">
                    <div className="flex items-center flex-col gap-8 lg:flex-row lg:gap-0 w-full">
                        <div className="text-left max-w-2xl pl-[5%] lg:pl-[5%] lg:pr-8">
                            <h1 className="text-2xl sm:text-5xl lg:text-left text-center font-semibold tracking-tight text-balance text-gray-900 ">
                                Seguridad Automatizada para tu Equipo
                            </h1>
                            <p className="mt-6 text-center text-[15px] lg:text-left text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
                                Sistema de IA que detecta en tiempo real el uso de cascos, guantes y más, evitando accidentes
                            </p>
                            <div className="mt-8 flex items-center gap-x-6">

                            </div>
                        </div>
                        <div className="flex-1">
                            <picture>
                                <source media="(max-width: 1024px)" srcSet={mockUp2} />
                                <img src={mockUp1} alt="" className="lg:pl-[5%] w-full h-auto" />
                            </picture>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-20 w-full bg-white">
                <div className="max-w-[1280px] mx-auto px-[5%] flex flex-col lg:flex-row gap-10 lg:gap-16">
                    <div className="lg:w-1/2 flex-shrink-0">
                        <img src={ilus} alt="" className="w-full h-auto rounded-md" />
                    </div>
                    <div className="lg:w-1/2 flex flex-col justify-center text-left">
                        <h6 className="text-md font-semibold mb-2 text-gray-700">Bienvenido a WorkCare</h6>
                        <h1 className="text-3xl lg:text-4xl 2xl:text-5xl font-bold mb-4 text-gray-900">
                            Reducción de Riesgos con Inteligencia Artificial
                        </h1>
                        <p className="text-lg leading-relaxed mb-6 text-gray-600 max-w-xl">
                            Supervisa el uso correcto del equipo de protección personal en tiempo real, generando alertas y reportes precisos que ayudan a prevenir accidentes.
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 max-w-xl">
                            <li>Reduce accidentes</li>
                            <li>Disminuye multas por incumplimiento</li>
                            <li>Protege la vida de tus trabajadores</li>
                        </ul>
                    </div>
                </div>

                <div className="max-w-[1280px] mx-auto px-[5%] flex flex-col lg:flex-row gap-10 lg:gap-16 mt-10">
                    <div className="lg:w-1/2 flex flex-col justify-center text-left">
                        <h1 className="text-3xl lg:text-4xl 2xl:text-5xl font-bold mb-4 text-gray-900">
                            Centro de Control Visual para la Seguridad en Tiempo Real
                        </h1>
                        <p className="text-lg leading-relaxed text-gray-600 max-w-xl">
                            Nuestro panel centraliza el monitoreo con alertas visuales cuando detecta trabajadores sin EPP, todo en una interfaz
                        </p>
                    </div>
                    <div className="lg:w-1/2">
                        <img src={mock} alt="" className="w-full h-auto rounded-md" />
                    </div>
                </div>
            </section>
            <section className="feature py-10 lg:py-30 bg-[#f5f5f5] ">
                <div className="feature-container max-w-[1280px] mx-auto px-[5%] flex flex-col lg:flex-row gap-10 lg:gap-16">
                    <div className="feature-item grid grid-cols-2 grid-rows-2 gap-[30px]">
                        <div className="norma bg-white p-6 flex items-center justify-center ">1</div>
                        <div className="norma bg-white p-6 flex items-center justify-center ">2</div>
                        <div className="norma bg-white p-6 flex items-center justify-center ">3</div>
                        <div className="norma bg-white p-6 flex items-center justify-center ">4</div>
                    </div>

                    <div className="feature-item ">
                        <h6 className="text-md font-semibold mb-2 text-gray-700">Bienvenido a WorkCare</h6>
                        <h1 className="text-3xl lg:text-4xl 2xl:text-5xl font-bold mb-4 text-gray-900">
                            Reducción de Riesgos con Inteligencia Artificial
                        </h1>
                        <p className="text-lg leading-relaxed mb-6 text-gray-600 max-w-xl">
                            Supervisa el uso correcto del equipo de protección personal en tiempo real, generando alertas y reportes precisos que ayudan a prevenir accidentes.
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 max-w-xl">
                            <li>Reduce accidentes</li>
                            <li>Disminuye multas por incumplimiento</li>
                            <li>Protege la vida de tus trabajadores</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="modelos my-10  lg:my-25 px-[10%] ">
                <h1 className="text-3xl lg:text-4xl 2xl:text-5xl font-bold mb- text-gray-900 mb-4 text-center">Conoce nuestros modelos de seguridad</h1>
                <div className="modelos-container grid grid-cols-2 grid-col-sp grid-rows-2 gap-[10px] md:gap-[30px] xl:h-150 ">
                    <picture className="row-span-2">
                        <img src={Moconst} alt="" className="w-full h-full rounded-lg lg:rounded-2xl" />
                    </picture>
                    <picture>
                        <img src={MoCoci} alt="" className="w-full h-full rounded-lg lg:rounded-2xl" />
                    </picture>
                    <picture>
                        <img src={MoMine} alt="" className="w-full h-full rounded-lg lg:rounded-2xl" />
                    </picture>
                </div>
            </section>
            <section className="cta px-[10%] pb-25">
                <picture>
                    <img src={cta} alt="" className="w-full h-auto" />
                </picture>
            </section>
            <Link to="/admin">333333333</Link>
        </div>
    );
}

export default Home;