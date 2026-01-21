import type { IntakeDTO, NotificationDTO, MetricsDTO } from "../contracts";

export function adaptMetrics(
  intakes: IntakeDTO[],
  notifications: NotificationDTO[]
): MetricsDTO {
  return {
    totalIntakes: intakes.length,
    newIntakesToday: intakes.length > 0 ? 1 : 0,
    unreadCount: notifications.filter((n) => !n.read).length,
    lastActivity: notifications[0]?.createdAt ?? "No recent activity",
  };
}
