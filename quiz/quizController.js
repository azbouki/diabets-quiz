'use strict'
const fs = require('fs');

module.exports = function quizController(quizRepository) {
    // Origin: out\bp\data\global\actions\diabot-quiz\sendAnswer.js
    // Bot path: out\bp\data\bots\diab

    async function question(req, res) {
        console.log('>>>', req.body);
        // fs.writeFile('./file.txt', JSON.str);
        const data = req.body.answer;
        const success = await quizRepository.updateQuizAnswer(data);
        res.json({
            success,
            message: 'How are you today'
        })
    }

    return {
        question
    };
};