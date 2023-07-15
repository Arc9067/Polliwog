import React from "react";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Map from "./Components/Map";
import Mics from "./Components/Mics";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div className="min-h-screen w-full bg-[#5BA835] text-white font-otomanopeeOne">
      <Hero />
      <About />
      <Mics />
      <Footer />
    </div>
  );
};

export default App;
