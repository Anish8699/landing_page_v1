import React from "react";
import Image from "next/image";
import Bluebg from "./Bluebg";

const SecondLayer = () => {

  return (
    <div className="relative w-full py-3 mb-36 d:mb-44">
      <div className="">
        <div className="flex flex-col-reverse md:flex-row gap-y-[50px] md:gap-y-0">
          <div className="w-full" data-aos="fade-right">
            <Image
              src="/assets/UI-Mockup 2.svg"
              width={0}
              height={0}
              sizes=""
              style={{
                width: "100%",
                height: "auto",
              }}
              alt="image"
            />
          </div>
          <div data-aos="fade-left" className="flex flex-col w-full gap-y-[20px] nd:gap-y-[50px] text-[#ffffff] ">
            <h1 className="text-3xl text-center md:text-[55px] text-[#ffffff] md:text-left font-bold md:leading-[73px]">
              <span style={{fontWeight:"700",fontSize:"48px",lineHeight:"65.4px"}}><span style={{color:"#F8CE62"}}>Synesxi’s</span> Leading the Solana Revolution</span>
              
            </h1>
            <p style={{fontWeight:"400",fontSize:"24px",lineHeight:"32.7px"}}>
              <span style={{color:"#EBC3FF"}}>Synesxi</span> isn't
              just a marketplace, it's your gateway to the vibrant Solana
              blockchain. We connect a global community of key players on the
              Solana blockchain, from curious newcomers to seasoned veterans  to
              harness the full potential of this revolutionary technology.
              Synesxi provides seamless, end-to-end services that cater to every
              participant within the Solana network, empowering individuals and
              businesses (B2B/B2C) to thrive.
            </p>
          </div>
        </div>

        <div className="absolute top-[-10px] left-[-30px] z-[-10]">
          <Bluebg bgcolor="bg-[rgba(248,206,98,1)]" />
        </div>
        <div className="absolute top-[-10px] right-[-30px] z-[-10]">
          <Bluebg bgcolor="bg-[#59D8F0]" />
        </div>
      </div>
    </div>
  );
};

export default SecondLayer;
