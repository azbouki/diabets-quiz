const mysql = require('../lib/mysqlConnection/MysqlConnection');

module.exports = function () {

    const quizRepository = new (require('./quizRepository'))(mysql),
        quizController = new (require('./quizController'))(quizRepository);

    return require('./quizRoutes')(quizController);
};