import { useState } from "react"
import { ChevronLeftIcon, ChevronRightIcon, ExclamationTriangleIcon, ArrowsRightLeftIcon } from "@heroicons/react/24/outline"

function ViolationsSection() {
  const [violations, setViolations] = useState([]) 
  const [page, setPage] = useState(1)
  const [total, setTotal] = useState(0)
  const [filters, setFilters] = useState({ from: "", to: "", status: "" })

  const refreshViolations = () => {
    console.log("Refrescar violaciones")
  }

  const filterViolations = () => {
    console.log("Filtrar violaciones", filters)
  }

  const prevPage = () => setPage((p) => Math.max(1, p - 1))
  const nextPage = () => setPage((p) => p + 1) 

  return (
    <section id="violations" className="section">
      <div className="rounded-xl ">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center">
            <ExclamationTriangleIcon className="h-6 w-6 text-yellow-500 mr-3" />
            Historial de Violaciones
          </h2>
          <button onClick={refreshViolations} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center">
            <ArrowsRightLeftIcon className="h-5 w-5 mr-2" /> Actualizar
          </button>
        </div>

        {/* Filters */}
        <div className="  p-4 mb-6 bg-white rounded-2xl shadow-md">
          <div className="grid md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Fecha Desde</label>
              <input
                type="date"
                value={filters.from}
                onChange={(e) => setFilters({ ...filters, from: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Fecha Hasta</label>
              <input
                type="date"
                value={filters.to}
                onChange={(e) => setFilters({ ...filters, to: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Estado</label>
              <select
                value={filters.status}
                onChange={(e) => setFilters({ ...filters, status: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-3 py-2"
              >
                <option value="">Todos</option>
                <option value="false">Pendientes</option>
                <option value="true">Resueltas</option>
              </select>
            </div>
            <div className="flex items-end">
              <button onClick={filterViolations} className="bg-cyan-600 text-white px-4 py-2 rounded-lg hover:bg-cyan-700 w-full flex items-center justify-center">
                <ExclamationTriangleIcon className="h-5 w-5 mr-2" /> Filtrar
              </button>
            </div>
          </div>
        </div>
        <div className="overflow-x-auto bg-white rounded-2xl shadow-md">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left p-4 font-semibold text-gray-700">Fecha/Hora</th>
                <th className="text-left p-4 font-semibold text-gray-700">Violaciones</th>
                <th className="text-left p-4 font-semibold text-gray-700">Detalles</th>
                <th className="text-left p-4 font-semibold text-gray-700">Estado</th>
                <th className="text-left p-4 font-semibold text-gray-700">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {violations.length === 0 ? (
                <tr>
                  <td colSpan="5" className="text-center p-8 text-gray-500">
                    Cargando violaciones...
                  </td>
                </tr>
              ) : (
                violations.map((v, idx) => (
                  <tr key={idx}>
                    <td className="p-4">{v.date}</td>
                    <td className="p-4">{v.type}</td>
                    <td className="p-4">{v.details}</td>
                    <td className="p-4">{v.resolved ? "Resuelta" : "Pendiente"}</td>
                    <td className="p-4">Acciones</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        <div className="flex items-center justify-between mt-6">
          <div className="text-sm text-gray-600">
            Mostrando {violations.length} de {total} violaciones
          </div>
          <div className="flex space-x-2">
            <button onClick={prevPage} className="bg-black text-white px-3 py-2 rounded-lg hover:bg-gray-400">
              <ChevronLeftIcon className="h-5 w-5" />
            </button>
            <span className="px-4 py-2 text-gray-600">Página {page}</span>
            <button onClick={nextPage} className="bg-black text-white px-3 py-2 rounded-lg hover:bg-gray-400">
              <ChevronRightIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ViolationsSection
