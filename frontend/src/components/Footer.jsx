import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-gray-300'>
      <div className='max-w-6xl mx-auto px-6 py-20'>
        <div className='grid grid-cols-1 md:grid-cols-5 gap-8 mb-12'>
          
          {/* Brand */}
          <div>
            <h3 className='text-white font-bold text-xl mb-4'>Shortly</h3>
            <p className='text-gray-400 text-sm'>
              Short links. Deep insights. Track, share, and analyze your links.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className='text-white font-semibold mb-4'>Product</h4>
            <ul className='space-y-2 text-sm'>
              <li><a href='#' className='hover:text-white transition'>Features</a></li>
              <li><a href='#' className='hover:text-white transition'>Pricing</a></li>
              <li><a href='#' className='hover:text-white transition'>Security</a></li>
              <li><a href='#' className='hover:text-white transition'>Roadmap</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className='text-white font-semibold mb-4'>Resources</h4>
            <ul className='space-y-2 text-sm'>
              <li><a href='#' className='hover:text-white transition'>Documentation</a></li>
              <li><a href='#' className='hover:text-white transition'>API</a></li>
              <li><a href='#' className='hover:text-white transition'>Blog</a></li>
              <li><a href='#' className='hover:text-white transition'>Support</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className='text-white font-semibold mb-4'>Company</h4>
            <ul className='space-y-2 text-sm'>
              <li><a href='#' className='hover:text-white transition'>About</a></li>
              <li><a href='#' className='hover:text-white transition'>Careers</a></li>
              <li><a href='#' className='hover:text-white transition'>Contact</a></li>
              <li><a href='#' className='hover:text-white transition'>Press</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className='text-white font-semibold mb-4'>Legal</h4>
            <ul className='space-y-2 text-sm'>
              <li><a href='#' className='hover:text-white transition'>Privacy</a></li>
              <li><a href='#' className='hover:text-white transition'>Terms</a></li>
              <li><a href='#' className='hover:text-white transition'>Cookie Policy</a></li>
              <li><a href='#' className='hover:text-white transition'>License</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className='border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center'>
          <p className='text-sm text-gray-400'>
            © 2024 Shortly. All rights reserved.
          </p>
          <div className='flex gap-6 mt-6 md:mt-0'>
            <a href='#' className='text-gray-400 hover:text-white transition'>Twitter</a>
            <a href='#' className='text-gray-400 hover:text-white transition'>LinkedIn</a>
            <a href='#' className='text-gray-400 hover:text-white transition'>GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
    



export default Footer