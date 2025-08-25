// src/pages/DetectarPage.jsx
import Sidebar from '../components/Sidebar'
import HeaderAdmin from '../components/HeaderAdmin'
import EppInfo from '../components/EppInfo'
import DetectEpp from '../components/DetectEpp'

function DetectarPage() {
  return (
    <div className="flex h-screen bg-[#f5f5f5]">
      <Sidebar />
      <div className="flex flex-col flex-1 ml-[215px] overflow-y-auto">
        <div className="h-[60px] flex-shrink-0">
          <HeaderAdmin />
        </div>

        <div className="flex-1 my-8 mx-12 flex flex-col space-y-5">
          <div className="">
            <EppInfo />
          </div>
          <div className="bg-white rounded-2xl shadow-md p-6">
            <DetectEpp />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetectarPage
