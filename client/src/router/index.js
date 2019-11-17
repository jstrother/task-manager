import Vue from 'vue';
import Router from 'vue-router';
import Boards from '@/components/Boards';
import BoardPage from '@/components/BoardPage';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Boards',
      component: Boards,
    },
    {
      path: '/boards/:boardId',
      name: 'BoardPage',
      component: BoardPage,
    },
  ],
});
