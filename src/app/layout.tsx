export const dynamic = "force-dynamic";
export const revalidate = 0;
import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ToastProvider } from "@/components/ToastProvider";
import ThemeToggle from "@/components/ThemeToggle";

export const metadata: Metadata = {
  title: "BCI Paper 1 Learning",
  description: "Rajasthan Basic Computer Instructor Paper 1 learning, notes and MCQ practice.",
};

const nav = [
  ["Tests", "/tests"],
  ["Learn", "/learn"],
  ["Syllabus", "/syllabus"],
  ["Coverage", "/coverage"],
  ["50 Days", "/plan"],
  ["Practice", "/practice"],
  ["Targets", "/targets"],
  ["Dashboard", "/dashboard"],
  ["Upload", "/upload"],
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <ToastProvider>
            <div className="min-h-screen">
              <header className="sticky top-0 z-50 border-b glass no-print" style={{ borderColor: "var(--border)" }}>
                <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
                  <Link href="/" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border text-sm font-semibold tracking-tight hover-lift" style={{ borderColor: "var(--border)", background: "var(--panel-2)" }}>
                    BCI
                  </Link>
                  <nav className="flex min-w-0 flex-1 justify-end overflow-x-auto">
                    <div className="flex items-center gap-1 rounded-2xl border p-1" style={{ borderColor: "var(--border)", background: "var(--panel-2)" }}>
                      {nav.map(([label, href]) => (
                        <Link key={href} className="whitespace-nowrap rounded-xl px-3 py-2 text-sm font-medium text-muted hover:bg-[var(--panel)] hover:text-[var(--text)]" href={href}>
                          {label}
                        </Link>
                      ))}
                      <ThemeToggle />
                    </div>
                  </nav>
                </div>
              </header>
              <main className="mx-auto max-w-7xl px-4 py-7 md:py-9">{children}</main>
            </div>
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
