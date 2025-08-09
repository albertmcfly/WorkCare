import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from './pages/Login';
import Register from "./pages/Register";
/*import ProtectedRoute from "./components/ProtectedRoute";*/
import NotFound from "./pages/NotFound";
import Admin from "./pages/Admin";
import "./app.css";

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
      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
}

export default App;
