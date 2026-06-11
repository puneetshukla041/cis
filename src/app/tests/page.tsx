export const dynamic = "force-dynamic";

import Link from "next/link";
import TestCard from "@/components/TestCard";
import TestFilters from "@/components/TestFilters";
import { getTestsData } from "@/lib/serverData";

export default async function TestsPage({ searchParams }: { searchParams: Promise<Record<string, string>> }) {
  const sp = await searchParams;
  const data = await getTestsData(sp);

  return (
    <div className="space-y-6 animate-in">
      <section className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="eyebrow">Tests</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight">Question papers and practice sets</h1>
          <p className="mt-2 text-sm text-muted">Showing {data.tests?.length || 0} of {data.total || 0} tests.</p>
        </div>
        <Link href="/upload" className="btn-primary">Upload</Link>
      </section>

      <TestFilters filters={data.filters} />

      {data.tests?.length ? (
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {data.tests.map((test: any) => <TestCard key={test._id} test={JSON.parse(JSON.stringify(test))} />)}
        </div>
      ) : (
        <div className="card p-8 text-center">
          <p className="text-muted">No tests found. Reset filters to show every available test.</p>
          <Link href="/upload" className="btn-primary mt-5 inline-flex">Upload test</Link>
        </div>
      )}
    </div>
  );
}
