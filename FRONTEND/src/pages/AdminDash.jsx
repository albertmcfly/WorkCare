import Sidebar from "../components/Sidebar"
import HeaderAdmin from "../components/HeaderAdmin"
import DashboardHome from "../components/DashboardHome"
import SystemStatus from "../components/SystemStatus"
import YoloModel from "../components/YoloModel"
import TodayDetections from "../components/TodayDetections"
import ApiEndpoints from "../components/ApiEndpoints"

function AdminDash() {
  return (
    <div className="flex bg-[#f5f5f5] h-screen">
      <Sidebar />

      <div className="flex flex-col flex-1 ml-[215px] overflow-y-auto">
        <HeaderAdmin />
        <div className="grid grid-cols-4 auto-rows-auto gap-5 my-8 mx-12">
          <div className="col-span-3">
            <DashboardHome />
          </div>

          <div className="col-start-4 row-span-2 bg-white rounded-2xl shadow-md flex items-center justify-center">
            calendario
          </div>

          <div className="col-span-1">
            <SystemStatus />
          </div>
          <div className="col-span-1">
            <YoloModel />
          </div>
          <div className="col-span-1">
            <TodayDetections />
          </div>

          <div className="col-span-2 bg-white rounded-2xl shadow-md flex items-center justify-center">
            <span className="text-gray-400">Espacio vacío</span>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-6 flex items-center justify-center">
            <span className="text-gray-600 font-medium">Widget 1</span>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-6 flex items-center justify-center">
            <span className="text-gray-600 font-medium">Widget 2</span>
          </div>
          <div className="col-span-full">
            <ApiEndpoints />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminDash
