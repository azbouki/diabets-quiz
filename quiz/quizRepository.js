'use strict'

module.exports = function quizRepository(mysql) {

    function updateQuizAnswer(data) {
        data.id = 1;
        const query = [
            'UPDATE `diabets-quiz`.`quiz`',
            `SET ${data.question}= :answer`,
            'WHERE id = :id',
        ].join(" ");

        return mysql.makeQuery(query, data, (result) => {
            return result && result.length > 0;
        }, true);
    }

    return {
        updateQuizAnswer
    };
}