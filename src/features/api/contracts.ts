export type IntakeDTO = {
  id: string;
  createdAt: string;
  status: "new" | "processing" | "closed";
};

export type NotificationDTO = {
  id: string;
  message: string;
  createdAt: string;
  read: boolean;
};

export type MetricsDTO = {
  totalIntakes: number;
  newIntakesToday: number;
  unreadCount: number;
  lastActivity: string;
};
