const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    // Add other fields as necessary
});

const Player = mongoose.model('Player', playerSchema);

module.exports = Player;

