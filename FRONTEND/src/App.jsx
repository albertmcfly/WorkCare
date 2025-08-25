import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from './pages/Login';
import Register from "./pages/Register";
/*import ProtectedRoute from "./components/ProtectedRoute";*/
import NotFound from "./pages/NotFound";
import AdminDash from "./pages/AdminDash";
import DetectarPage from './pages/DetectarPage'
import "./app.css";
import MonitoreoPage from "./pages/MonitoreoPage"
import ViolationPage from "./pages/ViolationPage"

function Logout() {
  localStorage.clear();
  return <Navigate to="/login/" />;
}

function RegisterAndLogout() {
  localStorage.clear();
  return <Register />;
}

function App() {
  return (
    <Routes>
      {/*<Route
        path="/"
        element={
          <ProtectedRoute>
            
          </ProtectedRoute>
        }
      />*/}
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<RegisterAndLogout />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/admin" element={<AdminDash />} />
      <Route path="/detectar" element={<DetectarPage />} />
      <Route path="/monitoreo" element={<MonitoreoPage />} />
      <Route path="/violaciones" element={<ViolationPage />} />
    </Routes>
  );
}

export default App;
