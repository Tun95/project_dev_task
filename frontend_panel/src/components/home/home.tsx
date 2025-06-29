import BarChart from "./chart/Chart";
import SliderComponent from "./slider/Slider";
import TableComponent from "./table/Table";
import Widget from "./widget/Widget";
import { useTheme } from "../../custom hooks/Hooks";
import ProgressBar from "./progress bar/ProgressBar";

function Home() {
  const { theme } = useTheme();

  const TotalDeliverables = 42;
  const PendingReview = 8;
  const ApprovedItems = 32;
  const RevisedItems = 2;

  return (
    <div className={`w-full overflow-hidden ${theme === "dark" ? "dark" : ""}`}>
      {/* Welcome message */}
      <div
        className={`w-full overflow-hidden ${theme === "dark" ? "dark" : ""}`}
      >
        {/* Welcome message */}
        <div className="mb-2 max-480px:mb-1">
          <div className="content">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 max-480px:text-xl max-480px:p-2">
              Welcome back to ProjectFlow!
            </h2>
            <p className="max-900px:px-2 text-gray-600 dark:text-gray-400 mt-2 max-w-3xl text-sm leading-6">
              Track all deliverables, client feedback, and project status in one
              place. Quickly access what needs attention today.
            </p>
          </div>
        </div>
      </div>

      {/* Widgets */}
      <div
        className="grid grid-cols-4 gap-5 py-5 w-full 
               max-1045px:grid-cols-2 
               max-630px:grid-cols-1 
               max-900px:px-2"
      >
        <Widget count={TotalDeliverables} type="deliverables" />
        <Widget count={PendingReview} type="pending" />
        <Widget count={ApprovedItems} type="approved" />
        <Widget count={RevisedItems} type="revised" />
      </div>

      {/* Chart and Slider Section */}
      <div className="mb-5 max-900px:px-2">
        <h4 className="text-lg font-medium text-gray-900 dark:text-gray-100">
          Project Overview
        </h4>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-1 w-full max-900px:grid-cols-1">
          <div className="w-full border border-gray-200 dark:border-gray-700 p-2 rounded-md h-[360px] overflow-hidden bg-white dark:bg-gray-800">
            <BarChart />
          </div>
          <div className="w-full h-[360px] overflow-hidden">
            <SliderComponent />
          </div>
        </div>
      </div>

      <div className="max-900px:px-2 mb-5">
        <h4 className="text-lg font-medium text-gray-900 dark:text-gray-100">
          Project Statistics
        </h4>
        <div className="mt-1">
          <ProgressBar />
        </div>
      </div>

      {/* Table Section */}
      <div className="max-900px:px-2 relative">
        <h4 className="text-lg font-medium text-gray-900 dark:text-gray-100">
          Latest Deliveries
        </h4>
        <div className="mt-1">
          <TableComponent />
        </div>
      </div>
    </div>
  );
}

export default Home;
