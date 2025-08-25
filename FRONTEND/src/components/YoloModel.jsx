import { CpuChipIcon } from '@heroicons/react/24/outline'

function YoloModel() {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md flex items-center gap-4">
      <div className="bg-yellow-100 text-yellow-600 p-3 rounded-full">
        <CpuChipIcon className="h-6 w-6" />
      </div>
      <div>
        <h1 className="text-lg font-semibold text-gray-800">Modelo YOLO</h1>
        <p className="text-sm text-gray-500">No disponible</p>
      </div>
    </div>
  )
}

export default YoloModel
