import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import HeroCard from '../components/HeroCard'
import Pricing from '../components/Pricing'
import Footer from '../components/Footer'
// import FeatureFloating from '../components/FeatureFloating'


const LandingPage = () => {
  return (
    <> 
      <Navbar />
      <div className='pt-24'>
        
        <Hero />

        {/* <div className='flex justify-center'>
          <HeroCard title="Analytics that matters" description="Track clicks, views, and conversions with real-time data." />
          <HeroCard title="Customizable links" description="Create branded short links that reflect your identity." />
          <HeroCard title="Seamless integration" description="Easily integrate with popular platforms and tools." />
        </div> */}

        <Pricing/>
        {/* <div>
          <h2 className="text-center text-2xl font-bold mb-4">Pricing</h2>  
          <PricingCard/>
        </div> */}
    </div>
    <Footer/>

    </>
  )
    
    
}

export default LandingPage