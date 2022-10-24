import express from 'express';
const router = express.Router();

import {
    CheckEmailController,
    Greeting,
    LoginWithPasswordController,
    RegisterController,
} from '../controllers/user.controller.js';
import { CreateOTPController, LoginWithOTPController } from '../controllers/otp.controller.js';
import { verifyOTPMiddleware } from '../middlewares/verifyOTP.middleware.js';
import { GenerateQRCodeController } from '../controllers/qrcode.controller.js';
import { VerifyQRCodeController } from '../middlewares/verifyQRCode.middleware.js';

const initWebRoutes = (app) => {
    router.get('/hello', Greeting);
    router.post('/check/mail', CheckEmailController);
    router.post('/register', RegisterController);
    router.post('/login/password', LoginWithPasswordController);

    router.post('/generate/otp', CreateOTPController);
    router.get('/generate/qrcode', GenerateQRCodeController);

    router.post('/login/otp', verifyOTPMiddleware, LoginWithOTPController);
    router.post('/login/qrcode', VerifyQRCodeController);
    return app.use('/api', router);
};

export default initWebRoutes;
