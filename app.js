// Import required modules
const express = require('express');
const path = require('path');

// Create an Express application
const app = express();

// Define the port
const PORT = 3000;

// Set up middleware to serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));
app.use('/maker', express.static(path.resolve(__dirname, 'public', 'leveleditor')));


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
