import Link from "next/link";
import React from "react";
import Image from "next/image";
import Logo from "@/public/icons/logo.svg";

const Header = () => {
  return (
    <div className="fixed z-50 flex h-[7.75rem] w-full items-center bg-dark-purple px-[5%] md:px-[10%] text-neutral50">
      <Link href="/">
        <Image src={Logo} alt="atap logo" />
      </Link>
    </div>
  );
};

export default Header;
