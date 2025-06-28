import { ProjectDelivery } from "../types/data/datatype";
import s1 from "../assets/s1.png";

export const widgetData = {
  deliverables: {
    title: "Total Deliverables",
    isMoney: false,
    percentageChange: 12,
    isIncrease: true,
    iconColor: "text-blue-500",
  },
  pending: {
    title: "Pending Review",
    isMoney: false,
    percentageChange: -5,
    isIncrease: false,
    iconColor: "text-orange-500",
  },
  approved: {
    title: "Approved Items",
    isMoney: false,
    percentageChange: 18,
    isIncrease: true,
    iconColor: "text-green-500",
  },
  revised: {
    title: "Revised Items",
    isMoney: false,
    percentageChange: 3,
    isIncrease: true,
    iconColor: "text-purple-500",
  },
};

export const projectDeliverables: ProjectDelivery[] = [
  {
    key: "1",
    deliverableName: "Initial Design Mockups",
    date: "2025-06-01",
    downloadLink: "/downloads/mockups-v1.zip",
    status: "Approved",
    notes: "Client approved with minor color adjustments",
    version: "1.0",
  },
  {
    key: "2",
    deliverableName: "Revised Design Mockups",
    date: "2025-06-10",
    downloadLink: "/downloads/mockups-v2.zip",
    status: "Feedback Received",
    notes: "Waiting for your final approval on revised colors",
    version: "1.1",
  },
  {
    key: "3",
    deliverableName: "API Documentation",
    date: "2025-06-15",
    downloadLink: "/downloads/api-docs.pdf",
    status: "Pending Feedback",
    notes: "Sent for technical review",
    version: "1.0",
  },
  {
    key: "4",
    deliverableName: "Beta Release",
    date: "2025-06-20",
    downloadLink: "/downloads/beta-release.zip",
    status: "Revised",
    notes: "Client requested additional features",
    version: "0.9",
  },
  {
    key: "5",
    deliverableName: "User Manual",
    date: "2025-06-25",
    downloadLink: "/downloads/user-manual.pdf",
    status: "Pending Feedback",
    notes: "Waiting for your review",
    version: "1.0",
  },
  {
    key: "6",
    deliverableName: "Final Product Release",
    date: "2025-07-05",
    downloadLink: "/downloads/final-release.zip",
    status: "Approved",
    notes: "Client signed off on final delivery",
    version: "2.0",
  },
  {
    key: "7",
    deliverableName: "Technical Specifications",
    date: "2025-07-10",
    downloadLink: "/downloads/tech-specs.pdf",
    status: "Feedback Received",
    notes: "Engineering team reviewing proposed changes",
    version: "1.2",
  },
  {
    key: "8",
    deliverableName: "Marketing Assets",
    date: "2025-07-15",
    downloadLink: "/downloads/marketing-pack.zip",
    status: "Pending Feedback",
    notes: "Awaiting brand team approval",
    version: "1.0",
  },
  {
    key: "9",
    deliverableName: "Training Materials",
    date: "2025-07-20",
    downloadLink: "/downloads/training-materials.zip",
    status: "Revised",
    notes: "Client requested additional use cases",
    version: "1.3",
  },
  {
    key: "10",
    deliverableName: "Security Audit Report",
    date: "2025-07-25",
    downloadLink: "/downloads/security-audit.pdf",
    status: "Approved",
    notes: "All vulnerabilities addressed",
    version: "Final",
  },
  {
    key: "11",
    deliverableName: "Performance Benchmark",
    date: "2025-08-01",
    downloadLink: "/downloads/benchmark-results.xlsx",
    status: "Pending Feedback",
    notes: "Sent to client for verification",
    version: "1.0",
  },
  {
    key: "12",
    deliverableName: "Project Retrospective",
    date: "2025-08-10",
    downloadLink: "/downloads/retrospective.pdf",
    status: "Feedback Received",
    notes: "Incorporating team feedback before finalizing",
    version: "Draft",
  },
];

export const sliderData = [
  {
    img: s1,
    title: "Latest News & Updates",
    description:
      "Turpis interdum nunc varius ornare dignissim pretium. Massa ornare quis aliquet sed vitae. Sed velit nisi, fermentum erat. Fringilla purus, erat fringilla tincidunt quisque non. Pellentesque in ut tellus.",
  },
  {
    img: s1,
    title: "Latest News & Updates",
    description:
      "Turpis interdum nunc varius ornare dignissim pretium. Massa ornare quis aliquet sed vitae. Sed velit nisi, fermentum erat. Fringilla purus, erat fringilla tincidunt quisque non. Pellentesque in ut tellus.",
  },
  {
    img: s1,
    title: "Latest News & Updates",
    description:
      "Turpis interdum nunc varius ornare dignissim pretium. Massa ornare quis aliquet sed vitae. Sed velit nisi, fermentum erat. Fringilla purus, erat fringilla tincidunt quisque non. Pellentesque in ut tellus.",
  },
];
