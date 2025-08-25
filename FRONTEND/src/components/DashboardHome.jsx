import bgBlack from "../assets/images/ladingPage/bg-black-lines.jpg"
import atwork from "../assets/images/ladingPage/atwork-blue.png";
import { Link } from "react-router-dom";

function DashboardHome() {
    return (
        <div className="flex bg-cover bg-center rounded-2xl shadow-md" style={{ backgroundImage: `url(${bgBlack})` }}>
            <div className="flex-1  p-6 "
            >
                <h1 className="text-3xl  font-bold text-white">Bienvenido, </h1>
                <p className="text-white mt-2 mb-5">
                    Aquí tienes un resumen de la actividad reciente del sistema
                </p>
                <Link to="/Monitoreo" class="bg-gradient-to-r from-[#bdbdbd] to-[#616161] text-white px-4 py-2 rounded-lg hover:brightness-90 transition mt-3">
                    Botón Gradiente
                </Link>
            </div>
            <div className="flex">
                <div className="items-end w-50">
                    <img src={atwork} alt="" className="rounded-2xl" />
                </div>
            </div>
        </div>
    )
}

export default DashboardHome
