import "../../assets/css/theme.css";

import "../../assets/css/layout.css";
import "./Branches.css";
import "./Branches.responsive.css";

import Sidebar from "../../../components/Sidebar/Sidebar";
import TopBar from "../../../components/TopBar/TopBar";
import Footer from "../../../components/Footer/Footer";

export default function Branches() {
  return (
    <div className="hb-app-shell">
      <Sidebar />

      <div className="hb-app-main">
        <TopBar />

        <main className="hb-app-content hb-empty-content">
          {/* 
            Bu dosya yeni sayfalar için şablondur.
            Kopyalayın, yeniden adlandırın ve sadece içerik alanını değiştirin.
          */}
          <section className="hb-empty-placeholder">
            <h2>Yeni Sayfa Başlığı</h2>
            <p>
              Buraya yeni sayfanızın içerik layout&apos;unu kurabilirsiniz.
              Sidebar, TopBar ve Footer otomatik olarak gelmektedir.
            </p>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}
