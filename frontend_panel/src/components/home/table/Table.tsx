import { Table, Tag } from "antd";
import { useState, useEffect } from "react";
import { Download, ChevronDown, ChevronRight } from "lucide-react";
import { projectDeliverables } from "../../../data/data";
import { formatDate } from "../../../utilities/utils/Utils";
import { useTheme } from "../../../custom hooks/Hooks";
import {
  DeliveryStatus,
  ProjectDelivery,
  statusColors,
} from "../../../types/data/datatype";

const { Column } = Table;

function TableComponent() {
  const { theme } = useTheme();
  const [isMobile, setIsMobile] = useState(false);
  const [expandedRowKeys, setExpandedRowKeys] = useState<React.Key[]>([]);

  // Get only first 5 items
  const tableData = projectDeliverables.slice(0, 5);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const toggleExpand = (key: React.Key) => {
    setExpandedRowKeys((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  };

  return (
    <div className="w-full">
      {/* Table Section */}
      <div
        className={`rounded-lg overflow-hidden ${
          theme === "dark" ? "bg-gray-800" : "bg-white"
        }`}
      >
        <Table<ProjectDelivery>
          dataSource={tableData}
          className={`w-full ${theme === "dark" ? "dark-table" : ""}`}
          pagination={false}
          scroll={{ x: 320 }}
          expandable={{
            expandedRowRender: (record) => (
              <div className="px-4 py-2 bg-gray-50 bg-gray-300 dark:bg-gray-700">
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <p className="font-medium text-gray-600 dark:text-gray-300">
                      Date:
                    </p>
                    <p>{formatDate(record.date)}</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-600 dark:text-gray-300">
                      Version:
                    </p>
                    <p>{record.version}</p>
                  </div>
                  <div className="col-span-2">
                    <p className="font-medium text-gray-600 dark:text-gray-300">
                      Notes:
                    </p>
                    <p>{record.notes || "No notes available"}</p>
                  </div>
                  <div className="col-span-2">
                    <a
                      href={record.downloadLink}
                      className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:underline"
                      download
                    >
                      <Download className="w-4 h-4 mr-1" />
                      Download File
                    </a>
                  </div>
                </div>
              </div>
            ),
            rowExpandable: () => true,
            expandedRowKeys,
            onExpand: (_, record) => toggleExpand(record.key),
            expandIcon: ({ expanded, onExpand, record }) => (
              <button
                onClick={(e) => onExpand(record, e)}
                className="text-gray-500 dark:text-gray-400 focus:outline-none"
              >
                {expanded ? (
                  <ChevronDown className="w-4 h-4" />
                ) : (
                  <ChevronRight className="w-4 h-4" />
                )}
              </button>
            ),
          }}
        >
          {!isMobile ? (
            <>
              <Column
                title="Deliverable"
                dataIndex="deliverableName"
                key="deliverableName"
                render={(text, record) => (
                  <a
                    href={record.downloadLink}
                    className="hover:text-indigo-600 dark:hover:text-indigo-400"
                    download
                  >
                    {text}
                  </a>
                )}
              />
              <Column
                title="Date"
                dataIndex="date"
                key="date"
                render={(date: string) => formatDate(date)}
                className="text-sm"
              />
              <Column
                title="Status"
                dataIndex="status"
                key="status"
                render={(status: DeliveryStatus) => (
                  <Tag
                    color={statusColors[status]}
                    className="capitalize text-xs"
                  >
                    {status}
                  </Tag>
                )}
              />
              <Column
                title="Action"
                key="action"
                render={(_, record) => (
                  <a
                    href={record.downloadLink}
                    className="text-indigo-600 dark:text-indigo-400 hover:underline flex items-center"
                    download
                  >
                    <Download className="w-3 h-3 mr-1" />
                    <span>Get</span>
                  </a>
                )}
              />
            </>
          ) : (
            <Column
              title="Deliverables"
              key="mobileView"
              render={(_, record) => (
                <div className="flex justify-between items-center">
                  <div className="truncate flex-1 pr-2">
                    <a
                      href={record.downloadLink}
                      className="hover:text-indigo-600 dark:hover:text-indigo-400 truncate block"
                      download
                    >
                      {record.deliverableName}
                    </a>
                    <div className="flex items-center mt-1">
                      <Tag
                        color={statusColors[record.status as DeliveryStatus]}
                        className="capitalize text-xs mr-2"
                      >
                        {record.status}
                      </Tag>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {formatDate(record.date)}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            />
          )}
        </Table>
      </div>
    </div>
  );
}

export default TableComponent;
