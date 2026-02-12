// const API_URL = "http://localhost:5000/api/users"

// Helper function to handle API responses
const handleResponse = async (response) => {
  const data = await response.json()
  
  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong')
  } 
  
  return data
}

export const login = async (credentials) => {
  try {
    console.log('Attempting login with:', { email: credentials.email }); // Log email only, not password
    
    const response = await fetch('/api/v1/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
      mode: 'cors'
    });
    console.log("the response:",response);
    
    console.log('Login response status:', response.status);

    if (!response.ok) {
      const errorData = await response.json().catch(e => ({ message: 'Could not parse error response' }));
      console.error('Login error response:', errorData);
      throw new Error(errorData.message || 'Failed to login')
    }
    
    const data = await response.json()
    
    if (data.token) {
      // Save token
      localStorage.setItem('token', data.token)

      // Build and save user info manually (since backend doesn’t send data.user)
      const userData = {
        id: data._id,
        name: data.name,
        email: data.email
      }

      localStorage.setItem('user', JSON.stringify(userData))
    } 
    else {
      throw new Error('No token received')
    }
    return data
  } 
    catch (error) {
      console.error('Login error:', error)
      throw error instanceof Error ? error : new Error('Failed to login')
    }
}

// export const register = async (userData) => {
//   try { 
//     const response = await fetch('api/v1/users/register', {
//       credentials: 'include',  
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(userData)
//     })
//     const data = await handleResponse(response)
//     if (data.token) {
//       localStorage.setItem('token', data.token)
//       localStorage.setItem('user', JSON.stringify(data.user))
//     }
//     console.log("the data received:", data);
    
//     return data
//   } 
//   catch (error) {
//     console.error('Registration error:', error)
//     throw error
//   }
// }

// export const logout = () => {
//   localStorage.removeItem('token')
//   localStorage.removeItem('user')
// }

export const getCurrentUser = () => {
  try {
    const userStr = localStorage.getItem('user')
    return userStr ? JSON.parse(userStr) : null
  } 
  catch (error) {
    console.error('Error parsing user data:', error)
    localStorage.removeItem('user') // Clear invalid data
    return null
  }
}

export const isAuthenticated = () => {
  const token = localStorage.getItem('token')
  const user = getCurrentUser()
  return !!token && !!user
}