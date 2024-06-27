// Create web server
const express = require('express');
const app = express();

// Create a route for GET request
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Create a route for POST request
app.post('/', (req, res) => {
    res.send('Got a POST request');
});

// Create a route for PUT request
app.put('/user', (req, res) => {
    res.send('Got a PUT request at /user');
});

// Create a route for DELETE request
app.delete('/user', (req, res) => {
    res.send('Got a DELETE request at /user');
});

// Create a route for /user/:id
app.get('/user/:id', (req, res) => {
    res.send(req.params.id);
});

// Create a route for /user/:id/:name
app.get('/user/:id/:name', (req, res) => {
    res.send(req.params);
});

// Create a route for /user/:id/:name
app.get('/user/:id/:name', (req, res) => {
    res.send(req.params);
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

// Run the server: node comments.js
// Open the browser and type http://localhost:3000
// You will see 'Hello World!' on the browser
// You can test other routes by using Postman or curl
