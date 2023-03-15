import React, { useEffect, useState } from "react";

interface CustomProgressBarProps {
  value: number;
  title?: string;
  timeLeft?: string;
  isTimeLeft?: boolean;
}

const CustomProgressBar = ({
  value,
  title = "Tokens Sold",
  timeLeft = "",
  isTimeLeft = false,
}: CustomProgressBarProps) => {
  return (
    <div className="flex flex-col w-[24rem] gap-[1.25rem]">
      <div className="flex justify-between">
        <h5 className="font-semibold text-[1rem]">
          {isTimeLeft ? "Time Left" : title}
        </h5>
        <p className="font-semibold text-[1rem]">
          {isTimeLeft ? timeLeft : `${value}%`}
        </p>
      </div>
      <div className="relative w-full h-[0.375rem] bg-dark-grey rounded-full">
        <div
          className={`absolute h-full bg-gradient-to-r from-very-light-purple to-middle-light-purple rounded-full`}
          style={{ width: `${value}%` }}
        ></div>
      </div>
    </div>
  );
};

export default CustomProgressBar;
