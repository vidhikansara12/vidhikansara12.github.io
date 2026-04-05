"use client";

import { useEffect, useState } from "react";

const lines = [
  "$ python evaluate.py",
  "> Loading 6,284 samples...",
  "> Running 5-fold CV...",
  "> R\u00B2 = 0.9512 \u2713",
  "> Drift detected: False \u2713",
  "> Pipeline ready in 2.3s",
];

export function TerminalCard() {
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (visibleLines < lines.length) {
      const timeout = setTimeout(
        () => setVisibleLines((v) => v + 1),
        visibleLines === 0 ? 400 : 600
      );
      return () => clearTimeout(timeout);
    }

    const restart = setTimeout(() => setVisibleLines(0), 8000);
    return () => clearTimeout(restart);
  }, [visibleLines]);

  useEffect(() => {
    const interval = setInterval(() => setShowCursor((c) => !c), 530);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full overflow-hidden rounded-card border border-border/60 bg-card p-card-pad shadow-glass">
      {/* Window dots */}
      <div className="mb-5 flex gap-2">
        <span className="h-3 w-3 rounded-full bg-[#FF5F57] shadow-[inset_0_-1px_2px_rgba(0,0,0,0.1)]" />
        <span className="h-3 w-3 rounded-full bg-[#FEBC2E] shadow-[inset_0_-1px_2px_rgba(0,0,0,0.1)]" />
        <span className="h-3 w-3 rounded-full bg-[#28C840] shadow-[inset_0_-1px_2px_rgba(0,0,0,0.1)]" />
      </div>

      <pre className="font-mono text-[13px] leading-relaxed text-foreground/80">
        {lines.slice(0, visibleLines).map((line, i) => (
          <div
            key={i}
            className={line.startsWith("$") ? "text-foreground font-medium" : ""}
          >
            {line}
          </div>
        ))}
        {visibleLines < lines.length && (
          <span
            className={`inline-block h-[18px] w-[9px] rounded-sm bg-accent transition-opacity duration-100 ${showCursor ? "opacity-80" : "opacity-0"}`}
          />
        )}
        {visibleLines === lines.length && (
          <span className="text-foreground font-medium">
            ${" "}
            <span
              className={`inline-block h-[18px] w-[9px] rounded-sm bg-accent transition-opacity duration-100 ${showCursor ? "opacity-80" : "opacity-0"}`}
            />
          </span>
        )}
      </pre>
    </div>
  );
}
