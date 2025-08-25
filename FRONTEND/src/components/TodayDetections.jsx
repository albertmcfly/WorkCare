import { EyeIcon } from '@heroicons/react/24/outline'

function TodayDetections() {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md flex items-center gap-4">
      <div className="bg-blue-100 text-blue-600 p-3 rounded-full">
        <EyeIcon className="h-6 w-6" />
      </div>
      <div>
        <h1 className="text-lg font-semibold text-gray-800">Detecciones Hoy</h1>
        <p className="text-sm text-gray-500">0</p>
      </div>
    </div>
  )
}

export default TodayDetections
