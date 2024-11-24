import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import ProjectPage from '../views/ProjectPage.vue';
import ContactPage from '../views/ContactPage.vue';

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/project', name: 'ProjectPage', component: ProjectPage },
  { path: '/contact', name: 'ContactPage', component: ContactPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
