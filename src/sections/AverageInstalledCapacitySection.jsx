import { React, useEffect, useState } from "react";
import Summary from "../components/Summary";
import BarChart from "../components/BarChart";

function AverageInstalledCapacitySection() {
  const [chartData, setChartData] = useState({
    title: "",
    labels: [],
    dataSets: [],
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
        // Create chart data sets from the fetched data
        const chartDataSets = {
          label: data.key,
          data: data.dataPoints,
          backgroundColor: "rgba(75, 192, 192, 0.6)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
        };

        // set chart data state to render the chart
        setChartData({
          title: data.title,
          labels: data.labels,
          dataSets: [chartDataSets],
        });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="max-w-[800px] w-full flex gap-4 flex-wrap justify-between mt-20">
      {chartData.labels.length > 0 && chartData.dataSets.length > 0 && (
        <BarChart
          title={chartData.title}
          dataPoints={chartData.dataSets}
          labels={chartData.labels}
        />
      )}
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
