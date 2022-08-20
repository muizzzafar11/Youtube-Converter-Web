import { createApp } from 'vue'
import firebaseApp from './firebase'
import App from './App.vue'
import * as VueRouter from 'vue-router'
import HomeScreen from "./Screens/HomeScreen.vue";
import LoginScreen from "./Screens/LoginScreen.vue";

const routes = [
    { path: '/login', name: 'Login', meta: { guest: true }, component: LoginScreen },
    { path: '/', name: 'Home', meta: { auth: true } , component: HomeScreen },
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.auth)) {
        firebaseApp.auth().onAuthStateChanged(user => {
        if (user) {
          next()
        } else {
          next({
            path: "/login",
          })
        }
      })
    } else if (to.matched.some(record => record.meta.guest)) {
        firebaseApp.auth().onAuthStateChanged(user => {
        if (user) {
          next({
            path: "/",
          })
        } else {
          next()
        }
      })
  
    } else {
      next()
    }
  
  })

createApp(App).use(router).mount('#app')
