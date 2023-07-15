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
              Polliwog’s Evolution
            </h1>
            <p className="text-lime-600 text-xl font-light leading-10">
              Our early stages started out as an egg, our young green little
              friend was still in the making at this stage. Once our hatchling
              emerged we called him “Polliwog”. Polliwog wanted to become the
              best version of himself but before that he had a lot to learn to
              become a froglet. Adult frog (Pepe) was his ultimate form.
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
