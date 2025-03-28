import { React, useEffect, useState } from "react";
import Summary from "../components/Summary";
import BarChart from "../components/BarChart";

function AverageInstalledCapacitySection() {
  const [chartData, setChartData] = useState({
    labels: [],
    dataPoints: [],
  });

  useEffect(() => {
    fetch("/api/RenewableEnergiesData/all-average-installed-capacity")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setChartData({
          labels: data.labels,
          dataPoints: data.dataPoints,
        });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="max-w-[800px] w-full flex gap-4 flex-wrap justify-between mt-20">
      <BarChart
        title="Average Installed Capacity of Different Types of Renewable Energy"
        labels={chartData.labels}
        dataPoints={chartData.dataPoints}
        keyLabel="Installed Capacity (MW)"
      />
      <Summary
        title="Analysis Summary"
        text="The installed capacity for different types of renewable energy sources (Solar, Wind, 
              Hydroelectric, Geothermal, Biomass, Tidal, Wave) appears to be relatively similar, with 
              each type having an installed capacity around 500 MW. There is no single dominant energy 
              source in terms of installed capacity."
      />
    </div>
  );
}

export default AverageInstalledCapacitySection;
