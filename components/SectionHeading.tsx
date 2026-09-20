export default function SectionHeading({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-4 mb-14">
      <span className="font-display font-semibold text-2xl tracking-tight whitespace-nowrap">
        {children}
      </span>
      <span className="flex-1 h-px bg-line" />
    </div>
  );
}
