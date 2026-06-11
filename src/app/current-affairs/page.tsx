export const dynamic = "force-dynamic";
import { getCurrentAffairsStatus } from "@/lib/currentAffairs";

export default function CurrentAffairsPage() {
  const status = getCurrentAffairsStatus();
  return (
    <div className="space-y-6 animate-in">
      <section className="hero-card p-6 md:p-8">
        <p className="eyebrow">Rajasthan current affairs updater</p>
        <h1 className="mt-3 text-2xl font-semibold tracking-tight">Monthly update status: {status.updateNeeded ? "Update needed" : "Ready"}</h1>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-muted">Last updated: {status.lastUpdated}. {status.nextAction}</p>
      </section>
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {status.categories.map((cat) => (
          <div key={cat.name} className="card p-5">
            <div className="flex items-center justify-between gap-3"><p className="font-medium">{cat.name}</p>{cat.required ? <span className="pill">Required</span> : null}</div>
            <ul className="mt-4 space-y-2 text-sm text-muted">{cat.items.map((item) => <li key={item}>• {item}</li>)}</ul>
          </div>
        ))}
      </section>
      <section className="card p-5"><p className="font-medium">Monthly rule</p><p className="mt-2 text-sm leading-7 text-muted">Before using Current Affairs in a mock, update scheme-date-department, appointments, budget, awards, sports, places in news and digital governance/AI/cyber items for the latest month. Static modules remain unchanged; current affairs must be versioned.</p></section>
    </div>
  );
}
