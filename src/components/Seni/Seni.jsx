import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
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

          {/*
            seni_list avval vertikal ro'yxat edi va mobil ekranda
            sahifani pastga qarab scroll qilib yuborardi. Endi Swiper
            ichida, gorizontal slayder sifatida ishlaydi - sahifa
            o'lchami buzilmaydi, kartalar esa siljib o'qiladi.
          */}
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
                <span className="seni_item_span">
                  <img src={starelka} alt="" />
                </span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="seni_item">
                <p className="seni_item_text">{t("seni.subscriptions")}</p>
                <span className="seni_item_span">
                  <img src={starelka} alt="" />
                </span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="seni_item">
                <p className="seni_item_text">{t("seni.discounts")}</p>
                <span className="seni_item_span">
                  <img src={starelka} alt="" />
                </span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="seni_item">
                <p className="seni_item_text">{t("seni.extraServices")}</p>
                <span className="seni_item_span">
                  <img src={starelka} alt="" />
                </span>
              </div>
            </SwiperSlide>
          </Swiper>
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