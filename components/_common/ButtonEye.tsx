import React from "react";

interface ButtonEyeProps {
  title: string;
  isDisabled?: boolean;
  onClick?: () => void;
}

const ButtonEye = ({
  title,
  isDisabled = false,
  onClick = () => {},
}: ButtonEyeProps) => {
  return (
    <div
      className="custom-button group rounded-[0.375rem] min-w-[10.875rem] min-h-[2.625rem] bg-dark-grey flex items-center justify-center hover:cursor-pointer hover:bg-light-grey focus:bg-middle-grey active:bg-dark-grey"
      onClick={() => {
        if (!isDisabled) {
          onClick();
        }
      }}
    >
      <div className="flex items-center gap-[0.75rem]">
        <svg
          width="22"
          height="17"
          viewBox="0 0 22 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="block group-active:hidden"
        >
          <path
            d="M14 8.5C14 10.1569 12.6569 11.5 11 11.5C9.34315 11.5 8 10.1569 8 8.5C8 6.84315 9.34315 5.5 11 5.5C12.6569 5.5 14 6.84315 14 8.5Z"
            stroke="#AA99C0"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1.45825 8.49997C2.73253 4.44288 6.52281 1.5 11.0004 1.5C15.4781 1.5 19.2684 4.44291 20.5426 8.50004C19.2684 12.5571 15.4781 15.5 11.0005 15.5C6.52281 15.5 2.73251 12.5571 1.45825 8.49997Z"
            stroke="#AA99C0"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <svg
          width="24"
          height="17"
          viewBox="0 0 24 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="hidden group-active:block"
        >
          <path
            d="M12 10.8002C13.3255 10.8002 14.4 9.77045 14.4 8.50019C14.4 7.22994 13.3255 6.20019 12 6.20019C10.6745 6.20019 9.60001 7.22994 9.60001 8.50019C9.60001 9.77045 10.6745 10.8002 12 10.8002Z"
            fill="url(#paint0_linear_532_23)"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.549316 8.50024C2.07842 3.83454 6.62678 0.450195 12 0.450195C17.3731 0.450195 21.9215 3.83451 23.4506 8.50015C21.9215 13.1658 17.3731 16.5502 11.9999 16.5502C6.62679 16.5502 2.07845 13.1659 0.549316 8.50024ZM16.8 8.50019C16.8 11.0407 14.651 13.1002 12 13.1002C9.34904 13.1002 7.20001 11.0407 7.20001 8.50019C7.20001 5.95968 9.34904 3.90019 12 3.90019C14.651 3.90019 16.8 5.95968 16.8 8.50019Z"
            fill="url(#paint1_linear_532_23)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_532_23"
              x1="24.215"
              y1="0.454096"
              x2="0.45907"
              y2="0.396703"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#822FBC" />
              <stop offset="1" stopColor="#FF9AF3" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_532_23"
              x1="24.215"
              y1="0.454096"
              x2="0.45907"
              y2="0.396703"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#822FBC" />
              <stop offset="1" stopColor="#FF9AF3" />
            </linearGradient>
          </defs>
        </svg>
        <p className="font-semibold select-none text-middle-grey text-[1rem]">
          {title}
        </p>
      </div>
    </div>
  );
};

export default ButtonEye;
