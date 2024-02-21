import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import App from './App.vue'
import router from './router'

// /* import specific icons */
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons'
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'

const messages = {
  en: {
    message: {
      hello: 'hello world',
      activities: 'Activities',
    }
  },
}
const i18n = createI18n({
  locale: 'en',
  messages
})

// /* add icons to the library */
library.add(faCircleCheck)
library.add(faTriangleExclamation)

/* add font awesome icon component */

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
