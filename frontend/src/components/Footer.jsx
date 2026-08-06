const Footer = () => {
  return (
    <footer id="contact" className="bg-slate-950 px-6 py-16 text-slate-300 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-10 rounded-[28px] border border-slate-800 bg-slate-900/70 p-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">Shortly</p>
            <h3 className="mt-3 text-2xl font-semibold text-white">Start building trust with every shared link.</h3>
            <p className="mt-3 text-sm leading-7 text-slate-400">
              Create polished links, track engagement, and keep your shared content effortless for your audience.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 text-sm">
            <a href="#features" className="rounded-full border border-slate-700 px-4 py-2 transition hover:border-emerald-400 hover:text-white">Features</a>
            <a href="#pricing" className="rounded-full border border-slate-700 px-4 py-2 transition hover:border-emerald-400 hover:text-white">Pricing</a>
            <a href="mailto:hello@shortly.app" className="rounded-full border border-slate-700 px-4 py-2 transition hover:border-emerald-400 hover:text-white">Contact</a>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-slate-800 pt-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Shortly. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="transition hover:text-white">Twitter</a>
            <a href="#" className="transition hover:text-white">LinkedIn</a>
            <a href="#" className="transition hover:text-white">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer