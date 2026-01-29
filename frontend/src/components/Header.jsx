import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { FaBars, FaTimes, FaLink } from 'react-icons/fa'

function Header({ user, onLogout }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const navigate = useNavigate()

  // Smooth shadow on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLogout = () => {
    onLogout?.()
    navigate('/login')
  }

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b transition-all duration-300 ${
        scrolled ? 'bg-white/80 shadow-md' : 'bg-white/60'
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Brand */}
        <Link
          to="/"
          className="text-2xl font-extrabold tracking-tight text-gray-900 flex items-center gap-2"
        >
          <FaLink className="text-blue-600" />
          <span>
            <span className="text-blue-600">Short</span>ly
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-gray-700 font-medium">
          {['/', '/about', '/contact'].map((path, i) => {
            const labels = ['Dashboard', 'About', 'Contact']
            return (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  `relative transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5px after:bg-blue-600 hover:after:w-full after:transition-all after:duration-300 ${
                    isActive
                      ? 'text-blue-600 after:w-full font-semibold'
                      : 'text-gray-700 hover:text-blue-600'
                  }`
                }
              >
                {labels[i]}
              </NavLink>
            )
          })}

          {user ? (
            <button
              onClick={handleLogout}
              className="ml-4 bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition transform hover:scale-[1.03]"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="ml-4 bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition transform hover:scale-[1.03]"
            >
              Login
            </Link>
          )}
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-gray-700 text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-sm animate-slideDown">
          <nav className="flex flex-col items-start p-4 space-y-3 text-gray-700 font-medium">
            <NavLink
              to="/"
              onClick={() => setMenuOpen(false)}
              className="hover:text-blue-600 transition"
            >
              Dashboard
            </NavLink>
            <NavLink
              to="/about"
              onClick={() => setMenuOpen(false)}
              className="hover:text-blue-600 transition"
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="hover:text-blue-600 transition"
            >
              Contact
            </NavLink>
            {user ? (
              <button
                onClick={() => {
                  handleLogout()
                  setMenuOpen(false)
                }}
                className="bg-blue-600 text-white w-full px-4 py-2 rounded-xl hover:bg-blue-700 transition"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                onClick={() => setMenuOpen(false)}
                className="bg-blue-600 text-white w-full px-4 py-2 rounded-xl text-center hover:bg-blue-700 transition"
              >
                Login
              </Link>
            )}
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header