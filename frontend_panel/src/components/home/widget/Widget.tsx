import { Info, ArrowUp, ArrowDown } from "lucide-react";
import { formatNumberWithCommas } from "../../../utilities/utils/Utils";
import { widgetData } from "../../../data/data";

interface WidgetProps {
  type: "deliverables" | "pending" | "approved" | "revised";
  count: number;
}

const Widget: React.FC<WidgetProps> = ({ type, count = 0 }) => {
  const data = widgetData[type];

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
            {formatNumberWithCommas(count)}
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
