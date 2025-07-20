import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Login from './pages/login';
import './app.css'
import Register from "./pages/Register";
import ProtectedRoute from "./components/ProtectedRoute";
import "./pages/test";
import NotFound from "./pages/NotFound"; 

function Logout() {
  localStorage.clear()
  return <Navigate to="/login/"></Navigate>
  } 

  function RegisterAndLogout() {
    localStorage.clear()
    return <Register></Register>
  }

function App (){
  return(
    <BrowserRouter>
      <Routes>
        <Route
        path="/"
        element={
          <ProtectedRoute>
            <test></test>
          </ProtectedRoute>
        }
        />
        <Route path="/" element={<Home />}></Route>
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/NotFound" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App