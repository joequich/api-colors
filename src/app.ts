import express from 'express';
const app = express();
import env from './common/env.config';
import colors from './routes';
app.use(express.json());

// test api
app.get('/', (_req, res) => {
    console.log('someone access to the server');
    res.send('Hellow there')
});

// routes
colors(app);

const server = app.listen(env.PORT, () => {
    console.log(`Server running in ${env.NODE_ENV} mode on port ${env.PORT}`);
})

export { app, server }