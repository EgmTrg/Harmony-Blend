// src/pages/Dashboard/Dashboard.jsx
import "../../assets/css/theme.css";
import "./Dashboard.css";
import "./Dashboard.responsive.css";

export default function Dashboard() {
  return (
    <>
      {/* HERO */}
      <section className="hb-hero">
        <div>
          <h2>HarmonyBlend</h2>
          <p>
            Sipariş akışını, bayi ağını ve stok durumunu tek panel üzerinden
            takip edin. Günlük operasyon yükünüzü hafifletin.
          </p>
        </div>
        <div className="hb-hero-actions">
          <button type="button" className="primary">
            Yeni Sipariş
          </button>
          <button type="button" className="ghost">
            Rapor Oluştur
          </button>
        </div>
      </section>

      {/* METRİK KARTLARI */}
      <section className="hb-grid">
        <article className="hb-card metric">
          <header>
            <span className="label">Toplam Sipariş</span>
          </header>
          <div className="value-row">
            <span className="value">1.023</span>
            <span className="chip chip-green">%4.2 artış</span>
          </div>
          <p className="hint">Son 30 güne göre karşılaştırma.</p>
        </article>

        <article className="hb-card metric">
          <header>
            <span className="label">Aktif Bayi</span>
          </header>
          <div className="value-row">
            <span className="value">32</span>
            <span className="chip chip-soft">2 yeni bayi</span>
          </div>
          <p className="hint">Bu hafta ağa eklenenler dahil.</p>
        </article>

        <article className="hb-card metric">
          <header>
            <span className="label">Stok Uyarısı</span>
          </header>
          <div className="value-row">
            <span className="value">12 ürün</span>
            <span className="chip chip-red">3 kritik stok</span>
          </div>
          <p className="hint">Günlük stok senkronizasyonuna göre.</p>
        </article>
      </section>

      {/* TABLO */}
      <section className="hb-table-section">
        <div className="hb-table-header">
          <h3>Son Siparişler</h3>
          <button type="button" className="ghost small">
            Tümünü Gör
          </button>
        </div>

        <div className="hb-table-wrapper">
          <table className="hb-table">
            <thead>
              <tr>
                <th>Sipariş No</th>
                <th>Bayi</th>
                <th>Tarih</th>
                <th>Toplam</th>
                <th>Durum</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>#HB-10234</td>
                <td>Bakırköy Şubesi</td>
                <td>24 Eyl 2025</td>
                <td>₺4.320</td>
                <td>
                  <span className="chip chip-yellow">İnceleniyor</span>
                </td>
              </tr>
              <tr>
                <td>#HB-10233</td>
                <td>Kadıköy Şubesi</td>
                <td>23 Eyl 2025</td>
                <td>₺2.100</td>
                <td>
                  <span className="chip chip-green">Tamamlandı</span>
                </td>
              </tr>
              <tr>
                <td>#HB-10232</td>
                <td>Ataşehir Şubesi</td>
                <td>22 Eyl 2025</td>
                <td>₺1.980</td>
                <td>
                  <span className="chip chip-red">Reddedildi</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
