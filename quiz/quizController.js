'use strict'
const fs = require('fs');

module.exports = function quizController(quizRepository) {
    function question(req, res) {
        console.log('>>>', req.body, req.params);
        // fs.writeFile('./file.txt', JSON.str)
        res.json({
            success: true,
            message: 'How are you today'
        })
    }

    return {
        question
    };
};