import { Table, Tag } from "antd";
import { useState, useEffect } from "react";
import { Circle, ChevronRight, ChevronDown } from "lucide-react";
import { DataType } from "../../../types/data/datatype";
import { data } from "../../../data/data";
import { formatDate } from "../../../utilities/utils/Utils";
import { useTheme } from "../../../custom hooks/Hooks";

const { Column } = Table;

function TableComponent() {
  const { theme } = useTheme();
  const [isMobileView, setIsMobileView] = useState(false);
  const [expandedRowKeys, setExpandedRowKeys] = useState<React.Key[]>([]);

  // Get only first 5 rows of data
  const tableData = data.slice(0, 5);

  useEffect(() => {
    const handleResize = () => setIsMobileView(window.innerWidth <= 620);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleExpand = (key: React.Key) => {
    setExpandedRowKeys((prevKeys) =>
      prevKeys.includes(key)
        ? prevKeys.filter((k) => k !== key)
        : [...prevKeys, key]
    );
  };

  return (
    <div className="w-full">
      {/* Table Section - Using theme from useTheme */}
      <div
        className={`rounded-lg overflow-hidden ${
          theme === "dark" ? "bg-gray-800" : "bg-white"
        }`}
      >
        <Table<DataType>
          dataSource={tableData}
          className={`w-full ${theme === "dark" ? "dark-table" : ""}`}
          pagination={false} // Disable pagination
          expandable={
            isMobileView
              ? {
                  expandedRowRender: (record) => (
                    <div className="px-4 py-2 bg-gray-50 dark:bg-gray-700">
                      <div className="flex justify-between">
                        <p className="text-gray-600 dark:text-gray-300">
                          {record.speakers[0]}
                        </p>
                        <p className="text-gray-600 dark:text-gray-300">
                          {formatDate(record.date)}
                        </p>
                      </div>
                    </div>
                  ),
                  rowExpandable: () => true,
                  expandedRowKeys,
                  onExpand: (_, record) => toggleExpand(record.key),
                  expandIcon: ({ onExpand, record }) => (
                    <button
                      onClick={(e) => onExpand(record, e)}
                      className="text-gray-500 dark:text-gray-400"
                    >
                      {expandedRowKeys.includes(record.key) ? (
                        <ChevronDown className="w-4 h-4" />
                      ) : (
                        <ChevronRight className="w-4 h-4" />
                      )}
                    </button>
                  ),
                }
              : undefined
          }
        >
          <Column
            title="Event Name"
            dataIndex="eventName"
            key="eventName"
            render={(text) => (
              <span className="cursor-pointer hover:text-indigo-600 dark:hover:text-indigo-400">
                {text}
              </span>
            )}
          />
          {!isMobileView && (
            <>
              <Column
                title="Date"
                dataIndex="date"
                key="date"
                render={(date: string) => formatDate(date)}
              />
              <Column
                title="Speakers"
                dataIndex="speakers"
                key="speakers"
                render={(speakers: string[]) => speakers[0]}
              />
            </>
          )}
          <Column
            title="Status"
            dataIndex="status"
            key="status"
            render={(status: string) => (
              <Tag className="border-none bg-transparent">
                <span
                  className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs ${
                    status === "Completed"
                      ? "text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20"
                      : "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20"
                  }`}
                >
                  <Circle className="w-2 h-2 fill-current" />
                  <span>{status}</span>
                </span>
              </Tag>
            )}
          />
        </Table>
      </div>
    </div>
  );
}

export default TableComponent;
