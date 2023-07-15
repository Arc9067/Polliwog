import React from "react";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Map from "./Components/Map";
import Mics from "./Components/Mics";

const App = () => {
  return (
    <div className="min-h-screen w-full bg-[#5BA835] text-white font-otomanopeeOne">
      <Hero />
      <About />
      <Mics />
      <Map />
    </div>
  );
};

export default App;
