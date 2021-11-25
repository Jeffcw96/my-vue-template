// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import App from './App'
import languageFile from './language'
import store from './store'
import router from './router'
import axios from 'axios'
Vue.config.productionTip = false

Vue.use(VueI18n)


let baseUrl = process.env.NODE_ENV === 'development' ? "http://localhost:3000/" : "http://YourProductionServiceUrl"
let defaultLanguage = process.env.PREFERRED_LANGUAGE || 'en'


let vuexStore = store(axios.create({
  baseURL: baseUrl
}));


let i18n = new VueI18n({
  locale: defaultLanguage,
  fallbackLocale:defaultLanguage,
  messages: languageFile,
  silentTranslationWarn:true
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store: vuexStore,
  i18n,
  router,
  components: { App },
  template: '<App/>'
})
