import { useTranslation } from "react-i18next";
import starelka from "../../assets/img/starelka.svg";
import seniImg from "../../assets/img/seni_uslug.jpg";
import "./Seni.css";

function Seni() {
  const { t } = useTranslation();

  return (
    <section className="seni">
      <div className="container">
        <div className="seni_abon" data-aos="fade-up">
          <h2 className="seni_abon_title">{t("seni.pricesTitle")}</h2>
          <ul className="seni_list">
            <li className="seni_item">
              <p className="seni_item_text">{t("seni.winter")}</p>
              <span className="seni_item_span">⬅</span>
            </li>
            <li className="seni_item">
              <p className="seni_item_text">{t("seni.subscriptions")}</p>
              <span className="seni_item_span">⬅</span>
            </li>
            <li className="seni_item">
              <p className="seni_item_text">{t("seni.discounts")}</p>
              <span className="seni_item_span">⬅</span>
            </li>
            <li className="seni_item">
              <p className="seni_item_text">{t("seni.extraServices")}</p>
              <span className="seni_item_span">⬅</span>
            </li>
          </ul>
        </div>

        <div className="seni_uslug" data-aos="fade-up" data-aos-delay="150">
          <div className="seni_uslug_top">
            <h2 className="seni_uslug_title">{t("seni.servicesTitle")}</h2>
            <img src={starelka} alt="" />
          </div>

          <div
            className="seni_uslug_box"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${seniImg})`,
            }}
          >
            <h3 className="seni_uslug_box_title">{t("seni.cafe")}</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Seni;
