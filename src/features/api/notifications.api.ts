type Notification = {
  id: string;
  message: string;
  createdAt: string;
  read: boolean;
};

let notifications: Notification[] = [];

export const notificationsApi = {
  async list(): Promise<Notification[]> {
    await new Promise((r) => setTimeout(r, 400));
    return notifications;
  },

  async push(message: string): Promise<void> {
    await new Promise((r) => setTimeout(r, 200));
    notifications.unshift({
      id: crypto.randomUUID(),
      message,
      createdAt: new Date().toLocaleTimeString(),
      read: false,
    });
  },

  async markAllRead(): Promise<void> {
    notifications = notifications.map((n) => ({ ...n, read: true }));
  },
};
