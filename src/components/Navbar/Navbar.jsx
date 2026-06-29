import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  FaFacebookF,
  FaInstagram,
  FaBars,
  FaTimes,
  FaSun,
  FaMoon,
} from "react-icons/fa";
import logo from "../../assets/img/Logo.svg";
import "./Navbar.css";

function Navbar({ theme, toggleTheme }) {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const changeLang = (code) => {
    i18n.changeLanguage(code);
    setLangOpen(false);
  };

  const currentLabel =
    i18n.language === "uz"
      ? "UZ"
      : i18n.language === "en"
      ? "EN"
      : "RU";

  return (
    <nav className="nav">
      <div className="container nav_container">
        <img src={logo} alt="Logo" className="nav_logo" />

        <div className={`nav_list ${menuOpen ? "nav_list--active" : ""}`}>
          <a href="#" className="nav_item" onClick={closeMenu}>
            {t("nav.home")}
          </a>
          <a href="#" className="nav_item" onClick={closeMenu}>
            {t("nav.about")}
          </a>
          <a href="#" className="nav_item" onClick={closeMenu}>
            {t("nav.tournaments")}
          </a>
          <a href="#" className="nav_item" onClick={closeMenu}>
            {t("nav.services")}
          </a>
          <a href="#" className="nav_item" onClick={closeMenu}>
            {t("nav.kids")}
          </a>
          <a href="#" className="nav_item" onClick={closeMenu}>
            {t("nav.gallery")}
          </a>
          <a href="#" className="nav_item" onClick={closeMenu}>
            {t("nav.prices")}
          </a>
          <a href="#" className="nav_item" onClick={closeMenu}>
            {t("nav.contacts")}
          </a>

        
          <div className="nav_mobile_extra">
            <div className="nav_box">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="nav_icon"
                style={{ "--hover-color": "#1877F2" }}
                aria-label="facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="nav_icon"
                style={{ "--hover-color": "#E1306C" }}
                aria-label="instagram"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        <div className="nav_right">
         
          <div className="lang_switch">
            <button
              className="lang_current"
              onClick={() => setLangOpen((p) => !p)}
            >
              {currentLabel}
            </button>
            {langOpen && (
              <div className="lang_dropdown">
                <button
                  className={`lang_option ${
                    i18n.language === "uz" ? "lang_option--active" : ""
                  }`}
                  onClick={() => changeLang("uz")}
                >
                  UZ
                </button>
                <button
                  className={`lang_option ${
                    i18n.language === "ru" ? "lang_option--active" : ""
                  }`}
                  onClick={() => changeLang("ru")}
                >
                  RU
                </button>
                <button
                  className={`lang_option ${
                    i18n.language === "en" ? "lang_option--active" : ""
                  }`}
                  onClick={() => changeLang("en")}
                >
                  EN
                </button>
              </div>
            )}
          </div>

          
          <button
            className="theme_toggle"
            onClick={toggleTheme}
            aria-label="theme toggle"
            title={theme === "light" ? t("theme.dark") : t("theme.light")}
          >
            {theme === "light" ? <FaMoon /> : <FaSun />}
          </button>

        
          <div className="nav_box nav_box--desktop">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="nav_icon"
              style={{ "--hover-color": "#1877F2" }}
              aria-label="facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="nav_icon"
              style={{ "--hover-color": "#E1306C" }}
              aria-label="instagram"
            >
              <FaInstagram />
            </a>
          </div>

          
          <button
            className="burger"
            onClick={() => setMenuOpen((p) => !p)}
            aria-label="menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
