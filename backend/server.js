const express = require('express');
const app = express();
const port = 3000;

// Middleware for parsing JSON and serving static files
app.use(express.json());
app.use(express.static('public')); // Serve your frontend files

// Example API endpoint
app.get('/api', (req, res) => {
    res.send('Backend is working!');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

const path = require('path');
app.use(express.static(path.join(__dirname,'../frontend')));

fetch('http://localhost')
