import { useRouter } from "next/router";
import React from "react";

const ButtonBack = () => {
  const router = useRouter();

  return (
    <div
      className="px-[1rem] py-[0.5rem] select-none bg-light-purple w-fit rounded-[0.375rem] hover:bg-light-grey focus:bg-middle-grey active:bg-dark-grey hover:cursor-pointer"
      onClick={() => {
        router.back();
      }}
    >
      <p className="font-semibold w-fit">Back</p>
    </div>
  );
};

export default ButtonBack;
