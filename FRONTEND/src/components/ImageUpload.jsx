import { CameraIcon, CloudArrowUpIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

function DetectEpp() {
  const [file, setFile] = useState(null)

  const handleDrop = (e) => {
    e.preventDefault()
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0])
    }
  }

  const handleDragOver = (e) => e.preventDefault()
  const handleDragLeave = (e) => e.preventDefault()
  const handleFileSelect = (e) => {
    if (e.target.files && e.target.files[0]) setFile(e.target.files[0])
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
        <CameraIcon className="h-6 w-6 text-blue-500 mr-3" /> Detección de EPP
      </h2>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Upload Area */}
        <div
          className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-500 transition-colors"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
        >
          <div id="upload-area">
            <CloudArrowUpIcon className="h-16 w-16 text-gray-400 mb-4 mx-auto" />
            <p className="text-lg text-gray-600 mb-2">Arrastrar imagen aquí o</p>
            <label
              htmlFor="imageInput"
              className="bg-blue-500 text-white px-6 py-2 rounded-lg cursor-pointer hover:bg-blue-700 transition-colors"
            >
              Seleccionar Archivo
            </label>
            <input
              type="file"
              id="imageInput"
              accept="image/*"
              className="hidden"
              onChange={handleFileSelect}
            />
            <p className="text-sm text-gray-500 mt-2">Formatos: JPG, PNG, GIF (máx. 10MB)</p>

            {file && (
              <div className="mt-4 text-left">
                <p className="text-gray-700 font-medium">Archivo seleccionado:</p>
                <p className="text-gray-500">{file.name}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetectEpp
