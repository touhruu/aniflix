import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

//primeVue
import PrimeVue from 'primevue/config';
import "primevue/resources/themes/lara-light-indigo/theme.css";
import "primevue/resources/primevue.min.css";
import Toast from 'primevue/toast';
import FileUpload from 'primevue/fileupload';
import ToastService from 'primevue/toastservice';

import { loadFonts } from './plugins/webfontloader'
import { router } from './router'
import { store } from './store/store'

loadFonts()

createApp(App)
  .use(vuetify)
  .use(router)
  .use(store)
  .use(PrimeVue)
  .use(ToastService)
  .component('Toast', Toast)
  .component('FileUpload', FileUpload)
  .mount('#app')
