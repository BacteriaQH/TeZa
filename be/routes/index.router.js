import express from 'express';
const router = express.Router();

import {
    CheckEmailController,
    Greeting,
    LoginWithPasswordController,
    RegisterController,
} from '../controllers/user.controller.js';
import { CreateOTPController } from '../controllers/otp.controller.js';

const initWebRoutes = (app) => {
    router.get('/hello', Greeting);
    router.post('/check/mail', CheckEmailController);
    router.post('/register', RegisterController);
    router.post('/login/password', LoginWithPasswordController);

    router.post('/generate/otp', CreateOTPController);
    return app.use('/api', router);
};

export default initWebRoutes;
