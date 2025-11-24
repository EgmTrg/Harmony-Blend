import "./Sidebar.css";
import "./Sidebar.responsive.css";

export default function Sidebar({ active = "dashboard" }) {
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

  return (
    <>
      <button className="hb-hamburger" onClick={handleHamburger}>
        ☰
      </button>

      <aside className="hb-sidebar">
        <div className="hb-sidebar-brand">
          <img
            src="..\src\assets\logo\hb-logo-transparant.png"
            alt="HarmonyBlend Logo"
            className="hb-sidebar-logo"
          />
        </div>

        <nav className="hb-sidebar-nav">
          <ul>
            {menuItems.map((item) => (
              <li
                key={item.key}
                className={item.key === active ? "active" : ""}
              >
                <button type="button">{item.label}</button>
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
