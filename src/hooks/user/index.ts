import { useUserStore } from '../../store'
import { ref } from 'vue'

function useUser() {
  const userStore = useUserStore()
  const email = ref('')
  const password = ref('')
  const isUserLogin = ref(userStore.isUserLogin)

  function login() {
    userStore.userLogin(email.value, password.value)
  }

  return {
    email,
    password,
    isUserLogin,
    login,
  }
}

export { useUser }
