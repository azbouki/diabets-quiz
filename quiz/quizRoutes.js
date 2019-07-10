const express = require('express');
const router = express.Router();


module.exports = (Controller) => {

    router.put('/question', Controller.question);
    return router;
};
