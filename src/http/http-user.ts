import axios from 'axios'

export async function login(email: string, password: string) {
  const resp = await axios.post('/api/v1/users/login', {
    email,
    password,
  })
  return resp.data
}

export async function auth() {
  const resp = await axios.get('/api/v1/users/auth')
  return resp.data
}
