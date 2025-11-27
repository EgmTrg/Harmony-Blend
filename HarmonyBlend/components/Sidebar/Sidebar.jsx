// src/components/Sidebar/Sidebar.jsx
import { useLocation, useNavigate } from "react-router-dom";
import "./Sidebar.css";
import "./Sidebar.responsive.css";
import logo from "../../src/assets/logo/hb-logo-transparant.png";

export default function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  // /dashboard -> "dashboard", /orders -> "orders"...
  const currentPath = location.pathname.split("/")[1] || "";

  const menuItems = [
    { key: "dashboard", label: "Kontrol Paneli" },
    { key: "orders", label: "Siparişler" },
    { key: "branches", label: "Şubeler" },
    { key: "products", label: "Ürünler" },
    { key: "reports", label: "Raporlar" },
    { key: "settings", label: "Ayarlar" },
  ];

  const handleHamburger = () => {
    const sidebar = document.querySelector(".hb-sidebar");
    if (!sidebar) return;
    sidebar.classList.toggle("open");
  };

  const handleNavigate = (key) => {
    navigate(`/${key}`);
  };

  return (
    <>
      <button className="hb-hamburger" onClick={handleHamburger}>
        ☰
      </button>

      <aside className="hb-sidebar">
        <div className="hb-sidebar-brand">
          <img src={logo} alt="HarmonyBlend Logo" className="hb-sidebar-logo" />
        </div>

        <nav className="hb-sidebar-nav">
          <ul>
            {menuItems.map((item) => (
              <li
                key={item.key}
                className={currentPath === item.key ? "active" : ""}
              >
                <button type="button" onClick={() => handleNavigate(item.key)}>
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hb-sidebar-user">
          <div className="avatar">E</div>
          <div className="info">
            <p>Egemen T.</p>
            <span>Admin</span>
          </div>
        </div>
      </aside>
    </>
  );
}
