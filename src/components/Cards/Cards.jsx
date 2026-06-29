import { useTranslation } from "react-i18next";
import tennis1 from "../../assets/img/tennis1.jpg";
import tennis2 from "../../assets/img/tennis2.jpg";
import tennis3 from "../../assets/img/tennis3.jpg";
import "./Cards.css";

function Cards() {
  const { t } = useTranslation();

  return (
    <section className="cards">
      <div className="container">
        <div className="card_list">
          <div className="card_item_wrap" data-aos="zoom-in">
            <div
              className="card_item"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${tennis1})`,
              }}
            >
              <h2 className="card_item_title">{t("cards.card1")}</h2>
            </div>
          </div>

          <div className="card_item_wrap" data-aos="zoom-in" data-aos-delay="100">
            <div
              className="card_item"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${tennis2})`,
              }}
            >
              <h2 className="card_item_title">{t("cards.card2")}</h2>
            </div>
          </div>

          <div className="card_item_wrap" data-aos="zoom-in" data-aos-delay="200">
            <div
              className="card_item"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${tennis3})`,
              }}
            >
              <h2 className="card_item_title">{t("cards.card3")}</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cards;
