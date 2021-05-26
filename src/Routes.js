import Login from './Login'
import Register from "./Register";
import Card from "./components/card";
import Index from "./Index";
import Dashboard from "./Dashboard";
import Profile from "./Profile";
import Contact from "./Contact";
import Forgot_password from "./Forgot_password";

export default [
  { path: '/', component: Index },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/card', component: Card },
  { path: '/dashboard', component: Dashboard, meta: { requiresAuth: false } },
  { name: 'profile', path: '/profile:id', component: Profile },
  { name: 'contact', path: '/contact', component: Contact },
  { name: 'forgot_password', path: '/forgot_password', component: Forgot_password }
]
