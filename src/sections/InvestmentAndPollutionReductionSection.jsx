import { React, useEffect, useState } from "react";
import Summary from "../components/Summary";
import BarChart from "../components/BarChart";

function InvestmentAndEmissionReductionSection() {
  const [chartData, setChartData] = useState({
    title: "",
    labels: [],
    dataSets: [],
  });

  useEffect(() => {
    fetch("/api/RenewableEnergiesData/investment-and-emission-reduction")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        // Create chart data set per array of data points
        const chartDataSets = data.dataPoints.map((datapoint, index) => ({
          label: data.keys[index],
          data: datapoint,
          backgroundColor: "rgba(75, 192, 192, 0.6)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
        }));

        // Set chart data state to render the chart
        setChartData({
          title: data.title,
          labels: data.labels,
          dataSets: chartDataSets,
        });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="max-w-[800px] w-full flex gap-4 flex-wrap justify-between mt-20">
      {/* Only attempt to render the charts if data is available */}
      {chartData.labels.length > 0 && chartData.dataSets.length > 0 && (
        <>
          <BarChart
            title="Average Initial Investment"
            dataPoints={[chartData.dataSets[0]]}
            labels={chartData.labels}
          />
          <BarChart
            title="Average GHG Emission Reduction"
            dataPoints={[chartData.dataSets[1]]}
            labels={chartData.labels}
          />
        </>
      )}
      <div className="mb-30">
        <Summary
          title="Analysis Summary"
          text={
            <>
              All the renewable energy sources (Solar, Wind, Hydro, Geothermal,
              Biomass, Tidal, and Waves) require roughly the same initial
              investment of around 250 million USD on average. Similarly, the
              average GHG emission reduction is nearly the same across these
              energy sources, at approximately 50 tCO2e.
              <br />
              <br />
              Given that both the initial investment and GHG emission reduction
              are consistent across all the energy sources, the data doesn't
              suggest any significant variation or relationship between the
              amount invested and the emissions reduced. It implies that
              regardless of the renewable energy source, the return on
              investment in terms of GHG emission reduction remains relatively
              uniform.
            </>
          }
        />
      </div>
    </div>
  );
}

export default InvestmentAndEmissionReductionSection;
