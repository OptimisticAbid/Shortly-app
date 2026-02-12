import axios from "axios";
// import { logout } from "./authSlice";

const API_URL = '/api/v1/users/'

// Register user 
const register = async (userData) => {
    const response = await axios.post(`${API_URL}register`, userData)

    if(response.data) {
        // localStorage.setItem('token', response.data.token)

        localStorage.setItem('user', JSON.stringify(response.data))
    }


    return response.data
}

const logout =  () => {
    console.log("user signing out");
    
    localStorage.removeItem('user') ;

}

// login user 
const login = async (userData) => {
    const response = await axios.post(API_URL + 'login', userData)

    if(response.data) {
        // localStorage.setItem('token', response.data.token)

        localStorage.setItem('user', JSON.stringify(response.data))
    }


    return response.data
}

export const authService  = {
    register, 
    logout,
    login
}

export default authService