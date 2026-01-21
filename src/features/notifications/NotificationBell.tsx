import { useState } from "react";
import { useNotifications } from "./NotificationsProvider";

export function NotificationBell() {
  const { notifications, unreadCount, markAsRead, markAllAsRead } =
    useNotifications();

  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button onClick={() => setOpen((o) => !o)} className="relative text-xl">
        🔔
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">
            {unreadCount}
          </span>
        )}
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-2 w-80 bg-white border rounded shadow-lg z-50">
          <div className="flex justify-between items-center px-3 py-2 border-b text-sm font-semibold">
            Notifications
            {unreadCount > 0 && (
              <button onClick={markAllAsRead} className="text-xs text-blue-600">
                Mark all read
              </button>
            )}
          </div>

          <div className="max-h-64 overflow-y-auto">
            {notifications.length === 0 ? (
              <p className="p-4 text-sm text-gray-500">No notifications</p>
            ) : (
              notifications.map((n) => (
                <div
                  key={n.id}
                  onClick={() => markAsRead(n.id)}
                  className={`p-3 border-b text-sm cursor-pointer ${
                    n.read ? "bg-white" : "bg-gray-50"
                  }`}
                >
                  <p className="font-medium">{n.title}</p>
                  <p className="text-gray-600">{n.message}</p>
                  <p className="text-xs text-gray-400 mt-1">{n.createdAt}</p>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}
