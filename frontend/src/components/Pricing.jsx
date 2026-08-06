export default function Pricing() {
  return (
    <section id="pricing" className="px-6 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">Pricing</p>
          <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">Simple plans for creators, founders, and teams</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Start free and scale as your reach grows with powerful link management built in.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
          <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900">Starter</h3>
            <div className="mt-6 flex items-end gap-2">
              <span className="text-4xl font-semibold text-slate-900">$9</span>
              <span className="pb-1 text-slate-500">/month</span>
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-600">Perfect for personal projects and everyday sharing.</p>
            <FeatureList items={['25 short links', 'Basic click analytics', 'Email support']} />
            <button className="mt-8 w-full rounded-2xl border border-slate-300 px-4 py-3 font-semibold text-slate-700 transition hover:border-emerald-400 hover:text-emerald-700">
              Get started
            </button>
          </div>

          <div className="rounded-[28px] border border-emerald-500 bg-slate-900 p-8 text-white shadow-[0_20px_60px_rgba(15,23,42,0.2)]">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">Pro</h3>
              <span className="rounded-full bg-emerald-400 px-3 py-1 text-xs font-semibold text-slate-900">Popular</span>
            </div>
            <div className="mt-6 flex items-end gap-2">
              <span className="text-4xl font-semibold">$29</span>
              <span className="pb-1 text-slate-300">/month</span>
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-300">For growing brands that need deeper visibility and more control.</p>
            <FeatureList items={['Unlimited short links', 'Advanced analytics', 'Priority support', 'Custom link workflows']} className="text-slate-200" />
            <button className="mt-8 w-full rounded-2xl bg-emerald-400 px-4 py-3 font-semibold text-slate-900 transition hover:bg-emerald-300">
              Choose Pro
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

function FeatureList({ items, className = 'text-slate-700' }) {
  return (
    <ul className="mt-6 space-y-3">
      {items.map((item, index) => (
        <li key={index} className={`flex items-start gap-3 text-sm ${className}`}>
          <svg className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
          </svg>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}
