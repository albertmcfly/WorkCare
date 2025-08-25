import { ChartBarIcon, BellIcon, InformationCircleIcon } from "@heroicons/react/24/outline"

function StreamStats({ alerts = [] }) {
  const StatsCard = ({ icon: Icon, title, children, gradient = false }) => {
    const baseClass = "p-5 rounded-lg flex flex-col justify-between shadow-md"
    const bgClass = gradient
      ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white"
      : "bg-gray-50 text-gray-800"

    return (
      <div className={`${baseClass} ${bgClass}`}>
        <h3 className="font-semibold mb-2 flex items-center">
          {Icon && <Icon className={`h-5 w-5 mr-2 ${gradient ? "" : "text-gray-600"}`} />}
          {title}
        </h3>
        <div className={gradient ? "space-y-2" : "flex-1 overflow-y-auto"}>
          {children}
        </div>
      </div>
    )
  }

  return (
    <div className="grid md:grid-cols-3 gap-6 mt-6">
      <StatsCard icon={ChartBarIcon} title="Estadísticas en Vivo" gradient>
        <div className="flex justify-between"><span>Personas:</span><span>0</span></div>
        <div className="flex justify-between"><span>Cumplimiento:</span><span>-</span></div>
        <div className="flex justify-between"><span>Violaciones:</span><span>0</span></div>
      </StatsCard>

      <StatsCard icon={BellIcon} title="Alertas Recientes">
        {alerts.length === 0 ? (
          <p className="text-gray-500 text-sm">No hay alertas recientes</p>
        ) : (
          alerts.map((alert, idx) => <p key={idx} className="text-sm text-gray-700">{alert}</p>)
        )}
      </StatsCard>

      <StatsCard icon={InformationCircleIcon} title="Información del Stream">
        <div>Estado: <span>Desconectado</span></div>
        <div>FPS: <span>-</span></div>
        <div>Resolución: <span>-</span></div>
      </StatsCard>
    </div>
  )
}

export default StreamStats