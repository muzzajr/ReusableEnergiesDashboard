import { React } from "react";
import "./App.css";
import DataAnalysisPage from "./pages/DataAnalysisPage";

function App() {
  // Just contains the DataAnalysisPage component for now, can be extended later
  // to include other components like the Header, Footer, etc.
  // The DataAnalysisPage component contains the main content of the app
  return (
    <div className="flex flex-col items-center p-4 justify-center w-full h-full bg-[#4296fde4]">
      <DataAnalysisPage />
    </div>
  );
}

export default App;
