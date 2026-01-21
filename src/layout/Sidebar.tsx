import { NavLink } from "react-router-dom";
import { BellIcon } from "@heroicons/react/24/outline";
import { Squares2X2Icon } from "@heroicons/react/24/solid";
import { ClipboardIcon } from "@heroicons/react/24/outline";
import { BoltIcon } from "@heroicons/react/24/solid";

const linkClass = "block p-2 rounded hover:bg-blue-950 transition";

export default function sidebar({ onClose }: { onClose?: () => void }) {
  return (
    <aside className="w-64 h-screen bg-blue-950/90 text-white border-r flex flex-col">
      <div className="h-14 p-6 font-bold text-xl flex justify-between items-center border-b border-blue-950">
        <div className="flex items-center gap-2">
          <BoltIcon className="w-4 h-4 text-gray-400" />
          PulseOps
        </div>
        {onClose && (
          <button onClick={onClose} className="md:hidden text-lg ml-auto">
            ✕
          </button>
        )}
      </div>
      <nav className="px-4 py-4 space-y-2 text-sm flex-1">
        <NavLink to="/" className={linkClass} onClick={onClose}>
          <div className="flex items-center gap-2">
            <Squares2X2Icon className="w-4 h-4 text-gray-400" />
            Dashboard
          </div>
        </NavLink>
        <NavLink to="/intake" className={linkClass} onClick={onClose}>
          <div className="flex items-center gap-2">
            <ClipboardIcon className="w-4 h-4 text-gray-400" />
            Intake
          </div>
        </NavLink>
        <NavLink to="/notifications" className={linkClass} onClick={onClose}>
          <div className="flex items-center gap-2">
            <BellIcon className="w-4 h-4 text-gray-400" /> Notifications
          </div>
        </NavLink>
      </nav>
    </aside>
  );
}
