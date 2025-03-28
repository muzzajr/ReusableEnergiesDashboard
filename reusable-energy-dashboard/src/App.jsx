import { React, useState } from "react";
import "./App.css";
import Button from "./components/Button";
import AverageInstalledCapacitySection from "./sections/AverageInstalledCapacitySection";

function App() {
  const [SectionSelection, setSectionSelection] = useState("Home");

  return (
    <div className="flex flex-col items-center p-4 justify-center w-full h-full bg-gray-300">
      <div className="max-w-[800px] w-full bg-white p-4 rounded-lg shadow-md mb-10">
        <h1 className="text-center text-3xl">
          EDA of renewable energy systems
        </h1>
      </div>
      <div className="max-w-[800px] w-full flex flex-wrap justify-around">
        <Button
          text="What is the average installed capacity of different types of renewable energy?"
          onClick={() => {
            console.log("Button clicked");
            setSectionSelection("AverageInstalledCapacity");
          }}
        />
        <Button
          text="What is the storage efficiency of different types of renewable energy?"
          onClick={() => setSectionSelection("AverageStorageEfficiency")}
        />

        <Button
          text="What renewable energy project provide the most jobs?"
          onClick={() => setSectionSelection("AverageJobOpportunities")}
        />
        <Button
          text="What does the data say about the financial side of renewable energy projects?"
          onClick={() => setSectionSelection("FinancialAnalysis")}
        />
        <Button
          text="Does more upfront investment mean better air clarity?"
          onClick={() => setSectionSelection("InvestmentAndAirClarity")}
        />
      </div>
      {SectionSelection === "Home" ? null : null}
      {SectionSelection === "AverageInstalledCapacity" ? (
        <AverageInstalledCapacitySection />
      ) : null}
    </div>
  );
}

export default App;
