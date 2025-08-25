import { ServerIcon } from '@heroicons/react/24/outline'

function SystemStatus() {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md flex items-center gap-4 ">
      <div className="bg-red-100 text-red-500 p-3 rounded-full">
        <ServerIcon className="h-6 w-6" />
      </div>
      <div>
        <h1 className="text-lg font-semibold text-gray-800">Estado del Sistema</h1>
        <p className="text-sm text-gray-500">Sistema Desconectado</p>
      </div>
    </div>
  )
}

export default SystemStatus
