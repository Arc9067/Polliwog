import React from "react";
import star from "../assets/star.png";

const Map = () => {
  return (
    <section className="w-full py-14 bg-white text-black" id="about">
      <div className="container flex justify-center items-center  flex-col">
        <div className=" text-6xl font-patuaOne leading-[48px] tracking-wide text-lime-600">
          RoadMaps
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 jube items-center gap-16 w-full mt-16">
          <article className="flex flex-col gap-8 order-2 lg:order-1">
            <div className=" text-black text-4xl font-normal  tracking-wide">
              Just like Pepe, there are no team tokens.
            </div>
            <div className=" text-black font-normal leading-relaxed tracking-wide">
              The project is fully decentralized and community based. We just do
              our best to keep everyone together as an army. If you want to do
              something then do it, if someone asks for a hand out you can tell
              them that Pepe never paid for a thing.
            </div>
          </article>

          <div className="flex items-center order-1 justify-center items-center">
            <h1 className="text-9xl font-patuaOne  text-center">1</h1>
            <img src={star} alt="" />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 jube items-center gap-16 w-full mt-16">
          <article className="flex flex-col gap-8 order-2">
            <div className=" text-black text-4xl font-normal  tracking-wide">
              Just like Pepe, there are no team tokens.
            </div>
            <div className=" text-black font-normal leading-relaxed tracking-wide">
              The project is fully decentralized and community based. We just do
              our best to keep everyone together as an army. If you want to do
              something then do it, if someone asks for a hand out you can tell
              them that Pepe never paid for a thing.
            </div>
          </article>

          <div className="flex order-1 justify-center items-center lg:items-start lg:justify-start">
            <h1 className="text-9xl font-patuaOne  text-center">2</h1>
            <img src={star} alt="" />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 jube items-center gap-16 w-full mt-16">
          <article className="flex flex-col gap-8 order-2 lg:order-1">
            <div className=" text-black text-4xl font-normal  tracking-wide">
              Just like Pepe, there are no team tokens.
            </div>
            <div className=" text-black font-normal leading-relaxed tracking-wide">
              The project is fully decentralized and community based. We just do
              our best to keep everyone together as an army. If you want to do
              something then do it, if someone asks for a hand out you can tell
              them that Pepe never paid for a thing.
            </div>
          </article>

          <div className="flex items-center order-1 justify-center items-center">
            <h1 className="text-9xl font-patuaOne  text-center">3</h1>
            <img src={star} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;
