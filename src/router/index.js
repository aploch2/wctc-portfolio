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
    path: "/portfolio/self-hosted-project-manager",
    name: "Self Hosted Project Manager",
    component: () =>
      import("../views/projects/SelfHostedProjectManager.vue"),
  },
  {
    path: "/portfolio/the-etnyre-foundation",
    name: "The Etnyre Foundation",
    component: () =>
      import("../views/projects/EtnyreFoundation.vue"),
  },
  {
    path: "/portfolio/2018-portfolio",
    name: "2018 Portfolio",
    component: () =>
      import("../views/projects/2018Portfolio.vue"),
  },
  {
    path: "/portfolio/the-invention-group",
    name: "The Invention Group",
    component: () =>
      import("../views/projects/TheInventionGroup.vue"),
  },
  {
    path: "/portfolio/summerfield-church",
    name: "Summerfield United Methodist Church",
    component: () =>
      import("../views/projects/SummerfieldChurch.vue"),
  },
  // {
  //   path: "/project/:id",
  //   name: "Project",
  //   component: () =>
  //     import("../views/SingleProject.vue"),
  //   props: true,
  // },
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
