import { createRouter, createWebHistory } from 'vue-router';

import NotFound from '@/pages/NotFound.vue';
import Welcome from '@/pages/Welcome.vue';

const routes = [
  { path: '/', component: Welcome },
  { path: '/:catchAll(.*)', component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
