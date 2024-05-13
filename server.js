const express = require('express');
const app = express();
const port = 3000; // You can change this to any available port

// Serve static files (HTML, CSS, JavaScript, images)
app.use(express.static('public'));

// Add routes for your HTML pages
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/products', (req, res) => {
  res.sendFile(__dirname + '/public/products.html');
});

app.get('/contact', (req, res) => {
  res.sendFile(__dirname + '/public/contact.html');
});

app.get('/cart', (req, res) => {
  res.sendFile(__dirname + '/public/cart.html');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});