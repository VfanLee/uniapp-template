import '@/styles/global.scss'

import { createSSRApp } from 'vue'
import store from './stores'

import App from './App.vue'
import Tabbar from '@/components/tabbar/tabbar.vue'

export function createApp() {
  const app = createSSRApp(App)

  app.component('Tabbar', Tabbar)

  app.use(store)

  return {
    app,
  }
}
