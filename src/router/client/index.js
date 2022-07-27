const routes = [
  {
    path: "/",
    name: "client",
    component: () => import("@/views/client/Entry.vue"),
    children: [
      {
        path: "",
        name: "index",
        meta: { title: "主页" },
        component: () => import("@/views/client/index/Index.vue"),
      },
      {
        path: "/blog",
        name: "blog",
        meta: { title: "博客" },
        component: () => import("@/views/client/blog/Index.vue"),
        // children:[{
        //   path:'',
        //   name: 'blogIndex'
        // }]
      },
      {
        path: "/illust",
        name: "illust",
        meta: { title: "插画" },
        component: () => import("@/views/client/illust/Index.vue"),
      },
      {
        path: "/about",
        name: "about",
        meta: { title: "关于" },
        component: () => import("@/views/client/about/Index.vue"),
      },
    ],
  },
];
export default routes;
