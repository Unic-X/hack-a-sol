const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));

// Simple route
app.get('/', (req, res) => {
    res.send("Hello, this is the backend!");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
app.get("/status", (request,response)=>{
    const status = {
        "Status": "Running"
    };
    response.send(status);
    console.log(request);
})
