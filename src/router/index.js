import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

// route-level code splitting
const Home = () => import('../components/Home.vue');
const CommentsList = () => import('../components/CommentsList.vue');

export default new Router({
  routes: [
    { path: '/', redirect: '/news' },
    { path: '/news/:page?', name: 'news', component: Home },
    { path: '/printed/:page?', name: 'printed', component: Home },
    { path: '/item/:id', name: 'commentsList', component: CommentsList },
  ],
  linkActiveClass: 'header-link-active',
});
