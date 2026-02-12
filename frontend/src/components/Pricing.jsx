export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6 ">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold text-sm mb-2">Pricing</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Choose the right plan for you
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Choose an affordable plan that's packed with the best features for engaging your audience.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* Basic Plan */}
          <div className="card hover:shadow-xl transition-shadow">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Basic</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold text-gray-900">$9</span>
              <span className="text-gray-600 ml-2">/month</span>
            </div>
            <p className="text-gray-600 mb-6">
              The perfect plan if you're just getting started.
            </p>
            <FeatureList items={[
              "25 short links",
              "Basic analytics",
              "Up to 10,000 clicks/month",
              "Email support",
            ]} />
            <button className="btn-secondary w-full mt-8">
              Get started
            </button>
          </div>

          {/* Professional Plan */}
          <div className="bg-card border-4 border-blue-600 hover:shadow-xl transition-shadow bg-card">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Professional</h3>
              <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">Popular</span>
            </div>
            <div className="mb-6">
              <span className="text-4xl font-bold text-gray-900">$29</span>
              <span className="text-gray-600 ml-2">/month</span>
            </div>
            <p className="text-gray-600 mb-6">
              For growing businesses and professional teams.
            </p>
            <FeatureList items={[
              "Unlimited short links",
              "Advanced analytics",
              "Unlimited clicks/month",
              "Priority support",
              "Custom domains",
              "Team collaboration",
            ]} />
            <button className="btn-primary w-full mt-8">
              Get started
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

function FeatureList({ items }) {
  return (
    <ul className="space-y-3">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3 text-gray-700">
          <svg
            className="w-5 h-5 text-blue-600 shrink-0 mt-0.5"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
              clipRule="evenodd"
            />
          </svg>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
