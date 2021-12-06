import dotenv from 'dotenv';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

dotenv.config();

export default {
    NODE_ENV: process.env.NODE_ENV,
    PORT: parseInt(process.env.PORT ? process.env.PORT : '', 10),
    DB_HOST: process.env.MONGODB_HOST,
    DB_USER: process.env.MONGODB_USER,
    DB_PASS: process.env.MONGODB_PASS,
    DB_NAME: process.env.MONGODB_DATABASE,
    API: {
        prefix: '/api'
    },
}