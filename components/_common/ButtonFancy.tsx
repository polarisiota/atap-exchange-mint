import React from "react";

interface ButtonFancyProps {
  title: string;
  isDisabled?: boolean;
  onClick?: () => void;
}

const ButtonFancy = ({
  title,
  isDisabled = false,
  onClick = () => {},
}: ButtonFancyProps) => {
  return (
    <div className="custom-button rounded-[0.375rem] min-w-[10.875rem] min-h-[2.625rem] bg-gradient-to-r bg-opacity-40 from-[#FF9AF3] to-[#822FBC] flex items-center justify-center hover:cursor-pointer hover:bg-opacity-20 ">
      <p className="font-semibold select-none text-white text-[1rem]">
        {title}
      </p>
    </div>
  );
};

export default ButtonFancy;
