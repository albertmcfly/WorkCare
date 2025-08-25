import Sidebar from "../components/Sidebar"
import HeaderAdmin from "../components/HeaderAdmin"
import CameraCard from "../components/CameraCard"
import StreamStats from "../components/StreamStats"

function MonitoreoPage() {
  const alerts = ["Alerta 1", "Alerta 2"] // ejemplo de alertas

  return (
    <div className="flex bg-[#f5f5f5] h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Contenedor principal */}
      <div className="flex flex-col flex-1 ml-[215px] overflow-y-auto">
        {/* Header */}
        <HeaderAdmin />

        {/* Contenido */}
        <div className="my-8 mx-12">
          <h1 className="text-3xl font-bold mb-6">Monitoreo en Tiempo Real</h1>

          {/* Cámara principal */}
          <CameraCard />

          {/* Estadísticas, alertas e info */}
          <StreamStats alerts={alerts} />
        </div>
      </div>
    </div>
  )
}

export default MonitoreoPage