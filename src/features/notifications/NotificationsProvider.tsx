import { createContext, useEffect, useContext, useState } from "react";
import type { Notification } from "./types";

type NotificationsContextType = {
  notifications: Notification[];
  unreadCount: number;
  addNotification: (title: string, message: string) => void;
  markAsRead: (id: string) => void;
  markAllAsRead: () => void;
};

const NotificationsContext = createContext<NotificationsContextType | null>(
  null
);

export function NotificationsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  // Simulate live notifications
  useEffect(() => {
    const interval = setInterval(() => {
      setNotifications((prev) => [
        {
          id: crypto.randomUUID(),
          title: "New Activity",
          message: "A new intake was submitted",
          read: false,
          createdAt: new Date().toLocaleString(),
        },
        ...prev,
      ]);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const addNotification = (title: string, message: string) => {
    setNotifications((prev) => [
      {
        id: crypto.randomUUID(),
        title,
        message,
        read: false,
        createdAt: new Date().toLocaleString(),
      },
      ...prev,
    ]);
  };

  const markAsRead = (id: string) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };
  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <NotificationsContext.Provider
      value={{
        notifications,
        unreadCount,
        addNotification,
        markAsRead,
        markAllAsRead,
      }}
    >
      {children}
    </NotificationsContext.Provider>
  );
}

export function useNotifications() {
  const ctx = useContext(NotificationsContext);
  if (!ctx)
    throw new Error(
      "useNotifications must be used within NotificationsProvider"
    );
  return ctx;
}
