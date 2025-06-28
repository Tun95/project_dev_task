import { Info, ArrowUp, ArrowDown } from "lucide-react";
import { formatNumberWithCommas } from "../../../utilities/utils/Utils";

interface WidgetProps {
  type: "events" | "speakers" | "users" | "revenue";
  TotalEvent?: number;
  TotalSpeakers?: number;
  TotalUsers?: number;
  TotalRevenue?: number;
}

const Widget: React.FC<WidgetProps> = ({
  type,
  TotalEvent = 0,
  TotalSpeakers = 0,
  TotalUsers = 0,
  TotalRevenue = 0,
}) => {
  let data:
    | {
        title: string;
        isMoney: boolean;
        percentageChange: number;
        isIncrease: boolean;
      }
    | undefined;

  // Determine the amount based on the type prop
  const dataType =
    type === "events"
      ? TotalEvent
      : type === "speakers"
      ? TotalSpeakers
      : type === "users"
      ? TotalUsers
      : type === "revenue"
      ? TotalRevenue
      : 0;

  // Switch statement to handle different widget types
  switch (type) {
    case "events":
      data = {
        title: "Total Events",
        isMoney: false,
        percentageChange: 25,
        isIncrease: true,
      };
      break;
    case "speakers":
      data = {
        title: "Active Speakers",
        isMoney: false,
        percentageChange: 15,
        isIncrease: true,
      };
      break;
    case "users":
      data = {
        title: "Total Registrations",
        isMoney: false,
        percentageChange: 30,
        isIncrease: true,
      };
      break;
    case "revenue":
      data = {
        title: "Total Revenue",
        isMoney: true,
        percentageChange: -10,
        isIncrease: false,
      };
      break;
    default:
      data = undefined;
      break;
  }

  if (!data) return null;

  return (
    <div className="flex flex-1 p-2 border border-gray-200 dark:border-gray-700 rounded-md h-full bg-white dark:bg-gray-800">
      <div className="flex flex-col justify-between w-full">
        <div className="flex items-center gap-1 mb-3 whitespace-nowrap">
          <span className="font-bold text-gray-600 dark:text-gray-300 text-sm whitespace-nowrap">
            {data.title}
          </span>
          <span className="text-gray-600 dark:text-gray-300">
            <Info size={16} className="mt-0.5" />
          </span>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-2xl font-light dark:text-white">
            {data.isMoney
              ? `$${dataType.toLocaleString()}`
              : formatNumberWithCommas(dataType)}
          </span>
          <span className="flex items-center gap-1 text-xs">
            <div
              className={`flex items-center gap-1 ${
                data.isIncrease ? "text-green-500" : "text-red-500"
              }`}
            >
              {data.isIncrease ? (
                <ArrowUp size={12} />
              ) : (
                <ArrowDown size={12} />
              )}
              {data.isIncrease ? "+" : "-"}
              {Math.abs(data.percentageChange)?.toFixed(1)}%
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Widget;
