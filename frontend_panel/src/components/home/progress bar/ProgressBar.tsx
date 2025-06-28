import { Line } from "rc-progress";
import { Square, Users, Circle } from "lucide-react";

const ProgressBar = () => {
  const projects = [
    { name: "Branding", percentage: 60, participants: 1200 },
    { name: "Website Redesign", percentage: 45, participants: 850 },
    { name: "Mobile App", percentage: 75, participants: 1500 },
    { name: "Marketing Campaign", percentage: 30, participants: 600 },
    { name: "Product Launch", percentage: 90, participants: 2000 },
  ];

  const getColor = (index: number) => {
    const colors = [
      "#10B981", // green-500
      "#8B5CF6", // purple-500
      "#2563EB", // blue-600
      "#EC4899", // pink-500
      "#F97316", // orange-500
    ];
    return colors[index % colors.length];
  };

  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-xl p-5">
      {/* Hidden SVG definitions for striped patterns */}
      <svg width="0" height="0" className="absolute">
        {projects.map((_, index) => (
          <pattern
            key={`stripedPattern-${index}`}
            id={`stripedPattern-${index}`}
            width="1"
            height="10"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(10)"
          >
            <rect width="10" height="10" fill={getColor(index)} />
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="10"
              stroke="#E5E7EB"
              strokeWidth="1"
              strokeOpacity="0.5"
            />
          </pattern>
        ))}
      </svg>

      <div className="space-y-6">
        {projects.map((project, index) => (
          <div key={index} className="space-y-2">
            <div className="flex justify-between items-center text-sm">
              <div className="flex items-center space-x-2">
                <Square
                  className="w-4 h-4"
                  style={{ color: getColor(index) }}
                />
                <span className="text-gray-700 dark:text-gray-300">
                  {project.name}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                <span className="text-gray-700 dark:text-gray-300">
                  {project.participants.toLocaleString()}
                </span>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-full flex-1 h-6 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <Line
                  percent={project.percentage}
                  strokeWidth={16}
                  strokeLinecap="butt"
                  trailWidth={16}
                  trailColor="transparent"
                  strokeColor={`url(#stripedPattern-${index})`}
                  className="h-full w-full"
                />
              </div>
              <div className="flex items-center space-x-1">
                <Circle
                  className="w-2 h-2"
                  style={{ color: getColor(index) }}
                />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {project.percentage}%
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;
