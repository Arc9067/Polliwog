import React from "react";
import Logo from "../assets/logo2.png";
import fish from "../assets/fish.png";

const About = () => {
  return (
    <div className="bg-white text-[#5BA835] py-14">
      <div className="container flex flex-col gap-8 justify-center">
        <div className="w-full grid gap-16 lg:grid-cols-2 justify-between items-center grid-cols-1">
          <article className="flex flex-col gap-10">
            <h1 className="text-lime-600 text-6xl font-patuaOne tracking-wide">
              About Polliwog
            </h1>
            <p className="text-lime-600 text-xl font-light leading-10">
              Pepe and Toad the memecoin Launched on the ethereum. Our mission
              is to provide a fun, community-driven investment opportunity that
              celebrates the power of memes and pop culture. With a vision to
              become the leading memecoin in the market, we believe Pepe and
              Toad is the perfect addition to any investor’s portfolio. Join us
              on this journey to revolutionize the world of memecoins.
              <br />
            </p>
          </article>

          <img src={Logo} alt="" className="lg:ml-auto" />
        </div>
        <img src={fish} alt="" />
      </div>
    </div>
  );
};

export default About;
