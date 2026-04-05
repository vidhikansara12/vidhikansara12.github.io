export function TagPill({ label }: { label: string }) {
  return (
    <span className="inline-block rounded-tag bg-tag-bg px-3 py-1 font-mono text-[11px] font-medium text-tag-fg transition-colors duration-hover hover:bg-accent-soft">
      {label}
    </span>
  );
}
