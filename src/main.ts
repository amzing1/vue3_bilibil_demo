import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import ViewUIPlus from 'view-ui-plus'
import './styles/main.scss'
import 'view-ui-plus/dist/styles/viewuiplus.css'
import './styles/iview/index.less'
import { initAxios } from './http'

const pinia = createPinia()
const app = createApp(App)
app.use(pinia)
app.use(ViewUIPlus)
initAxios()
app.mount('#app')

const win: any = window

if (process.env.NODE_ENV === 'development') {
  if ('__VUE_DEVTOOLS_GLOBAL_HOOK__' in win) {
    win.__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue = app
  }
}
