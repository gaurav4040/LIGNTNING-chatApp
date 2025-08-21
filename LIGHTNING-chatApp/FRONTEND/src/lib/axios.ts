import axios from 'axios'

export const axiosInstance = axios.create({

    baseURL:"https://ligntning-chat-app-server.vercel.app/api",
    withCredentials:true,
})