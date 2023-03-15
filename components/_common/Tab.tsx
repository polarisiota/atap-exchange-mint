import React from "react";

interface TabProps {
  title: string;
  tabIndex: number;
  currentIndex: number;
  onClick: () => void;
}

const Tab = ({ title, tabIndex, currentIndex, onClick }: TabProps) => {
  return (
    <div
      className={`px-[1.5rem] py-[0.75rem] ${
        tabIndex === currentIndex && "bg-light-purple"
      } rounded-[0.5rem] select-none ${
        currentIndex !== tabIndex &&
        "hover:cursor-pointer hover:bg-light-grey focus:bg-middle-grey active:bg-dark-grey"
      }`}
      onClick={() => {
        if (currentIndex === tabIndex) return;
        onClick();
      }}
    >
      {title}
    </div>
  );
};

export default Tab;
