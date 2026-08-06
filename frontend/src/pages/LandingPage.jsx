import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import FeatureShowcase from '../components/FeatureShowcase'
import Pricing from '../components/Pricing'
import Footer from '../components/Footer'

const LandingPage = () => {
  const { user, success } = useSelector((state) => state.auth)
  const navigate = useNavigate()

  useEffect(() => {
    const storedUser = localStorage.getItem('user')

    if (success || storedUser) {
      navigate('/dashboard')
    }
  }, [success, navigate, user])

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.12),_transparent_35%),linear-gradient(135deg,_#f8fffb_0%,_#f5f7fb_100%)] text-slate-900">
      <Navbar />
      <main className="pt-24">
        <Hero />
        <FeatureShowcase />
        <Pricing />
      </main>
      <Footer />
    </div>
  )
}

export default LandingPage