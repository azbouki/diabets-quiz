const express = require('express');
const router = express.Router();


module.exports = (Controller) => {

    router.post('/question', Controller.question);
    return router;
};
