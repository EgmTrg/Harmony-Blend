import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import EmptyTheme from "./pages/EmptyTheme/EmptyTheme.jsx";
import "./App.css";

function App() {
  return (
    <Routes>
      {/* Public Route */}
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />

      {/* Dashboard */}
      <Route path="/dashboard" element={<Dashboard />} />

      {/* Orders */}
      <Route path="/orders" element={<EmptyTheme />} />

      {/* Reports */}
      <Route path="/orders" element={<EmptyTheme />} />

      {/* Yeni sayfalar için boş template */}
      <Route path="/empty" element={<EmptyTheme />} />

      {/* Eski HomePage kaldırılacaksa gerek yok, bırakabilirsin de */}
      {/* <Route path="/home" element={<HomePage />} /> */}
    </Routes>
  );
}

export default App;
