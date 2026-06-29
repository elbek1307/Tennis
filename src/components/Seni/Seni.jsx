import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaChevronRight } from "react-icons/fa";
import "swiper/css";

import seniImg from "../../assets/img/seni_uslug.jpg";
import courtsImg from "../../assets/img/tennis1.jpg";
import gymImg from "../../assets/img/sport-tennis.jpg";
import "./Seni.css";

function Seni() {
  const { t } = useTranslation();


  const [uslugIndex, setUslugIndex] = useState(0);

  const services = [
    { title: t("seni.cafe"), img: seniImg },
    { title: t("seni.courts"), img: courtsImg },
    { title: t("seni.gym"), img: gymImg },
  ];

  const currentService = services[uslugIndex];

  const handleNextService = () => {
    setUslugIndex((prev) => (prev + 1) % services.length);
  };

  return (
    <section className="seni">
      <div className="container">
        <div className="seni_abon" data-aos="fade-up">
          <h2 className="seni_abon_title">{t("seni.pricesTitle")}</h2>

         
          <Swiper
            className="seni_swiper"
            spaceBetween={16}
            slidesPerView={1.3}
            breakpoints={{
              480: { slidesPerView: 1.6, spaceBetween: 16 },
              768: { slidesPerView: 2, spaceBetween: 18 },
              1024: { slidesPerView: 2, spaceBetween: 20 },
            }}
          >
            <SwiperSlide>
              <div className="seni_item">
                <p className="seni_item_text">{t("seni.winter")}</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="seni_item">
                <p className="seni_item_text">{t("seni.subscriptions")}</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="seni_item">
                <p className="seni_item_text">{t("seni.discounts")}</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="seni_item">
                <p className="seni_item_text">{t("seni.extraServices")}</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="seni_uslug" data-aos="fade-up" data-aos-delay="150">
          <div className="seni_uslug_top">
            <h2 className="seni_uslug_title">{t("seni.servicesTitle")}</h2>
            
            <button
              className="seni_uslug_arrow"
              onClick={handleNextService}
              aria-label="next service"
            >
              <FaChevronRight />
            </button>
          </div>

          <div
            className="seni_uslug_box"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${currentService.img})`,
            }}
          >
            <h3 className="seni_uslug_box_title">{currentService.title}</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Seni;