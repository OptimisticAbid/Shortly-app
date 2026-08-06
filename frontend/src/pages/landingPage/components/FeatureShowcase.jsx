import { FiBarChart2, FiShield, FiZap, FiGlobe } from 'react-icons/fi'

const featureItems = [
  {
    title: 'Live analytics',
    description: 'Track clicks and monitor engagement trends in real time.',
    icon: FiBarChart2,
  },
  {
    title: 'Fast sharing',
    description: 'Create crisp links in seconds and publish them anywhere.',
    icon: FiZap,
  },
  {
    title: 'Reliable delivery',
    description: 'Built on a responsive stack that keeps your links dependable.',
    icon: FiShield,
  },
  {
    title: 'Global access',
    description: 'Designed for modern teams, creators, and marketers.',
    icon: FiGlobe,
  },
]

const FeatureShowcase = () => {
  return (
    <section id="features" className="px-6 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">Features</p>
          <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">Everything you need to manage short links with confidence</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            The experience combines a polished landing experience with a full link management workspace for everyday use.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {featureItems.map((feature) => {
            const Icon = feature.icon
            return (
              <div key={feature.title} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <div className="mb-5 inline-flex rounded-2xl bg-emerald-50 p-3 text-emerald-600">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900">{feature.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FeatureShowcase
