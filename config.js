require('dotenv').config();

const config = {
    host: '127.0.0.1',
    port: process.env.PORT || 3000,
    database: {
        host: process.env.DATABASE_HOST,
        user: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME,
        charset : 'utf8mb4',
        multipleStatements: true,
        acquireTimeout: 30000
    },
    apiPrefix: '/apiv1',
    apiKeys: {
    }
};
module.exports = config;
