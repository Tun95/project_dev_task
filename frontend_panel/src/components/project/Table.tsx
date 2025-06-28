import { Table, Tag, Button } from "antd";
import { useState, useEffect } from "react";
import type { TablePaginationConfig } from "antd/es/table";
import {
  Circle,
  ChevronRight,
  ChevronDown,
  Search,
  Download,
  ChevronLeft,
  RefreshCw,
} from "lucide-react";
import { DataType } from "../../types/data/datatype";
import { data } from "../../data/data";
import { useTheme } from "../../custom hooks/Hooks";
import { formatDate } from "../../utilities/utils/Utils";

const { Column } = Table;

function TableComponent() {
  const { theme } = useTheme();

  const [pagination, setPagination] = useState<TablePaginationConfig>({
    current: 1,
    pageSize: 10,
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [dateFilter, setDateFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [speakerFilter, setSpeakerFilter] = useState("");
  const [filteredData, setFilteredData] = useState<DataType[]>(data);
  const [isMobileView, setIsMobileView] = useState(false);
  const [expandedRowKeys, setExpandedRowKeys] = useState<React.Key[]>([]);
  const [exportLoading, setExportLoading] = useState(false);
  const [refreshLoading, setRefreshLoading] = useState(false); // Added refresh loading state

  // Clear all filters with loading state
  const handleRefresh = () => {
    setRefreshLoading(true);

    // Simulate processing delay
    setTimeout(() => {
      setSearchTerm("");
      setDateFilter("");
      setStatusFilter("");
      setSpeakerFilter("");
      setPagination({ ...pagination, current: 1 });
      setRefreshLoading(false);
    }, 800); // Slightly shorter delay for refresh
  };

  useEffect(() => {
    const tempFilteredData = data.filter((item) => {
      const matchesSearch = item.eventName
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesDate = dateFilter ? item.date === dateFilter : true;
      const matchesStatus = statusFilter ? item.status === statusFilter : true;
      const matchesSpeaker = speakerFilter
        ? item.speakers.includes(speakerFilter)
        : true;
      return matchesSearch && matchesDate && matchesStatus && matchesSpeaker;
    });
    setFilteredData(tempFilteredData);
  }, [searchTerm, dateFilter, statusFilter, speakerFilter]);

  const handleSortChange = (value: string) => {
    const sortedData = [...filteredData];
    switch (value) {
      case "recent":
        sortedData.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );
        break;
      case "name-asc":
        sortedData.sort((a, b) => a.eventName.localeCompare(b.eventName));
        break;
      case "name-desc":
        sortedData.sort((a, b) => b.eventName.localeCompare(a.eventName));
        break;
      case "status":
        sortedData.sort((a, b) => {
          const statusOrder: { [key: string]: number } = {
            Completed: 1,
            "In Progress": 2,
          };
          return (
            (statusOrder[a.status as keyof typeof statusOrder] || 3) -
            (statusOrder[b.status as keyof typeof statusOrder] || 3)
          );
        });
        break;
      default:
        break;
    }
    setPagination({ ...pagination, current: 1 });
    setFilteredData(sortedData);
  };

  useEffect(() => {
    const handleResize = () => setIsMobileView(window.innerWidth <= 620);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleTableChange = (newPagination: TablePaginationConfig) => {
    setPagination(newPagination);
  };

  const toggleExpand = (key: React.Key) => {
    setExpandedRowKeys((prevKeys) =>
      prevKeys.includes(key)
        ? prevKeys.filter((k) => k !== key)
        : [...prevKeys, key]
    );
  };

  const handleExportCSV = () => {
    setExportLoading(true);

    // Simulate processing delay
    setTimeout(() => {
      try {
        const csvData = filteredData.map((item) => ({
          EventName: item.eventName,
          Date: item.date,
          Status: item.status,
          Speakers: item.speakers.join(", "),
        }));

        const csvRows = [
          Object.keys(csvData[0]).join(","),
          ...csvData.map((row) => Object.values(row).join(",")),
        ];

        const csvString = csvRows.join("\n");
        const blob = new Blob([csvString], { type: "text/csv" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "exported_data.csv";
        a.click();
        URL.revokeObjectURL(url);
      } catch (error) {
        console.error("Export failed:", error);
      } finally {
        setExportLoading(false);
      }
    }, 1000);
  };

  return (
    <div className="w-full">
      <h2 className="mb-2 text-lg font-medium bold text-gray-900 dark:text-gray-100">
        Project History
      </h2>
      {/* Filters Section */}
      <div className="flex flex-col md:flex-row flex-wrap justify-between items-start md:items-center gap-4 mb-3 dark:text-gray-200">
        {/* Left filters */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-3 w-full md:w-auto">
          {/* Search Box */}
          <div className="relative flex-1 min-w-[200px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-gray-500" />
            <input
              type="search"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 h-9 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 outline-none text-sm"
            />
          </div>

          {/* Filters */}
          <select
            value={dateFilter}
            onChange={(e) => setDateFilter(e.target.value)}
            className="px-3 h-9 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 outline-none text-sm"
          >
            <option value="">Date</option>
            {[...new Set(data.map((item) => item.date))].map((date, index) => (
              <option value={date} key={index}>
                {date}
              </option>
            ))}
          </select>

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-3 h-9 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 outline-none text-sm"
          >
            <option value="">Status</option>
            <option value="Completed">Completed</option>
            <option value="In Progress">In Progress</option>
          </select>

          <select
            value={speakerFilter}
            onChange={(e) => setSpeakerFilter(e.target.value)}
            className="px-3 h-9 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 outline-none text-sm"
          >
            <option value="">Name</option>
            {[...new Set(data.flatMap((item) => item.speakers))].map(
              (speaker, index) => (
                <option value={speaker} key={index}>
                  {speaker}
                </option>
              )
            )}
          </select>

          <div className="flex items-center text-sm">
            <span>Displaying </span>
            <span className="font-semibold mx-1">{filteredData.length}</span>
            <span>results</span>
          </div>
        </div>

        {/* Right actions */}
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          {/* Sort */}
          <div className="flex items-center gap-2">
            <label className="text-sm">Sort:</label>
            <select
              onChange={(e) => handleSortChange(e.target.value)}
              className="px-3 h-9 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 outline-none text-sm"
            >
              <option value="recent">Most Recent</option>
              <option value="name-asc">Name A-Z</option>
              <option value="name-desc">Name Z-A</option>
              <option value="status">Status (Completed first)</option>
            </select>
          </div>

          {/* Actions */}
          <div className="flex gap-2">
            <Button
              onClick={handleRefresh}
              loading={refreshLoading}
              icon={<RefreshCw className="w-4 h-4 relative top-0.5" />}
              className="p-2 rounded-md border l_flex border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700"
              title="Refresh filters"
            />
            <Button
              onClick={handleExportCSV}
              loading={exportLoading}
              icon={<Download className="w-4 h-4" />}
              className="flex items-center gap-2 px-3 h-9 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              Export All
            </Button>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div
        className={`rounded-lg overflow-hidden ${
          theme === "dark" ? "bg-gray-800" : "bg-white"
        }`}
      >
        <Table<DataType>
          dataSource={filteredData}
          className={`w-full ${theme === "dark" ? "dark-table" : ""}`}
          pagination={{
            ...pagination,
            showSizeChanger: true,
            pageSizeOptions: ["10", "20"],
            position: ["bottomLeft"],
            itemRender: (_, type, originalElement) => {
              if (type === "prev") {
                return (
                  <button
                    className={`flex items-center justify-center p-2 rounded-md ${
                      theme === "dark"
                        ? "text-gray-300 hover:bg-gray-700 border-gray-600"
                        : "text-gray-700 hover:bg-gray-100 border-gray-300"
                    } border`}
                    disabled={pagination.current === 1}
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                );
              }
              if (type === "next") {
                return (
                  <button
                    className={`flex items-center justify-center p-2 rounded-md ${
                      theme === "dark"
                        ? "text-gray-300 hover:bg-gray-700 border-gray-600"
                        : "text-gray-700 hover:bg-gray-100 border-gray-300"
                    } border`}
                    disabled={
                      pagination.current ===
                      Math.ceil(
                        filteredData.length / (pagination.pageSize || 10)
                      )
                    }
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                );
              }
              if (type === "page") {
                return (
                  <button
                    className={`w-8 h-8 rounded-full mx-1 flex items-center justify-center ${
                      theme === "dark"
                        ? pagination.current === originalElement
                          ? "bg-indigo-600 text-white"
                          : "text-gray-300 hover:bg-gray-700"
                        : pagination.current === originalElement
                        ? "bg-indigo-600 text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {originalElement}
                  </button>
                );
              }
              return originalElement;
            },
          }}
          onChange={handleTableChange}
          loading={exportLoading || refreshLoading} // Show loading for both operations
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
