import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Cards from "./components/Cards/Cards.jsx";
import Sport from "./components/Sport/Sport.jsx";
import Tren from "./components/Tren/Tren.jsx";
import Seni from "./components/Seni/Seni.jsx";
import Footer from "./components/Footer/Footer.jsx";
import tennisVideo from "./assets/video/tennis-vid.mp4";
import "./App.css";

function App() {
  // Dark mode holati localStorage'da saqlanadi, sahifa qayta ochilganda eski tanlov qoladi
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // AOS faqat bir marta ishga tushadi.
  // MUHIM: AOS animatsiyasi va CSS hover effekti BIR XIL elementga qo'yilmaydi,
  // chunki AOS shu elementga transition-duration/timing inline qo'shib qo'yadi
  // va u doimiy qolib, hover paytidagi "all 0.3s" effektini buzib yuboradi.
  // Shu sababli card_item kabi joylarda tashqi wrapper'ga data-aos qo'yiladi,
  // hover esa faqat ichki elementda ishlaydi. Swiper slaydlariga (Hero, Tren)
  // esa AOS umuman qo'yilmaydi - loop=true bilan Swiper slaydlarni klonlaydi
  // va data-aos atributi klonlarda noto'g'ri ishlab, animatsiyani buzadi.
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
    });
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <>
      <header className="header">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="tennis_vid"
          src={tennisVideo}
        ></video>
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <Hero />
      </header>
      <main>
        <Cards />
        <Sport />
        <Tren />
        <Seni />
      </main>
      <Footer />
    </>
  );
}

export default App;
