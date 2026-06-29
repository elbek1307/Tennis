import { useTranslation } from "react-i18next";
import { FaYoutube, FaFacebookF, FaInstagram } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="container foot_container">
        <a href="#" className="foot_logo">
          {t("footer.rights")}
        </a>

        <div className="foot_list">
          <a href="#" className="foot_item">
            {t("nav.home")}
          </a>
          <a href="#" className="foot_item">
            {t("nav.about")}
          </a>
          <a href="#" className="foot_item">
            {t("nav.tournaments")}
          </a>
          <a href="#" className="foot_item">
            {t("nav.services")}
          </a>
          <a href="#" className="foot_item">
            {t("nav.kids")}
          </a>
          <a href="#" className="foot_item">
            {t("nav.gallery")}
          </a>
          <a href="#" className="foot_item">
            {t("nav.prices")}
          </a>
          <a href="#" className="foot_item">
            {t("nav.contacts")}
          </a>
        </div>

        <div className="foot_box">
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noreferrer"
            className="foot_icon"
            style={{ "--hover-color": "#FF0000" }}
            aria-label="youtube"
          >
            <FaYoutube />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            className="foot_icon"
            style={{ "--hover-color": "#1877F2" }}
            aria-label="facebook"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="foot_icon"
            style={{ "--hover-color": "#E1306C" }}
            aria-label="instagram"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
