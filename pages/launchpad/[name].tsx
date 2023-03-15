import ButtonBack from "@/components/_common/ButtonBack";
import ButtonFancy from "@/components/_common/ButtonFancy";
import ButtonTypical from "@/components/_common/ButtonTypical";
import CustomProgressBar from "@/components/_common/CustomProgressBar";
import Layout, { NextPageWithLayout } from "@/components/_common/Layout";
import ReportButton from "@/components/_common/ReportButton";
import StarButton from "@/components/_common/StarButton";
import Tab from "@/components/_common/Tab";
import WebsiteButton from "@/components/_common/WebsiteButton";
import ProjectDetailsTab from "@/components/launchpad/ProjectDetailsTab";
import ProjectIntro from "@/components/launchpad/ProjectIntro";
import { useRouter } from "next/router";
import React, { ReactElement, useState } from "react";

const ProjectDetails: NextPageWithLayout = () => {
  const router = useRouter();

  const { name } = router.query;

  const [currentTab, setCurrentTab] = useState(1);

  return (
    <div className="min-h-[calc(100vh-5rem)] flex flex-col text-white">
      <div className="mt-[3rem]">
        <ButtonBack />
      </div>
      <div className="mt-[2.75rem]">
        <div className="flex gap-[4rem] justify-between">
          <div className="flex flex-col gap-[4.5rem]">
            <ProjectIntro
              title="Project Name"
              description="Project Descirption the issuance and management of securities on the Ethereum blockchain by specifying standard interfaces through which security tokens can be operated."
            />
            <div className="grid grid-cols-2">
              <CustomProgressBar value={70} />
              <CustomProgressBar value={20.25} timeLeft="12d 22h" isTimeLeft />
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <div className="flex justify-end gap-[1rem]">
              <StarButton />
              <WebsiteButton />
              <ReportButton />
            </div>
            <div className="flex flex-col">
              <h6 className="font-semibold select-none text-middle-grey text-[1rem]">
                Price Per Token
              </h6>
              <div className="mt-[1.25rem] flex flex-col gap-[2.5rem]">
                <ButtonTypical title="100$" />
                <ButtonFancy title="Invest Now" />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[6rem]">
          <div className="flex gap-[0.5rem]">
            <Tab
              title="Project Details"
              tabIndex={1}
              currentIndex={currentTab}
              onClick={() => {
                setCurrentTab(1);
              }}
            />
            <Tab
              title="Whitepaper"
              tabIndex={2}
              currentIndex={currentTab}
              onClick={() => {
                setCurrentTab(2);
              }}
            />
            <Tab
              title="Team"
              tabIndex={3}
              currentIndex={currentTab}
              onClick={() => {
                setCurrentTab(3);
              }}
            />
          </div>
        </div>
        <div className="my-[2.25rem]">
          {currentTab === 1 && <ProjectDetailsTab />}
        </div>
      </div>
    </div>
  );
};

ProjectDetails.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default ProjectDetails;
