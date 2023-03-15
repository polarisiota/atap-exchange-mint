import React, { useState } from "react";
import Card from "./Card";
import SearchBar from "../_common/SearchBar";
import useDebounce from "hooks/useDebounce";

interface AllProjectsProps {
  projectList: { title: string; description: string; soldOut: number }[];
}

const AllProjects = ({ projectList }: AllProjectsProps) => {
  const [searchText, setSearchText] = useState("");
  const debouncedSearchText = useDebounce(searchText, 1000);

  return (
    <div className="flex flex-col text-white">
      <div className="flex justify-between">
        <h2 className="text-[1.5rem] font-semibold">All Projects</h2>
        <SearchBar text={searchText} setText={setSearchText} />
      </div>
      <div className="flex flex-col gap-[3.5rem] mt-[2.625rem]">
        {projectList
          .filter((data) => data.title.includes(debouncedSearchText.trim()))
          .map((item) => (
            <Card
              key={item.title}
              title={item.title}
              description={item.description}
              soldOut={item.soldOut}
            />
          ))}
        <div className="h-[6rem] bg-light-purple flex items-center justify-center rounded-[0.5rem]">
          <p className="font-semibold text-[1rem] text-middle-grey">
            More tokens will be added soon!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AllProjects;
