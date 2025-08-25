import { UserCircleIcon, DeviceTabletIcon, EyeIcon, HandRaisedIcon } from '@heroicons/react/24/outline'

function EppInfo() {
  const items = [
    { name: 'Casco', icon: UserCircleIcon, color: 'text-blue-500' },
    { name: 'Chaleco', icon: DeviceTabletIcon, color: 'text-yellow-500' },
    { name: 'Lentes', icon: EyeIcon, color: 'text-green-500' },
    { name: 'Guantes', icon: HandRaisedIcon, color: 'text-orange-500' },
  ]

  return (
    <div className="">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Equipos de Protección Detectables
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map(({ name, icon: Icon, color }) => (
          <div key={name} className="text-center p-4 bg-white rounded-2xl shadow-md">
            <Icon className={`h-12 w-12 mb-2 mx-auto ${color}`} />
            <p className="font-semibold">{name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default EppInfo
