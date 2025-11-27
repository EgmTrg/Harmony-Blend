// src/App.jsx
import { Routes, Route } from "react-router-dom";
import "./assets/css/theme.css"; // global tema
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import EmptyTheme from "./pages/EmptyTheme/EmptyTheme";
import AppLayout from "./Layout/AppLayout.jsx";

function App() {
  return (
    <Routes>
      {/* Login hiçbir layout kullanmıyor */}
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />

      {/* Yönetim paneli sayfaları ortak layout içinde */}
      <Route element={<AppLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/orders" element={<EmptyTheme />} />
        <Route path="/reports" element={<EmptyTheme />} />
        <Route path="/empty" element={<EmptyTheme />} />
      </Route>
    </Routes>
  );
}

export default App;
