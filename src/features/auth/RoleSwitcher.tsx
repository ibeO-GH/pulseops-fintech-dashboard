import { useRole } from "./RoleProvider";

export function RoleSwitcher() {
  const { role, setRole } = useRole();

  return (
    <div className="flex gap-2 text-xs mb-4">
      {["admin", "operator", "viewer"].map((r) => (
        <button
          key={r}
          onClick={() => setRole(r as any)}
          className={`px-3 py-1 rounded ${
            role === r ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
        >
          {r}
        </button>
      ))}
    </div>
  );
}
