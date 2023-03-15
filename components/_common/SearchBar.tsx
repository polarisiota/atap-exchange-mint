import React, { Dispatch, SetStateAction } from "react";
import Image from "next/image";
import Zoom from "@/public/icons/zoom.svg";

interface SearchBarProps {
  text: string;
  setText: Dispatch<SetStateAction<string>>;
}

const SearchBar = ({ text, setText }: SearchBarProps) => {
  return (
    <div className="w-[23.5rem] h-[2.5rem] bg-light-purple rounded-[0.5rem] flex px-[1.25rem] gap-[0.75rem]">
      <Image src={Zoom} alt="zoom icon" />
      <input
        type="text"
        placeholder="Search for tokens..."
        className="bg-transparent text-[1rem] text-middle-grey outline-none"
        value={text}
        onChange={(e) => {
          setText(e.currentTarget.value);
        }}
      />
    </div>
  );
};

export default SearchBar;
