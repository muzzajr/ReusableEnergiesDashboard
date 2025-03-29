import { React, useState } from "react";
import "../App.css";
import Button from "../components/Button";
import AverageInstalledCapacitySection from "../sections/AverageInstalledCapacitySection";
import InvestmentAndPollutionReductionSection from "../sections/InvestmentAndPollutionReductionSection";

function DataAnalysisPage() {
  const [SectionSelection, setSectionSelection] = useState(
    "AverageInstalledCapacity"
  );

  return (
    <div className="flex flex-col items-center p-4 justify-center w-full h-full bg-[#4296fde4]">
      <div className="max-w-[800px] sticky top-0 w-full bg-white p-4 rounded-lg shadow-md mb-10">
        <h1 className="text-center text-3xl">
          EDA of renewable energy systems
        </h1>
      </div>
      <div className="max-w-[800px] w-full flex flex-wrap justify-around">
        <Button
          text="What is the average installed capacity of different types of renewable energy?"
          onClick={() => setSectionSelection("AverageInstalledCapacity")}
        />
        <Button
          text="Does more upfront investment lead to greater GHG pollution reduction?"
          onClick={() => setSectionSelection("InvestmentAndPollutoinReduction")}
        />
      </div>
      {SectionSelection === "AverageInstalledCapacity" ? (
        <AverageInstalledCapacitySection />
      ) : null}
      {SectionSelection === "InvestmentAndPollutoinReduction" ? (
        <InvestmentAndPollutionReductionSection />
      ) : null}
    </div>
  );
}

export default DataAnalysisPage;
