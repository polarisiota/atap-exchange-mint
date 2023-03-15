import React from "react";

interface ProjectIntroProps {
  title: string;
  description: string;
}

const ProjectIntro = ({ title, description }: ProjectIntroProps) => {
  return (
    <div className="flex gap-[3rem] items-center">
      <div className="flex-none h-[11.875rem] w-[11.875rem] bg-[#1E1626] rounded-[0.5rem]"></div>
      <div className="flex flex-col gap-[3rem] max-w-[37rem]">
        <h2 className="text-[2.25rem]">{title}</h2>
        <p className="text-light-grey">{description}</p>
      </div>
    </div>
  );
};

export default ProjectIntro;
