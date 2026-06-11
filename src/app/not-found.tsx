import Link from "next/link";
export default function NotFound() {
  return <div className="card p-10 text-center"><h1 className="text-3xl font-black">Page not found</h1><p className="mt-2 text-muted">The page you opened does not exist.</p><Link href="/" className="mt-5 inline-block rounded-xl bg-blue-600 px-5 py-3 font-black text-white">Go Home</Link></div>;
}
