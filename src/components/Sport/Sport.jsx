import { useTranslation } from "react-i18next";
import sportImg from "../../assets/img/sport-tennis.jpg";
import "./Sport.css";

function Sport() {
  const { t } = useTranslation();

  return (
    <section className="sport">
      <div className="container">
        <img
          src={sportImg}
          alt=""
          className="sport_img"
          data-aos="fade-right"
        />
        <div className="sport_content" data-aos="fade-left">
          <h2 className="sport_title">{t("sport.title")}</h2>
          <p className="sport_text">
            {t("sport.text1")}
            <br />
            <br />
            {t("sport.text2")}
          </p>
          <h3 className="sport_list_title">{t("sport.listTitle")}</h3>
          <ul className="sport_list">
            <li className="sport_item">
              <p className="sport_item_text">{t("sport.item1")}</p>
            </li>
            <li className="sport_item">
              <p className="sport_item_text">{t("sport.item2")}</p>
            </li>
            <li className="sport_item">
              <p className="sport_item_text">{t("sport.item3")}</p>
            </li>
            <li className="sport_item">
              <p className="sport_item_text">{t("sport.item4")}</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Sport;
