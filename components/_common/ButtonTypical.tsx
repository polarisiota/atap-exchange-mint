import React from "react";

interface ButtonTypicalProps {
  title: string;
  isDisabled?: boolean;
  onClick?: () => void;
}

const ButtonTypical = ({
  title,
  isDisabled = false,
  onClick = () => {},
}: ButtonTypicalProps) => {
  return (
    <div className="custom-button rounded-[0.375rem] min-w-[10.875rem] min-h-[2.625rem] bg-dark-grey flex items-center justify-center hover:cursor-pointer hover:bg-light-grey active:bg-dark-grey">
      <p className="font-semibold select-none text-middle-grey text-[1rem]">
        {title}
      </p>
    </div>
  );
};

export default ButtonTypical;
