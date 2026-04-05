export function TagPill({ label }: { label: string }) {
  return (
    <span className="inline-block rounded-tag bg-tag-bg px-2.5 py-1 font-mono text-xs text-tag-fg">
      {label}
    </span>
  );
}
