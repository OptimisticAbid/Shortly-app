import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate, BrowserRouter } from 'react-router-dom'
import Dashboard from './pages/dashboard/Dashboard.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register'

import LandingPage from './pages/landingPage/LandingPage.jsx'

import {ToastContainer} from 'react-toastify'
import 'react-toastify/ReactToastify.css'
import ProtectedRoutes from './components/ProtectedRoutes.jsx'


// const PrivateRoute = ({ children }) => {
//   const authenticated = isAuthenticated()
//   return authenticated ? children : <Navigate to="/login" />
// }

const App = () => {
  return (
    <>

      <Router>
        
        <Routes>
          <Route path='/' element= { <LandingPage />   } />
          <Route path='/dashboard'
           element= {
           <ProtectedRoutes>
            <Dashboard />
           </ProtectedRoutes>   
          } />
          <Route path='/register' element= { <Register />   } />
          <Route path='/login' element= { <Login />   } />
      </Routes>

      </Router>
      <ToastContainer/>

    </>
    
     

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
    
  )
}
export default App

