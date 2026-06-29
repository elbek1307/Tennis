import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import playIcon from "../../assets/img/group1.svg";
import linkIcon from "../../assets/img/ci_external-link.svg";
import "./Hero.css";

function Hero() {
  const { t } = useTranslation();

  return (
    <section className="hero">
      <div className="container">
        <h1 className="hero_title">{t("hero.title")}</h1>

        <div className="hero_box">
          <a href="#">
            <img src={playIcon} alt="" className="hero_box_img" />
          </a>
          <p className="hero_box_text">{t("hero.videoText")}</p>
        </div>

      
        <Swiper
          className="hero_swiper"
          loop={true}
          spaceBetween={20}
          slidesPerView={1.2}
          breakpoints={{
            480: { slidesPerView: 2, spaceBetween: 16 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 20 },
            1280: { slidesPerView: 4, spaceBetween: 20 },
          }}
        >
          <SwiperSlide>
            <div className="hero_item">
              <h2 className="hero_item_title">{t("hero.service")}</h2>
              <div className="hero_item_box">
                <p className="hero_item_text">{t("hero.courtRent")}</p>
                <img src={linkIcon} alt="" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="hero_item">
              <h2 className="hero_item_title">{t("hero.service")}</h2>
              <div className="hero_item_box">
                <p className="hero_item_text">{t("hero.courtRent")}</p>
                <img src={linkIcon} alt="" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="hero_item">
              <h2 className="hero_item_title">{t("hero.service")}</h2>
              <div className="hero_item_box">
                <p className="hero_item_text">{t("hero.courtRent")}</p>
                <img src={linkIcon} alt="" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="hero_item">
              <h2 className="hero_item_title">{t("hero.service")}</h2>
              <div className="hero_item_box">
                <p className="hero_item_text">{t("hero.courtRent")}</p>
                <img src={linkIcon} alt="" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default Hero;
