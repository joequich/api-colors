import express from 'express';

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (_req, res) => {
    console.log('someone access to the server');
    res.send('Hellow there')
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})