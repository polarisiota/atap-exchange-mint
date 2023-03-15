import React from "react";
import Star from "@/public/icons/star.svg";
import StarButton from "../_common/StarButton";
import CustomProgressBar from "../_common/CustomProgressBar";
import ButtonTypical from "../_common/ButtonTypical";
import ButtonEye from "../_common/ButtonEye";
import ButtonFancy from "../_common/ButtonFancy";
import { useRouter } from "next/router";

interface CardProps {
  title: string;
  description: string;
  soldOut: number;
}

const Card = ({ title, description, soldOut }: CardProps) => {
  const router = useRouter();

  return (
    <div className="flex flex-col bg-light-purple h-[16.5rem] rounded-[0.5rem] p-[2rem]">
      <div className="flex items-center gap-[2rem] justify-around">
        <div className="flex-none w-[6.375rem] h-[6.375rem] rounded-full bg-white bg-opacity-10"></div>
        <div className="grow flex flex-col gap-[1.5rem]">
          <h3 className="font-semibold text-[1.5rem]">{title}</h3>
          <p className="text-middle-grey text-[1rem] leading-6">
            {description}
          </p>
        </div>
        <div className="flex-none items-start h-full">
          <StarButton />
        </div>
      </div>
      <div className="mt-[3rem]">
        <div className="flex justify-between">
          <CustomProgressBar value={soldOut} />
          <div className="flex gap-[1.5rem]">
            <ButtonTypical title="100% per token" />
            <ButtonEye
              title="Quick Details"
              onClick={() => {
                router.push(`/launchpad/${title}`);
              }}
            />
            <ButtonFancy title="Invest Now" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
