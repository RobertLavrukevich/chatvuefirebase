import { createRouter, createWebHistory } from 'vue-router';
import Login from '../components/Login.vue';
import Chat from '../components/Chat.vue';

const routes = [
  { path: '/', component: Login },
  { path: '/chat', component: Chat }
];

export default createRouter({
  history: createWebHistory(),
  routes
});


