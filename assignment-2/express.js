import express from 'express';

const app = express();

app.use('/users', (req, res) => {
    res.send('<h1>You are on the users page</h1>');
})

app.use('/', (req, res) => {
    res.send('<h1>Dashboard</h1>')
});

app.listen(3000);