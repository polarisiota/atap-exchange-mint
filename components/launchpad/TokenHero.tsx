import React from "react";
import Image from "next/image";
import EtherHero from "@/public/image/ether-hero.png";

interface TokenHeroProps {
  title: string;
  description: string;
  isVerified?: boolean;
}

const TokenHero = ({
  title,
  description,
  isVerified = true,
}: TokenHeroProps) => {
  return (
    <div className="h-[20rem] bg-light-purple rounded-[0.5rem] border-[1px] border-white border-opacity-10 text-white flex items-center">
      <div className="w-[40%] px-[3.25rem]">
        <div className="flex flex-col gap-[1.5rem]">
          <h2 className="font-semibold text-[1.5rem]">{title}</h2>
          <div className="w-[7.5rem] h-[1.875rem] flex items-center justify-center bg-gradient-to-r from-very-light-purple to-middle-light-purple rounded-full">
            <p className="text-white font-semibold text-[1rem]">
              {isVerified && "Verified"}
            </p>
          </div>
        </div>
        <p className="text-middle-grey text-[1.125rem] leading-6 mt-[1.5rem]">
          {description}
        </p>
      </div>
      <div className="w-[60%] bg-gradient-to-r from-very-light-purple to-middle-light-purple h-full rounded-r-[0.5rem]">
        <Image
          src={EtherHero}
          className="w-full h-full opacity-80"
          alt="ethereum hero background"
        />
      </div>
    </div>
  );
};

export default TokenHero;
