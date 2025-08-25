import { Link } from 'react-router-dom'
import { HomeIcon, CameraIcon, PresentationChartBarIcon, ExclamationCircleIcon } from '@heroicons/react/24/outline'
import logo from '../assets/images/logo/logo.png'

function Sidebar() {
  const menuItems = [
    { name: 'Dashboard', icon: HomeIcon, to: '/admin' },
    { name: 'Detectar', icon: CameraIcon, to: '/detectar' },
    { name: 'Monitoreo', icon: PresentationChartBarIcon, to: '/monitoreo' },
    { name: 'Violaciones', icon: ExclamationCircleIcon, to: '/violaciones' },
  ]

  return (
    <aside className="bg-white w-[215px] fixed top-0 h-screen shadow-md flex flex-col overflow-hidden">
      <div className="mx-5 my-3.5 flex-shrink-0">
        <Link to="/admin" className="inline-flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
        </Link>
      </div>

      <nav className="flex-1 px-5 overflow-y-auto">
        <h2 className="font-bold text-gray-700 mb-5 uppercase tracking-wide">Menú Principal</h2>
        <ul className="space-y-3">
          {menuItems.map(({ name, icon: Icon, to }) => (
            <li key={name}>
              <Link
                to={to}
                className="flex items-center gap-3 px-4 py-2 rounded-3xl text-gray-700 hover:bg-black hover:text-white transition-colors cursor-pointer select-none"
                draggable={false}
              >
                <Icon className="h-6 w-6 flex-shrink-0" />
                <span className="font-medium">{name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="px-5 py-4 border-t border-gray-200 flex-shrink-0">
        <h3 className="font-bold text-gray-700 mb-3 uppercase tracking-wide">Otros</h3>
        <ul className="space-y-2">
          <li>
            <Link
              to="/configuracion"
              className="block px-4 py-2 rounded-lg text-gray-600 hover:bg-black hover:text-white transition-colors cursor-pointer select-none"
            >
              Configuración
            </Link>
          </li>
          <li>
            <Link
              to="/ayuda"
              className="block px-4 py-2 rounded-lg text-gray-600 hover:bg-black hover:text-white transition-colors cursor-pointer select-none"
            >
              Ayuda
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  )
}

export default Sidebar