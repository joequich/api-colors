import express from 'express';
import env from './common/env.config';

const app = express();
import colors from './routes';
app.use(express.json());

app.get('/', (_req, res) => {
    console.log('someone access to the server');
    res.send('Hellow there')
});

colors(app);

app.listen(env.PORT, () => {
    console.log(`Server running in ${env.NODE_ENV} mode on port ${env.PORT}`);
})