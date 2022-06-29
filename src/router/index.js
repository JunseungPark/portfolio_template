import { createRouter, createWebHistory } from "vue-router";
// modules

import moduleBase from '@/modules/base/router'
import BaseLayout from '@/modules/base/Index.vue'
 
const routes = [
  {
    path: '/',
    redirect: 'example',
    component: BaseLayout,
     
    children: [
      ...moduleBase,
    ],
  },
  
]

const router = new createRouter({
  history: createWebHistory(),
  routes,
})

 
export default router
