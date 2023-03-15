import React from "react";

const TokenomicsRow = ({
  title,
  value,
  index,
  isLast = false,
}: {
  title: string;
  value: string;
  index: number;
  isLast?: boolean;
}) => {
  return (
    <div
      className={`flex px-[1.5rem] items-center justify-between w-full ${
        index === 0 && "rounded-t-[0.5rem]"
      } ${isLast && "rounded-b-[0.5rem]"} ${index % 2 === 0 && "bg-[#3C2849]"}`}
    >
      <h6 className="text-[#C3B1DA] font-semibold text-[1rem]">{title}</h6>
      <p className="font-semibold text-[1rem]">{value}</p>
    </div>
  );
};

const ProjectDetailsTab = () => {
  return (
    <div className="flex h-[26rem] bg-[#201728] rounded-[0.5rem] overflow-y-auto px-[1.5rem] py-[2rem]">
      <div className="w-[70%] flex flex-col gap-[2.5rem]">
        <h4 className="text-[1.25rem]">Tokenomics</h4>
        <div className="border-[1px] border-dark-grey flex-grow rounded-[0.5rem] grid grid-rows-4">
          <TokenomicsRow title="Total Supply" value="12456355" index={0} />
          <TokenomicsRow title="Total Supply" value="12456355" index={1} />
          <TokenomicsRow title="Total Supply" value="12456355" index={2} />
          <TokenomicsRow
            title="Total Supply"
            value="12456355"
            index={3}
            isLast
          />
        </div>
      </div>
      <div className="w-[30%] flex flex-col gap-[2.5rem] ml-[2rem]">
        <h4 className="text-[1.25rem]">Sales Statistics</h4>
        <div className="border-[1px] border-dark-grey flex-grow rounded-[0.5rem] bg-[#3C2849]"></div>
      </div>
    </div>
  );
};

export default ProjectDetailsTab;
