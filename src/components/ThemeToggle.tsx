"use client";
import { useTheme } from "./ThemeProvider";
export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  return <button onClick={toggle} className="whitespace-nowrap rounded-xl px-3 py-2 text-sm font-medium text-muted hover:bg-[var(--panel)] hover:text-[var(--text)]">{theme === "dark" ? "Light" : "Dark"}</button>;
}
