import { createRouter, createWebHistory } from 'vue-router';
import Welcome from '../views/Welcome.vue';
import ChatRoom from '../views/ChatRoom.vue';
import { projectAuth } from '../firebase/config';

// Auth Guard
const requireAuth = (to, from, next) => {
  let user = projectAuth.currentUser;
  console.log('current user in auth guard ', user);
  if (!user) {
    next({ name: 'Welcome' });
  }
  next();
};

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome,
  },
  {
    path: '/chatroom',
    name: 'ChatRoom',
    component: ChatRoom,
    beforeEnter: requireAuth,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
