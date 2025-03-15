import axios from 'axios'
import { baseURL, authToken } from './constants'

export const axiosClient = axios.create({
    baseURL,
    headers: {'Authorization': `Bearer ${authToken}`}
})