import React from "react";
import Logo from "../assets/logo.png";

const Mics = () => {
  return (
    <section className="w-full py-14">
      <div className="container flex justify-center items-center  flex-col">
        <div className="text-white text-5xl font-patuaOne leading-[48px] tracking-wide">
          Tokenomics
        </div>
        <div className=" justify-start items-start gap-6 flex-col lg:flex-row flex mt-16">
          <div className="w-[360px] h-[450px] pb-2.5 bg-white rounded-[20px] flex-col justify-start items-center inline-flex">
            <div className="px-[92px] py-[60px] bg-orange-600 rounded-xl flex-col justify-center items-center inline-flex">
              <div className="self-stretch flex-col justify-start items-center gap-[54px] inline-flex">
                <img className="w-[156px] h-[157px]" src={Logo} />
                <div className="flex-col justify-center text-center items-center gap-[11px] flex">
                  <div className="text-white text-5xl font-normal">1%</div>
                  <div className="text-white text-2xl font-normal">
                    Total Tax
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[360px] h-[450px] pb-2.5 bg-white rounded-[20px] flex-col justify-start items-center inline-flex">
            <div className="px-[92px] py-[60px] bg-orange-600 rounded-xl flex-col justify-center items-center inline-flex">
              <div className="self-stretch flex-col justify-start items-center gap-[54px] inline-flex">
                <img className="w-[156px] h-[157px]" src={Logo} />
                <div className="flex-col justify-center text-center items-center gap-[11px] flex">
                  <div className="text-white text-5xl font-normal">
                    1Million
                  </div>
                  <div className="text-white text-2xl font-normal">
                    Total Supply
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="w-[360px] h-[450px] pb-2.5 bg-white rounded-[20px] flex-col justify-start items-center inline-flex">
            <div className="px-[92px] py-[60px] bg-orange-600 rounded-xl flex-col justify-center items-center inline-flex">
              <div className="self-stretch flex-col justify-start items-center gap-[54px] inline-flex">
                <img className="w-[156px] h-[157px]" src={Logo} />
                <div className="flex-col justify-center text-center items-center gap-[11px] flex">
                  <div className="text-white text-5xl font-normal">2%</div>
                  <div className="text-white text-2xl font-normal">
                    Max Wallet
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
    </section>
  );
};

export default Mics;
