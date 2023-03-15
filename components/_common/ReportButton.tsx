import React from "react";

interface ReportButtonProps {
  disabled?: boolean;
  onClick?: () => void;
}

const ReportButton = ({
  disabled = false,
  onClick = () => {},
}: ReportButtonProps) => {
  return (
    <div
      className="custom-button w-[6.375rem] h-[2.625rem] bg-dark-grey rounded-[0.375rem] flex items-center justify-center hover:cursor-pointer"
      onClick={onClick}
    >
      <div className="flex gap-[0.5rem] items-center">
        <svg
          width="21"
          height="21"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.5 7.50001V9.50001M10.5 13.5H10.51M19.1179 4.48434C18.9132 4.49472 18.7072 4.49997 18.5 4.49997C15.4265 4.49997 12.623 3.34453 10.4999 1.44434C8.37691 3.34446 5.57339 4.49985 2.5 4.49985C2.29277 4.49985 2.08678 4.4946 1.88213 4.48422C1.6327 5.44783 1.5 6.45842 1.5 7.50001C1.5 13.0915 5.32432 17.7898 10.5 19.122C15.6757 17.7898 19.5 13.0915 19.5 7.50001C19.5 6.45847 19.3673 5.44791 19.1179 4.48434Z"
            stroke="#AA99C0"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <span className="font-semibold select-none text-middle-grey text-[1rem]">
          Report
        </span>
      </div>
    </div>
  );
};

export default ReportButton;
