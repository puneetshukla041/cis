export const dynamic = "force-dynamic";

import Link from "next/link";
import TestCard from "@/components/TestCard";
import TestFilters from "@/components/TestFilters";
import { getTestsData } from "@/lib/serverData";

export default async function TestsPage({ searchParams }: { searchParams: Promise<Record<string,string>> }) {
  const sp = await searchParams;
  const data = await getTestsData(sp);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-medium">All Uploaded Tests</h1>
          <p className="mt-2 text-muted">Search and filters are real-time. Open any test, start learning mode, review, replace or delete.</p>
          <p className="mt-1 text-sm font-medium text-blue-600">Showing {data.tests?.length || 0} of {data.total || 0} test(s)</p>
        </div>
        <Link href="/upload" className="rounded-2xl bg-blue-600 px-5 py-3 font-medium text-white">Upload New Test</Link>
      </div>

      <TestFilters filters={data.filters} />

      {data.tests?.length ? (
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {data.tests.map((test: any) => <TestCard key={test._id} test={JSON.parse(JSON.stringify(test))} />)}
        </div>
      ) : (
        <div className="card p-10 text-center">
          <h2 className="text-xl font-medium">No tests found</h2>
          <p className="mt-2 text-muted">Reset filters or upload your first JSON test.</p>
          <Link href="/upload" className="mt-5 inline-block rounded-xl bg-blue-600 px-5 py-3 font-medium text-white">Upload Test</Link>
        </div>
      )}
    </div>
  );
}
