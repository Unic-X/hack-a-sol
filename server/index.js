
const express = require('express');
const cors = require('cors'); // Import cors
const playerRoutes = require('./routes/playerRoutes');

const app = express();

// Use CORS middleware
app.use(cors({
    origin: 'http://localhost:3000' // Allow only your React app
}));

// Middleware
app.use(express.json());

// Player Routes
app.use('/api', playerRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

