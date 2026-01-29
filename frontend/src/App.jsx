import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header'
import Dashboard from './pages/Dashboard'
import Login from './pages/login'
import Register from './pages/register'
import { isAuthenticated } from './services/AuthService'
import LandingPage from './pages/LandingPage'
import Navbar from './components/Navbar'
import Pricing from './pages/Pricing'

const PrivateRoute = ({ children }) => {
  const authenticated = isAuthenticated()
  return authenticated ? children : <Navigate to="/login" />
}

const App = () => {
  return (
    // <Router>
    //   <div className="min-h-screen bg-gray-50">~
    //     <Header />
    //     <main className="pt-16"> {/* Add padding-top to account for fixed header */}
    //       <Routes>
    //         <Route path="/login" element={<Login />} />
    //         <Route path="/register" element={<Register />} />
    //         <Route path="/home" element={<LandingPage />} />

    //         <Route 
    //           path="/dashboard" 
    //           element={
    //             // <PrivateRoute>
    //               <Dashboard />
    //             // </PrivateRoute>
    //           } 
    //         />
    //         <Route path="/" element={<Navigate to="/dashboard" />} />
    //       </Routes>
    //     </main>
    //   </div>
    // </Router>
    <LandingPage /> 
    // <Pricing/>
  )
}
export default App

