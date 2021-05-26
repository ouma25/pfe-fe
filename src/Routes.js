import Login from './Login'
import Register from "./Register";
import Card from "./components/card";
import Index from "./Index";
import Dashboard from "./Dashboard";
import Profile from "./Profile";

export default [
  { path: '/', component: Index },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/card', component: Card },
  { path: '/dashboard', component: Dashboard, meta: { requiresAuth: false } },
  { name: 'profile', path: '/profile:id', component: Profile },
]
