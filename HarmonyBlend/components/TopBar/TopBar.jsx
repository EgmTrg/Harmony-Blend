import "./TopBar.css";
import "./TopBar.responsive.css";
import { useTheme } from "../../context/ThemeContext";

export default function TopBar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="hb-topbar">
      <div className="hb-topbar-left">
        <h1>Kontrol Paneli</h1>
        <p>Sipariş, bayi ağı ve stok yönetimi tek ekranda.</p>
      </div>

      <div className="hb-topbar-center">
        <input
          className="hb-search"
          placeholder="Ara: sipariş, bayi, ürün..."
        />
      </div>

      <div className="hb-topbar-right">
        <button className="hb-icon-btn" type="button">
          🔔
        </button>

        <button
          className="hb-icon-btn"
          type="button"
          onClick={toggleTheme}
          aria-label="Tema değiştir"
        >
          {theme === "dark" ? "🌞" : "🌙"}
        </button>

        <button
          className="hb-logout"
          type="button"
          onClick={() => (window.location.href = "/")}
        >
          Çıkış
        </button>
      </div>
    </header>
  );
}
