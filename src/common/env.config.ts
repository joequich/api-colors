import dotenv from 'dotenv';

dotenv.config();

export default {
    NODE_ENV: process.env.NODE_ENV,
    PORT: parseInt(process.env.PORT ? process.env.PORT : '', 10),
    DB_HOST: process.env.MONGODB_HOST,
    DB_USER: process.env.MONGODB_USER,
    DB_PASS: process.env.MONGODB_PASS,
    DB_NAME: process.env.NODE_ENV === 'test' ? process.env.MONGODB_DATABASE_TEST : process.env.MONGODB_DATABASE,
}