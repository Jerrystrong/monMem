import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFound from '../views/NotFound.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
        path: '/contact',
        name: 'contact',
        component: () => import('../views/contactView.vue')
      },
      {
        path:'/signin',
        name:'signin',
        component:()=> import('../views/singInView.vue')
      },
      {
        path:'/signup',
        name:'signup',
        component:()=> import('../views/singUpView.vue')
      },
      {
        path:'/app/:id',
        name:'app',
        component:()=> import('../views/apphomeView.vue')
      },
      {
        path:'/app/:id/parametre',
        name:'parametre',
        component:()=> import('../views/parametre.vue')
      },
      {
        path:'/app/:id/historique',
        name:'historique',
        component:()=> import('../views/historiqueView.vue')
      },
      {
        path:'/app/:id/live',
        name:'recording',
        component:()=> import('../views/liveRecording.vue')
      },
      { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
  ]
})

export default router