import axios from "axios";

const API_URL = '/api/v1/urls/'

export const createShortUrl = async(longUrl, token) => {
    try{
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        const response = await axios.post(API_URL, longUrl, config)
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


export const urlService = {
    createShortUrl, 
    fetchUrls
}