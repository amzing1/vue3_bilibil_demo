import axios from 'axios'
import { login, auth } from './http-user'

export function initAxios() {
  axios.defaults.baseURL = 'http://localhost:3000'
  const token = localStorage.getItem('token')
  if (token) {
    axios.defaults.headers.common.authorization = `Bearer ${token}`
  }
}

export { login, auth }
