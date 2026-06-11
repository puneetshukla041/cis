import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ToastProvider } from "@/components/ToastProvider";
import ThemeToggle from "@/components/ThemeToggle";

export const metadata: Metadata = {
  title: "BCI Study Platform",
  description: "Rajasthan Basic Computer Instructor preparation platform.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const nav = [
    ["Tests", "/tests"],
    ["Upload", "/upload"],
    ["Syllabus", "/syllabus"],
    ["Learn", "/learn"],
    ["Dashboard", "/dashboard"],
    ["Practice", "/practice"],
  ] as const;

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <ToastProvider>
            <div className="min-h-screen">
              <header className="sticky top-0 z-50 border-b glass no-print" style={{ borderColor: "var(--border)" }}>
                <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-end gap-2 px-4 py-3">
                  <nav className="flex flex-wrap items-center gap-1 text-sm">
                    {nav.map(([label, href]) => (
                      <Link key={href} className="rounded-xl px-3 py-2 text-muted hover:bg-blue-50 hover:text-blue-700 dark:hover:bg-slate-800" href={href}>{label}</Link>
                    ))}
                    <ThemeToggle />
                  </nav>
                </div>
              </header>
              <main className="mx-auto max-w-7xl px-4 py-6">{children}</main>
            </div>
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
