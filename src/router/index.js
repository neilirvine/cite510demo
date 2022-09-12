import { createRouter, createWebHistory } from 'vue-router'
import BasicMathView from '../views/BasicMathView.vue'
import StringAppView from '../views/StringAppView.vue'
import HomeView from '../views/StringAppView.vue'
import Axios from '../views/Axios.vue'
import Aboutme from '../views/Aboutme.vue'
import Quiz1 from '../views/Quiz1.vue'
import Quiz from '../views/Quiz.vue'
import Modal from '../views/Modal.vue'
import Page from '../views/AboutPage.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/stringApp',
      name: 'StringAppView',
      component: StringAppView
    },
    {
    path: '/basicMath',
    name: 'basicMath',
    component: BasicMathView
    },
    {
      path: '/Axios',
      name: 'Axios',
      component: Axios
    },
    
    {
      path: '/aboutme',
      name: 'aboutme',
      component: Aboutme
    },
    {
      path: '/quiz1',
      name: 'quiz1',
      component: Quiz1
    },
    {
      path: '/quiz',
      name: 'quiz',
      component: Quiz
    },
    {
      path: '/modal',
      name: 'modal',
      component: Modal
    },
    {
      path: '/page',
      name: 'page',
      component: Page
    },
      


  ]
})

export default router
