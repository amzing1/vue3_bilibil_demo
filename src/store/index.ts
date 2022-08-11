import { useStorage } from '@vueuse/core'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { auth, login } from '../http'
import { User } from '../types/store/user-type'

export const useUserStore = defineStore('user', () => {
  const user = ref<User | {}>({})
  const token = useStorage('token', '')
  const isUserLogin = ref(false)
  function setUser(value: User) {
    user.value = value
    isUserLogin.value = true
  }
  function setToken(value: string) {
    token.value = value
  }
  async function userLogin(email: string, password: string) {
    try {
      const data = await login(email, password)
      setUser(data.user)
      setToken(data.token)
    } catch (error) {
      console.error(error)
    }
  }
  async function autoLogin() {
    try {
      const data = await auth()
      setUser(data.user)
    } catch (error) {
      console.error(error)
    }
  }
  return {
    user,
    isUserLogin,
    setUser,
    setToken,
    userLogin,
    autoLogin,
  }
})
