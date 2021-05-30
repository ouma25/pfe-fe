import Login from './Login'
import Register from "./Register";
import Card from "./components/card";
import Index from "./Index";
import Dashboard from "./Dashboard";
import Profile from "./Profile";
import Contact from "./Contact";
import Forgot_password from "./Forgot_password";
import Admin_dashboard from "./admin/Dashboard";
import Admin_professionals from "./admin/Professionals";
import Admin_clients from "./admin/Clients";
import Admin_services from "./admin/Services";
import Admin_comments from "./admin/Comments";
import Conversation from "./Conversation";

export default [
  { path: '/', component: Index },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/card', component: Card },
  { path: '/dashboard', component: Dashboard, meta: { requiresAuth: false } },
  { name: 'profile', path: '/profile:id', component: Profile },
  { name: 'contact', path: '/contact', component: Contact },
  { name: 'forgot_password', path: '/forgot_password', component: Forgot_password },
  { name: 'admin_dashboard', path: '/admin/dashboard', component: Admin_dashboard },
  { name: 'admin_professionals', path: '/admin/professionals', component: Admin_professionals },
  { name: 'admin_clients', path: '/admin/clients', component: Admin_clients },
  { name: 'admin_services', path: '/admin/services', component: Admin_services },
  { name: 'admin_comments', path: '/admin/comments', component: Admin_comments },
  { name: 'conversation', path: '/user/conversation', component: Conversation }
]
