import mongoose from 'mongoose';
import env from './env.config';

const strUrlMongo = `mongodb+srv://${env.DB_USER}:${env.DB_PASS}@${env.DB_HOST}/${env.DB_NAME}?retryWrites=true&w=majority`;

const options = {
    autoIndex: false, // default is true is great for development, but not ideal for production
    maxPoolSize: 10, // default is 5, maintain up to 10 connections
    useNewUrlParser: true,
    useUnifiedTopology: true, 
}

const connectDB = async() => {
    try {
        console.log('MongoDB is connecting...');
        const conn = await mongoose.connect(strUrlMongo, options);
        console.log(`MongoDB connected ${conn.connection.host}`)
    } catch (error) {
        console.log(error);
        throw new Error('Error when starting the database');
    }
};

connectDB();

export default mongoose;

