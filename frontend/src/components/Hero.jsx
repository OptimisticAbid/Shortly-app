import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import { FiArrowRight, FiCheckCircle, FiPlayCircle } from 'react-icons/fi'
import Image from '../assets/hero-image.jpeg'

const Hero = () => {
  return (
    <section className="px-6 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 lg:flex-row lg:items-center">
        <div className="flex-1">
          <p className="mb-4 inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700">
            Modern URL shortening for fast-moving teams
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Short links that feel premium, fast, and measurable.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Launch polished short links, track click activity, and keep your links organized from one beautiful dashboard.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link to="/register" className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700">
              Get started <FiArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <HashLink smooth to="/#features" className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-emerald-400 hover:text-emerald-700">
              <FiPlayCircle className="mr-2 h-4 w-4" /> See features
            </HashLink>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-slate-600">
            {['Real-time click tracking', 'Simple dashboard workflow', 'Secure auth flow'].map((item) => (
              <span key={item} className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-2 shadow-sm">
                <FiCheckCircle className="h-4 w-4 text-emerald-600" /> {item}
              </span>
            ))}
          </div>
        </div>

        <div className="flex-1">
          <div className="rounded-[32px] border border-slate-200 bg-white/80 p-4 shadow-[0_20px_60px_rgba(15,23,42,0.12)] backdrop-blur">
            <img src={Image} alt="Shortly dashboard preview" className="h-full w-full rounded-[24px] object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
