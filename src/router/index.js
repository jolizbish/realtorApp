import Vue from 'vue';
import Router from 'vue-router';
import Dev from '@/components/Dev';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dev',
      component: Dev
    }
  ]
})
