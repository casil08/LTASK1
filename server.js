const express = require('express');
const app = express();

app.get('/home', (req, res) => {
    res.send('Welcome to Home Page');
});

app.get('/about', (req, res) => {
    res.send('About Us');
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
