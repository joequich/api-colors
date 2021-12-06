import dotenv from 'dotenv';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const envFound = dotenv.config();

if (envFound.error) {
    throw new Error('Couldn\'t find .env file');
}

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