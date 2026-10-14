"use client";

import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

const emptySubscribe = () => () => {};

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const isClient = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  if (!isClient) {
    return (
      <div
        className={`w-9 h-9 border border-hairline bg-surface-pure ${className}`}
        aria-hidden="true"
      />
    );
  }

  const isDark = resolvedTheme === "dark" || theme === "dark";

  return (
    <button
      type="button"
      id="theme-toggle"
      aria-label="Toggle Blueprint Theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`w-9 h-9 border border-hairline bg-surface-pure flex items-center justify-center text-charcoal hover:border-charcoal hover:bg-paper transition-colors cursor-pointer select-none ${className}`}
    >
      {/* Precision Contrast Circle (Half-Filled) */}
      <svg
        viewBox="0 0 24 24"
        className="w-4 h-4 text-charcoal fill-none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="2" />
        <path d="M12 3.5a8.5 8.5 0 0 0 0 17V3.5z" fill="currentColor" />
      </svg>
    </button>
  );
}
