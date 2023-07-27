import express from 'express';

const app = express();

app.use('/', (req, res) => {
    res.json({ message: 'Welcome to application. '})
})

app.listen(8080, () => {
    console.log('server running new')
})
