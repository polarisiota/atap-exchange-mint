import Link from "next/link";
import React from "react";
import Image from "next/image";
import Logo from "@/public/icons/logo.svg";

const Footer = () => {
  return (
    <div className="flex flex-col text-white">
      <div className="bg-black px-[5%] md:px-[10%] py-[2.75rem] flex justify-between gap-[0.5rem] w-full">
        <div className="flex flex-col items-start max-w-[38.5rem] gap-[3rem]">
          <h3 className="text-[1rem] font-bold md:text-[1.5rem]">
            ATAP Exchange
          </h3>
          <p className="text-middle-grey text-[1.25rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare
            cursus sed nunc eget dictum Sed ornare cursus sed nunc eget dictumd
            nunc eget dictum Sed ornare cursus sed nunc eget dictum
          </p>
        </div>
        <div className="flex flex-col gap-[3rem]">
          <h4 className="text-[1rem] font-boldmd:text-[1.5rem]">Navigate to</h4>
          <div className="flex flex-col gap-[1.5rem]">
            <div className="grid grid-cols-2 gap-[4rem]">
              <Link href="/">
                <p className="text-middle-grey text-[1.25rem]">Home</p>
              </Link>
              <Link href="/">
                <p className="text-middle-grey text-[1.25rem]">OTC</p>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-[4rem]">
              <Link href="/">
                <p className="text-middle-grey text-[1.25rem]">Exchange</p>
              </Link>
              <Link href="/">
                <p className="text-middle-grey text-[1.25rem]">Research</p>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-[4rem]">
              <Link href="/">
                <p className="text-middle-grey text-[1.25rem]">Marketplace</p>
              </Link>
              <Link href="/">
                <p className="text-middle-grey text-[1.25rem]">Contact us</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="relative flex items-end bg-light-purple h-[5rem] px-[5%] py-[0.5rem] md:px-[10%]">
        <Link href="/">
          <Image src={Logo} alt="atap logo" />
        </Link>
        <p className="absolute left-[50%] bottom-[0.5rem] translate-x-[-50%] text-[1rem] text-middle-grey">
          All rights reserved to atap.exchange.
        </p>
      </div>
    </div>
  );
};

export default Footer;
