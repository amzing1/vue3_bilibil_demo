import { ref } from 'vue'
import { useUserStore } from '../store'

function useApp() {
  const userStore = useUserStore()
  userStore.autoLogin()

  const isUserLogin = ref(userStore.isUserLogin)

  return {
    isUserLogin,
  }
}

export { useApp }
