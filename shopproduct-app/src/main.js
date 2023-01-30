import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import { appAxios } from './utils/appAxios'
import { store } from "@/store/store";
import PrimeVue from 'primevue/config';

//prime vue temalar

import 'primevue/resources/themes/saga-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'              //core css
import 'primeicons/primeicons.css'     //icons

import 'primevue/resources/themes/bootstrap4-light-blue/theme.css'
import 'primevue/resources/themes/bootstrap4-light-purple/theme.css'
import 'primevue/resources/themes/bootstrap4-dark-blue/theme.css'
import 'primevue/resources/themes/bootstrap4-dark-purple/theme.css'
import 'primevue/resources/themes/md-light-indigo/theme.css'
import 'primevue/resources/themes/md-light-deeppurple/theme.css'
import 'primevue/resources/themes/md-dark-indigo/theme.css'
import 'primevue/resources/themes/md-dark-deeppurple/theme.css'
import 'primevue/resources/themes/mdc-light-indigo/theme.css'
import 'primevue/resources/themes/mdc-light-deeppurple/theme.css'
import 'primevue/resources/themes/mdc-dark-indigo/theme.css'
import 'primevue/resources/themes/mdc-dark-deeppurple/theme.css'
import 'primevue/resources/themes/tailwind-light/theme.css'
import 'primevue/resources/themes/fluent-light/theme.css'
import 'primevue/resources/themes/lara-light-indigo/theme.css'
import 'primevue/resources/themes/lara-dark-indigo/theme.css'
import 'primevue/resources/themes/lara-light-purple/theme.css'
import 'primevue/resources/themes/lara-dark-purple/theme.css'
import 'primevue/resources/themes/lara-light-blue/theme.css'
import 'primevue/resources/themes/lara-dark-blue/theme.css'
import 'primevue/resources/themes/lara-light-teal/theme.css'
import 'primevue/resources/themes/lara-dark-teal/theme.css'
import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/themes/saga-green/theme.css'
import 'primevue/resources/themes/saga-orange/theme.css'
import 'primevue/resources/themes/saga-purple/theme.css'
import 'primevue/resources/themes/vela-blue/theme.css'
import 'primevue/resources/themes/vela-green/theme.css'
import 'primevue/resources/themes/vela-orange/theme.css'
import 'primevue/resources/themes/vela-purple/theme.css'
import 'primevue/resources/themes/arya-blue/theme.css'
import 'primevue/resources/themes/arya-green/theme.css'
import 'primevue/resources/themes/arya-orange/theme.css'
import 'primevue/resources/themes/arya-purple/theme.css'
import 'primevue/resources/themes/nova/theme.css'
import 'primevue/resources/themes/nova-alt/theme.css'
import 'primevue/resources/themes/nova-accent/theme.css'
import 'primevue/resources/themes/nova-vue/theme.css'
import 'primevue/resources/themes/luna-amber/theme.css'
import 'primevue/resources/themes/luna-blue/theme.css'
import 'primevue/resources/themes/luna-green/theme.css'
import 'primevue/resources/themes/luna-pink/theme.css'
import 'primevue/resources/themes/rhea/theme.css'






const app = createApp(App)
app.use(router)
app.use(store)
app.use(PrimeVue);
app.config.globalProperties.$axios = axios
app.config.globalProperties.$appAxios = appAxios

app.mount('#app')
