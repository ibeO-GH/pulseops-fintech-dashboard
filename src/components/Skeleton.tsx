type Props = {
  className?: string;
};

export function Skeleton({ className = "" }: Props) {
  return (
    <div className={`animate-pulse bg-gray-200/70 rounded ${className}`} />
  );
}
