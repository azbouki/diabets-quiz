'use strict'

module.exports = function quizController(quizRepository) {
    function question(req, res) {
        res.json({
            success: true
        })
    }

    return {
        question
    };
};