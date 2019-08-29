import Vue from 'vue';
import Router from 'vue-router';
import Starships from './views/Starships.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/starships',
      name: 'starships',
      component: Starships,
      props: (route) => {
        const { filter, pageUrl } = route.query;
        return { filter, pageUrl };
      },
    },
    {
      path: '/starships/:id',
      name: 'starshipsItem',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/StarshipsItem.vue'),
      props: (route) => {
        const { id } = route.params;
        return { id };
      },
    },
    {
      path: '*',
      redirect: '/starships',
    },
  ],
});
