const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// In-memory database
let items = [
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
];

// Get all items
app.get('/api/items', (req, res) => {
    res.json(items);
});

// Add a new item
app.post('/api/items', (req, res) => {
    const newItem = { id: items.length + 1, name: req.body.name };
    items.push(newItem);
    res.json(newItem);
});

// Start the server
app.listen(PORT, () => {
    console.log(Server running on http://localhost:${PORT});
});