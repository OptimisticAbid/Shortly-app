const API_URL = "http://localhost:5000/api/urls"

// Helper function to handle API responses
const handleResponse = async (response) => {
  const data = await response.json()
  
  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong')
  }
  
  return data
}

// Helper function to get headers
const getHeaders = (includeAuth = true) => {
  const headers = {
    'Content-Type': 'application/json'
  }

  if (includeAuth) {
    const token = localStorage.getItem('token')
    if (!token) {
      throw new Error('Authentication required')
    }
    headers.Authorization = `Bearer ${token}`
  }

  return headers
}

export const fetchUrls = async () => {
  try {
    const response = await fetch(API_URL, {
      headers: getHeaders(),
      credentials: 'include'
    })
    return handleResponse(response)
  } catch (error) {
    console.error('Error fetching URLs:', error)
    throw error
  }
}

export const createUrl = async (longUrl, customAlias) => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      credentials: 'include',
      headers: getHeaders(),
      body: JSON.stringify({ 
        longUrl,
        customAlias: customAlias || undefined
      })
    })
    return handleResponse(response)
  } catch (error) {
    console.error('Error creating URL:', error)
    throw error
  }
}

export const deleteUrl = async (urlId) => {
  try {
    const response = await fetch(`${API_URL}/${urlId}`, {
      method: 'DELETE',
      headers: getHeaders()
    })
    return handleResponse(response)
  } catch (error) {
    console.error('Error deleting URL:', error)
    throw error
  }
}