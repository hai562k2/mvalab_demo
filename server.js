const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the src directory for development
app.use('/src', express.static(path.join(__dirname, 'src')));
app.use(express.static(__dirname));

// Serve the main HTML file for all routes (SPA routing)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

// Handle all other routes for Angular routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 MVA Lab Angular is running on http://0.0.0.0:${PORT}`);
  console.log(`🎓 Educational platform ready for students!`);
});