import express from 'express';
import env from './common/env.config';

const app = express();

app.use(express.json());

app.get('/', (_req, res) => {
    console.log('someone access to the server');
    res.send('Hellow there')
});

app.listen(env.PORT, () => {
    console.log(`Server running in ${env.NODE_ENV} mode on port ${env.PORT}`);
})