import { VideoCameraSlashIcon } from "@heroicons/react/24/outline"

function CameraCard({ title = "Cámara Principal" }) {
  return (
    <div className="bg-black rounded-lg h-96 flex items-center justify-center text-white shadow-md">
      <div className="text-center">
        <VideoCameraSlashIcon className="h-16 w-16 mb-2 opacity-50 mx-auto" />
        <p className="text-lg font-medium">{title}</p>
      </div>
    </div>
  )
}

export default CameraCard
