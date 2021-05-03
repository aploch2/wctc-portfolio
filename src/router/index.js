import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () =>
      import("../views/Home.vue"),
  },
  {
    path: "/portfolio",
    name: "Portfolio",
    component: () =>
      import("../views/Portfolio.vue"),
  },
  {
    path: "/project/:id",
    name: "Project",
    component: () =>
      import("../views/SingleProject.vue"),
    props: true,
},
];


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  // console.log(to)
  document.title =  `${ process.env.VUE_APP_TITLE } - ${ to.name }`
  next()
})

export default router;
