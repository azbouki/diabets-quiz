var router = require('express').Router(),
    path = require('path'),
    pathServer = path.join(__dirname, '../'),
    config = require('../config');

module.exports = function (app) {

    app.use('/', router);

    //MODULES 
    const quiz = require(pathServer + quiz)();
    router.use(config.apiPrefix + '/quiz', quiz);


    return router;
};
