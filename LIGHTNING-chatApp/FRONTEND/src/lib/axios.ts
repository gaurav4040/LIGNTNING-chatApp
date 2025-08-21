import axios from 'axios'

export const axiosInstance = axios.create({

    baseURL:"http://localhost:5170/api",
    withCredentials:true,
})