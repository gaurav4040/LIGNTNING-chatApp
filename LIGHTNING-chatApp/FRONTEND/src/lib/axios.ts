import axios from 'axios'

export const axiosInstance = axios.create({

    baseURL:"http://ligntning-chatapp.ap-south-1.elasticbeanstalk.com/api",
    withCredentials:true,
})