import Login from '../pages/Login';
import Register from '../pages/Register';
import Chat from '../pages/Chat';
import NotFound from '../components/NotFound';

const userRoutes = [
    { path: '/', component: Login, defaultLayout: false, isPreLogin: true },
    { path: '/login', component: Login, defaultLayout: false, isPreLogin: true },
    { path: '/register', component: Register, defaultLayout: false },
    { path: '/chat/:id', component: Chat, defaultLayout: true },
    { path: '*', component: NotFound, defaultLayout: false },
];

export default userRoutes;
