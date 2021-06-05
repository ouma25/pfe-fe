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
import Client from "./Clients";
import Services from "./Services";

export default [
  { path: '/', component: Index },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/card', component: Card },
  { path: '/dashboard', component: Dashboard, meta: { requiresAuth: true } },
  { name: 'profile', path: '/profile:id', component: Profile, meta: { requiresAuth: true } },
  { name: 'contact', path: '/contact', component: Contact },
  { name: 'forgot_password', path: '/forgot_password', component: Forgot_password },
  { name: 'admin_dashboard', path: '/admin/dashboard', component: Admin_dashboard, meta: { requiresAdmin: true } },
  { name: 'admin_professionals', path: '/admin/professionals', component: Admin_professionals, meta: { requiresAdmin: true } },
  { name: 'admin_clients', path: '/admin/clients', component: Admin_clients, meta: { requiresAdmin: true } },
  { name: 'admin_services', path: '/admin/services', component: Admin_services, meta: { requiresAdmin: true } },
  { name: 'admin_comments', path: '/admin/comments', component: Admin_comments, meta: { requiresAdmin: true } },
  { name: 'conversation', path: '/user/conversation', component: Conversation, meta: { requiresAuth: true }},
  { name: 'clients', path: '/user/clients', component: Client },
  { name: 'services', path: '/services', component: Services }
]
