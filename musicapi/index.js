const express = require('express');
const mongoose = require('mongoose');
const musicRoutes = require('./routes/musicRoutes');


// Create Express application
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Connect to MongoDB database
mongoose.connect('mongodb+srv://samiheina96:Pissapoika45@cluster0.dvipc4p.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => {
        console.log('Connected to MongoDB');
    }) 
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error.message);
    });
// Routes
    app.use('/api/music', musicRoutes);

app.get("/", (req, res) => {
    res.send("Hello from Node API Server Updated");
  });

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
