import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import starelka from "../../assets/img/starelka.svg";
import img1 from "../../assets/img/1.jpg";
import img2 from "../../assets/img/2.jpg";
import img3 from "../../assets/img/3.jpg";
import img4 from "../../assets/img/4.jpg";
import img5 from "../../assets/img/5.jpg";
import img6 from "../../assets/img/6.jpg";
import "./Tren.css";

function Tren() {
  const { t } = useTranslation();
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="tren">
      <div className="container">
        <div className="tren_top">
          <h2 className="tren_title">{t("tren.title")}</h2>
          <div className="tren_nav">
            <button ref={prevRef} className="tren_arrow tren_arrow--prev" aria-label="prev">
              <img src={starelka} alt="" />
            </button>
            <button ref={nextRef} className="tren_arrow tren_arrow--next" aria-label="next">
              <img src={starelka} alt="" />
            </button>
          </div>
        </div>

 
        
        <Swiper
          modules={[Navigation]}
          className="tren_swiper"
          loop={true}
          loopAdditionalSlides={6}
          navigation={true}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          spaceBetween={20}
          slidesPerView={1.4}
          breakpoints={{
            480: { slidesPerView: 2, spaceBetween: 16 },
            768: { slidesPerView: 3, spaceBetween: 20 },
            1024: { slidesPerView: 4, spaceBetween: 20 },
            1280: { slidesPerView: 5, spaceBetween: 20 },
          }}
        >
          <SwiperSlide>
            <div className="tren_item">
              <img src={img1} alt="" className="tren_item_img" />
              <h2 className="tren_item_title">{t("tren.t1_name")}</h2>
              <p className="tren_item_text">{t("tren.t1_text")}</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="tren_item">
              <img src={img2} alt="" className="tren_item_img" />
              <h2 className="tren_item_title">{t("tren.t2_name")}</h2>
              <p className="tren_item_text">{t("tren.t2_text")}</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="tren_item">
              <img src={img3} alt="" className="tren_item_img" />
              <h2 className="tren_item_title">{t("tren.t3_name")}</h2>
              <p className="tren_item_text">{t("tren.t3_text")}</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="tren_item">
              <img src={img4} alt="" className="tren_item_img" />
              <h2 className="tren_item_title">{t("tren.t4_name")}</h2>
              <p className="tren_item_text">{t("tren.t4_text")}</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="tren_item">
              <img src={img5} alt="" className="tren_item_img" />
              <h2 className="tren_item_title">{t("tren.t5_name")}</h2>
              <p className="tren_item_text">{t("tren.t5_text")}</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="tren_item">
              <img src={img6} alt="" className="tren_item_img" />
              <h2 className="tren_item_title">{t("tren.t6_name")}</h2>
              <p className="tren_item_text">{t("tren.t6_text")}</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default Tren;