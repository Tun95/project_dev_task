import BarChart from "./chart/Chart";
import SliderComponent from "./slider/Slider";
import TableComponent from "./table/Table";
import Widget from "./widget/Widget";
import { useTheme } from "../../custom hooks/Hooks";

function Home() {
  const { theme } = useTheme();
  const TotalEvent = 100000;
  const TotalSpeakers = 25;
  const TotalUsers = 300;
  const TotalRevenue = 500000;

  return (
    <div className={`w-full overflow-hidden ${theme === "dark" ? "dark" : ""}`}>
      {/* Navigation */}
      <div className="mb-2 max-480px:mb-1">
        <div className="content">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 max-480px:text-xl max-480px:p-2">
            Welcome! Here's your summary
          </h2>
        </div>
      </div>

      {/* Widgets */}
      <div
        className="grid grid-cols-4 gap-5 py-5 w-full 
               max-1045px:grid-cols-2 
               max-630px:grid-cols-1 
               max-900px:px-0               "
      >
        <Widget TotalEvent={TotalEvent} type="events" />
        <Widget TotalSpeakers={TotalSpeakers} type="speakers" />
        <Widget TotalUsers={TotalUsers} type="users" />
        <Widget TotalRevenue={TotalRevenue} type="revenue" />
      </div>

      {/* Chart and Slider Section */}
      <div className="mb-5 max-900px:px-0">
        <h4 className="text-lg font-medium text-gray-900 dark:text-gray-100">
          Event Registrations per month
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

      {/* Table Section */}
      <div className="max-900px:px-0">
        <h4 className="text-lg font-medium text-gray-900 dark:text-gray-100">
          Project History
        </h4>
        <div className="mt-1">
          <TableComponent />
        </div>
      </div>
    </div>
  );
}

export default Home;
