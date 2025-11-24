import { useEffect, useState } from "react";
import "./Login.css";

export default function Login() {
  useEffect(() => {
    console.log("Veritabanindan verileri cekecek olan kod blogu.");
    console.log(
      "Veriler cekildi simdi tanimlama zamani alttaki satirda da cekilen verileri degiskenlere atiyoruz."
    );
  }, []);

  const [email, setEmail] = useState("admin");
  const [password, setPassword] = useState("123");
  const [loading, setLoading] = useState(false);

  const LoginBtn_Action = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      const result = await response.json();

      if (result.success) {
        localStorage.setItem("token", result.token);
        window.location.href = "/home";
      } else {
        alert(result.message || "Giriş başarısız");
      }
    } catch (err) {
      console.error("Hata:", err);
      alert("Sunucuya bağlanılamadı.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="LoginPage-Body">
      <div className="login-card">
        {/* Logo Kutusu */}
        <div className="logo-box">
          <img src="..\..\src\assets\logo\hb-logo-transparant-new.png" alt="" />
        </div>

        {/* Başlıklar */}

        <p className="login-subtitle">Sipariş ve iletişimin merkezi</p>

        {/* Form */}
        <form>
          {/* E-posta */}
          <label htmlFor="email">E-posta</label>
          <input
            id="email"
            type="email"
            placeholder="ornek@firma.com"
            onChange={(newValue) => setEmail(newValue.target.value)}
          />

          {/* Şifre */}
          <label htmlFor="password">Şifre</label>
          <input
            id="password"
            type="password"
            placeholder="••••••••"
            onChange={(newValue) => setPassword(newValue.target.value)}
          />

          {/* Beni Hatırla + Şifremi unuttum */}
          <div className="checkbox-row">
            <label>
              <input type="checkbox" /> Beni hatırla
            </label>

            <a href="#">Şifremi unuttum</a>
          </div>

          {/* Giriş Yap Butonu */}
          <button
            className="login-btn"
            type="submit"
            onClick={LoginBtn_Action}
            onSubmit={LoginBtn_Action}
          >
            Giriş Yap
          </button>
        </form>

        {/* Alt kısım */}
        <p className="signup-text">
          Hesabınız yok mu? <a href="#">Kayıt Ol</a>
        </p>

        <p className="footer-login">
          © 2025 EGMTRG Software. Tüm hakları saklıdır.
        </p>
      </div>
    </div>
  );
}
