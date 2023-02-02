import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import router from './router'
import axios from 'axios'
import { appAxios } from './utils/appAxios'
import { store } from "@/store/store";

import 'primevue/resources/themes/lara-light-indigo/theme.css'      //theme
import 'primevue/resources/primevue.min.css'                //core css
import 'primeicons/primeicons.css'                       //icons
import 'primevue/resources/themes/saga-blue/theme.css'       //theme






const app = createApp(App)
app.use(router)
app.use(store)
app.use(PrimeVue)
app.config.globalProperties.$axios = axios
app.config.globalProperties.$appAxios = appAxios

// app.component('DataTable', DataTable)
// app.component('CoLumn', Column)
// app.component('ColumnGroup', ColumnGroup)
// app.component('RoW', Row)
// app.component('ButTon', Button)
// app.component('RatinG',Rating)

app.mount('#app')





// Install the store instance as a plugin
