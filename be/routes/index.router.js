import express from 'express';

const router = express.Router();

import { Greeting } from '../controllers/user.controller.js';

const initWebRoutes = (app) => {
    router.get('/hello', Greeting);

    return app.use('/api', router);
};

export default initWebRoutes;
