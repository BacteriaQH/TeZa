import Login from '../pages/Login';
import Register from '../pages/Register';
import Chat from '../pages/Chat';
import NotFound from '../layout/NotFound';
import PreLogin from '../pages/PreLogin';
import Setting from '../pages/Setting';

const userRoutes = [
    { path: '/', component: Login, defaultLayout: false, isPreLogin: true },
    { path: '/login', component: Login, defaultLayout: false, isPreLogin: true },
    { path: '/pre/login', component: PreLogin, defaultLayout: false, isPreLogin: true },
    { path: '/register', component: Register, defaultLayout: false },
    { path: '/chat/:id', component: Chat, defaultLayout: true },
    { path: '/setting', component: Setting, defaultLayout: true },
    { path: '*', component: NotFound, defaultLayout: false },
];

export default userRoutes;
