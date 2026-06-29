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
  
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

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
