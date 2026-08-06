import axios from "axios";

const API_URL = `${import.meta.env.VITE_API_URL}/urls` 

export const createShortUrl = async(longUrl, token, customAlias = '') => {
    try{
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        const payload = { longUrl }

        if (customAlias?.trim()) {
            payload.customAlias = customAlias.trim()
        }

        const response = await axios.post(API_URL, payload, config)
        return response.data
    }
    catch (error) {
        throw error.response?.data?.message || error.message
    }
}

export const fetchUrls = async (token) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }

    const response = await axios.get(API_URL, config)
    return response.data
  } catch (error) {
    throw error.response?.data?.message || error.message
  }
}

export const deleteUrl = async (id,token) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }

    const response = await axios.delete(API_URL + `/${id}`, config)
    
    return response.data
  }
  catch (error) {
    throw error.response?.data?.message || error.message
  }
}

export const updateClicks = async (id) => {
  const response = await axios.put(`${API_URL}/click`)
  return response.data
}

export const urlService = {
    createShortUrl, 
    fetchUrls,
    deleteUrl,
    updateClicks
}