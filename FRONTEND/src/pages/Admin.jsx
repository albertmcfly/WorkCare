import Sidebar from "../components/sidebar"
import HeaderAdmin from "../components/HeaderAdmin"

function Admin() {

  return (
    <div className="bg-[#f5f5f5] h-screen grid grid-cols-[215px_1fr_1fr_1fr_1fr]">
      <Sidebar />
      <HeaderAdmin />
    </div>
  )
}

export default Admin
