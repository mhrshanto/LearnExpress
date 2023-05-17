// Middle Ware Practice
const express = require('express');

app = express();


// Application Middleware

app.use((req, res, next) => {
    console.log('This is middleware for application');
    next();
});

// Route Middleware

app.use('/about', (req, res, next) => {
    console.log('This is Route Middleware for about page');
    next();
});

app.get('/', (req, res) => {
    res.send("This is Homepage");
});

app.get('/about', (req, res) => {
    res.send("This is Aboutpage");
});

app.get('/contact', (req, res) => {
    res.send("This is Contactpage");
});

app.get('/help', (req, res) => {
    res.send("This is Helppage");
});

app.listen(8000, () => {
    console.log('Server Running Success')
})