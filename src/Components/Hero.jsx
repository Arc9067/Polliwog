import React from "react";
import Logo from "../assets/logo.png";
import heroPattern from "../assets/heroPattern.svg";

const Hero = () => {
  return (
    <section className="pt-24 relative w-full bg-black bg-opacity-75" id="hero">
      <div className="container flex justify-center items-center flex-col text-center gap-8">
        <img src={Logo} alt="" />
        <h1 className="text-white text-6xl md:text-8xl font-patuaOne">
          Welcome To Polliwog
        </h1>
        <p className="text-center text-white text-xl max-w-2xl  leading-relaxed">
          Pepe and Toad the memecoin Launched on the ethereum. Our mission is to
          provide a fun, community-driven investment opportunity that celebrates
          the power of memes and pop culture.{" "}
        </p>

        <div className="flex items-center gap-8 flex-col md:flex-row">
          <a
            href=""
            className="w-[264px] h-[60px] px-8 py-4 bg-orange-600 rounded shadow justify-center items-center gap-2.5 inline-flex"
          >
            <div className="text-white text-xl font-patuaOne leading-7 tracking-tight">
              JOIN TELEGRAM
            </div>
          </a>
          <a
            href=""
            className="w-[264px] h-[60px] px-8 py-4 bg-gray-800 rounded shadow justify-center items-center gap-2.5 inline-flex"
          >
            <div className="text-white text-xl font-patuaOne leading-7 tracking-tight">
              BUY OILLIWOG
            </div>
          </a>
        </div>
      </div>
      <img
        src={heroPattern}
        alt=""
        className="mt-10 w-full pointer-events-none"
      />
    </section>
  );
};

export default Hero;
