// types/data/datatype.ts
export const DELIVERY_STATUS = {
  PENDING_FEEDBACK: "Pending Feedback",
  FEEDBACK_RECEIVED: "Feedback Received",
  APPROVED: "Approved",
  REVISED: "Revised",
} as const;

export type DeliveryStatus =
  (typeof DELIVERY_STATUS)[keyof typeof DELIVERY_STATUS];

export const statusColors: Record<DeliveryStatus, string> = {
  [DELIVERY_STATUS.PENDING_FEEDBACK]: "orange",
  [DELIVERY_STATUS.FEEDBACK_RECEIVED]: "blue",
  [DELIVERY_STATUS.APPROVED]: "green",
  [DELIVERY_STATUS.REVISED]: "purple",
};

export interface ProjectDelivery {
  key: string;
  deliverableName: string;
  date: string;
  downloadLink: string;
  status: DeliveryStatus;
  notes?: string;
  version: string;
}
