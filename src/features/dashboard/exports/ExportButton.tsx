type ExportButtonProps = {
  onClick: () => void;
  label: string;
};

export function ExportButton({ onClick, label }: ExportButtonProps) {
  return (
    <button
      onClick={onClick}
      className="text-xs px-3 py-1 rounded-md border border-gray-300 hover:bg-gray-50"
    >
      ⬇ {label}
    </button>
  );
}
