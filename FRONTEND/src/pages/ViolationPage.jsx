import Sidebar from "../components/Sidebar"
import HeaderAdmin from "../components/HeaderAdmin"
import ViolationsSection from "../components/ViolationsSection"

function ViolationPage() {
  return (
    <div className="flex bg-[#f5f5f5] h-screen">
      <Sidebar />

      <div className="flex flex-col flex-1 ml-[215px] overflow-y-auto">
        <HeaderAdmin />
        <div className="my-8 mx-12">
          <ViolationsSection />
        </div>
      </div>
    </div>
  )
}

export default ViolationPage
