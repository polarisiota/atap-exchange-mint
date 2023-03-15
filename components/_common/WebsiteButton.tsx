import React from "react";

interface WebsiteButtonProps {
  disabled?: boolean;
  onClick?: () => void;
}

const WebsiteButton = ({
  disabled = false,
  onClick = () => {},
}: WebsiteButtonProps) => {
  return (
    <div
      className="custom-button w-[2.625rem] h-[2.625rem] bg-dark-grey rounded-[0.375rem] flex items-center justify-center hover:cursor-pointer"
      onClick={onClick}
    >
      <svg
        width="21"
        height="21"
        viewBox="0 0 21 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.5 10.5C19.5 15.4706 15.4706 19.5 10.5 19.5M19.5 10.5C19.5 5.52944 15.4706 1.5 10.5 1.5M19.5 10.5H1.5M10.5 19.5C5.52944 19.5 1.5 15.4706 1.5 10.5M10.5 19.5C12.1569 19.5 13.5 15.4706 13.5 10.5C13.5 5.52944 12.1569 1.5 10.5 1.5M10.5 19.5C8.84315 19.5 7.5 15.4706 7.5 10.5C7.5 5.52944 8.84315 1.5 10.5 1.5M1.5 10.5C1.5 5.52944 5.52944 1.5 10.5 1.5"
          stroke="#AA99C0"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default WebsiteButton;
