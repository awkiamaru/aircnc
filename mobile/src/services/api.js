import axios from 'axios'

const api = axios.create({
    baseURL:'http://192.168.20.82:3300'
})

export default api;