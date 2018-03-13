import express from 'express';
import config from '../config';
import middleware from '../middleware';
import initializeDb from '../db';
import restaurant from '../controller/restaurant';
import account from '../controller/account';

let router = express();

//connect to db
initializeDb(db => {
    // internal middleware
    router.use(middleware({config, db}));

    // api routes v1
    router.use('/restaurant', restaurant({config, db}));

    router.use('/account', account({config, db}));

});

export default router;