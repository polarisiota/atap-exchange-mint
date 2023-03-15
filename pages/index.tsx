import Layout, { NextPageWithLayout } from "@/components/_common/Layout";
import AllProjects from "@/components/launchpad/AllProjects";
import TokenHero from "@/components/launchpad/TokenHero";
import React, { ReactElement } from "react";

const PROJECT_LIST = [
  {
    title: "Greyz Token",
    description:
      "Project Descirption the issuance and management of securities on the Ethereum blockchain by specifying standard interfaces through which security tokens can be operated on and interrogated by all relevant parties.",
    soldOut: 70,
  },
  {
    title: "Calix Labs Token",
    description:
      "Project Descirption the issuance and management of securities on the Ethereum blockchain by specifying standard interfaces through which security tokens can be operated on and interrogated by all relevant parties.",
    soldOut: 70,
  },
];

const Home: NextPageWithLayout = () => {
  return (
    <div className="min-h-[calc(100vh-5rem)]">
      <div className="mt-[3.5rem]">
        <TokenHero
          title="Greyz Token"
          description="Project Description the issuance and management of securities on the Ethereum blockchain."
        />
      </div>
      <div className="mt-[6rem]">
        <AllProjects projectList={PROJECT_LIST} />
      </div>
    </div>
  );
};

Home.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default Home;
