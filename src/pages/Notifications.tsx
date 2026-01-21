import { useNotifications } from "../features/notifications/NotificationsProvider";

export default function Notifications() {
  const { notifications, markAsRead, markAllAsRead } = useNotifications();

  return (
    <div className="max-w-xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Notifications</h2>

        <button
          onClick={markAllAsRead}
          className="text-sm text-blue-600 hover:underline"
        >
          Mark all as read
        </button>
      </div>

      <ul className="space-y-3">
        {notifications.map((n) => (
          <li
            key={n.id}
            onClick={() => markAsRead(n.id)}
            className={`p-3 rounded border cursor-pointer ${
              n.read ? "bg-white" : "bg-blue-50"
            }`}
          >
            <div className="font-medium text-sm">{n.title}</div>
            <div className="text-sm text-gray-600">{n.message}</div>
            <div className="text-xs text-gray-400 mt-1">{n.createdAt}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
