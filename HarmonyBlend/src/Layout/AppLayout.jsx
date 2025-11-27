// src/Layout/AppLayout.jsx
import "../assets/css/theme.css";
import "../Layout/layout.css";

import Sidebar from "../../components/Sidebar/Sidebar.jsx";
import TopBar from "../../components/TopBar/TopBar.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import { Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <div className="hb-app-shell">
      <Sidebar />

      <div className="hb-app-main">
        <TopBar />

        <main className="hb-app-content">
          <Outlet />
        </main>

        <Footer />
      </div>
    </div>
  );
}
