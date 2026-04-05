"use client";

import { useEffect, useState } from "react";

const lines = [
  "$ python evaluate.py",
  "> Loading 6,284 samples...",
  "> Running 5-fold CV...",
  "> R² = 0.9512 ✓",
  "> Drift detected: False ✓",
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

    // After all lines shown, wait 8s then restart
    const restart = setTimeout(() => setVisibleLines(0), 8000);
    return () => clearTimeout(restart);
  }, [visibleLines]);

  // Blinking cursor
  useEffect(() => {
    const interval = setInterval(() => setShowCursor((c) => !c), 530);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full rounded-card bg-card p-card-pad shadow-card">
      {/* Window dots */}
      <div className="mb-4 flex gap-2">
        <span className="h-3 w-3 rounded-full bg-[#FF5F56]" />
        <span className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
        <span className="h-3 w-3 rounded-full bg-[#27C93F]" />
      </div>

      <pre className="font-mono text-sm leading-relaxed text-foreground">
        {lines.slice(0, visibleLines).map((line, i) => (
          <div key={i}>{line}</div>
        ))}
        {visibleLines < lines.length && (
          <span
            className={`inline-block h-4 w-2 bg-foreground ${showCursor ? "opacity-100" : "opacity-0"}`}
          />
        )}
        {visibleLines === lines.length && (
          <span>
            ${" "}
            <span
              className={`inline-block h-4 w-2 bg-foreground ${showCursor ? "opacity-100" : "opacity-0"}`}
            />
          </span>
        )}
      </pre>
    </div>
  );
}
