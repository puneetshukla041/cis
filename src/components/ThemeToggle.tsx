"use client";
import { useTheme } from "./ThemeProvider";
export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  return <button onClick={toggle} className="rounded-xl border px-3 py-2 text-sm font-bold" style={{borderColor:'var(--border)'}}>{theme === "dark" ? "Light" : "Dark"}</button>;
}
