import { NotificationBell } from "../features/notifications/NotificationBell";

export default function Header({ onMenuClick }: { onMenuClick?: () => void }) {
  return (
    <header className="h-14 bg-white border-b flex items-center justify-between px-4">
      <div className="flex items-center gap-4">
        <button onClick={onMenuClick} className="md:hidden text-xl">
          ☰
        </button>
        <h1 className="font-semibold text-sm text-gray-700">Admin Console</h1>
      </div>
      <NotificationBell />
    </header>
  );
}
