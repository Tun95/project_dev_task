import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { ChartOptions } from "chart.js";
import { useTheme } from "../../../custom hooks/Hooks";

function BarChart() {
  const { theme } = useTheme();
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstanceRef = useRef<Chart | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");
      if (ctx) {
        // Colors for both themes
        const colors = {
          light: {
            grid: "#f1f5f9",
            text: "#111827",
            background: "#ffffff",
          },
          dark: {
            grid: "#374151",
            text: "#f9fafb",
            background: "#1f2937",
          },
        };

        const currentColors = colors[theme];

        // Destroy existing chart
        if (chartInstanceRef.current) {
          chartInstanceRef.current.destroy();
        }

        // Create new chart
        chartInstanceRef.current = new Chart(ctx, {
          type: "bar",
          data: {
            labels: [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ],
            datasets: [
              {
                data: [
                  300, 500, 700, 600, 800, 400, 900, 600, 750, 850, 300, 650,
                ],
                backgroundColor: "#8576ff",
                borderWidth: 1,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: { display: false },
            },
            scales: {
              x: {
                grid: {
                  color: currentColors.grid,
                  borderDash: [5, 5],
                },
                ticks: {
                  color: currentColors.text,
                },
              },
              y: {
                beginAtZero: true,
                max: 1000,
                grid: {
                  color: currentColors.grid,
                  borderDash: [5, 5],
                },
                ticks: {
                  stepSize: 200,
                  color: currentColors.text,
                },
              },
            },
            backgroundColor: currentColors.background,
          } as ChartOptions,
        });
      }
    }

    return () => {
      chartInstanceRef.current?.destroy();
    };
  }, [theme]); // Re-run effect when theme changes

  return (
    <div className="w-full h-full">
      <div className="p-5 h-full rounded-lg min-h-[360px] max-900px:p-0 max-900px:pb-4 max-900px:m-0 bg-white dark:bg-gray-800">
        <canvas ref={chartRef} />
      </div>
    </div>
  );
}

export default BarChart;
