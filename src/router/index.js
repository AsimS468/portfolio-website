import { createRouter, createWebHistory } from "vue-router"

import Main from "@/Main.vue"
import AllProjects from "@/pages/AllProjects.vue"
import AllCertificates from "@/pages/AllCertificates.vue"
import WhatsNew from "@/pages/WhatsNew.vue"
import NotFound from "@/pages/NotFound.vue"

const routes = [
  { path: "/", component: Main },
  { path: "/projects", component: AllProjects },
  { path: "/certificates", component: AllCertificates },
  { path: "/whatsnew", component: WhatsNew },
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
