const Music = require('../models/music');

// Controller function to get all music
exports.getAllMusic = async (req, res) => {
    try {
        // Fetch all music from the database
        const allMusic = await Music.find();
        // Send the music data as JSON response
        res.json(allMusic);
    } catch (error) {
        // If an error occurs, send an error response
        res.status(500).json({ message: error.message });
    }
};

// Controller function to get music by ID
exports.getMusicById = async (req, res) => {
    try {
        // Fetch music by ID from the database
        const music = await Music.findById(req.params.id);
        // If music with the specified ID is not found, return 404 status code
        if (!music) {
            return res.status(404).json({ message: 'Music not found' });
        }
        // Send the music data as JSON response
        res.json(music);
    } catch (error) {
        // If an error occurs, send an error response
        res.status(500).json({ message: error.message });
    }
};

// Controller function to add new music
exports.addMusic = async (req, res) => {
    try {
        // Create a new music document based on request body
        const newMusic = new Music(req.body);
        // Save the new music document to the database
        await newMusic.save();
        // Send the newly created music data as JSON response
        res.status(201).json(newMusic);
    } catch (error) {
        // If an error occurs, send an error response
        res.status(400).json({ message: error.message });
    }
};

// Controller function to update music by ID
exports.updateMusicById = async (req, res) => {
    try {
        // Update the music document with the specified ID based on request body
        await Music.findByIdAndUpdate(req.params.id, req.body);
        // Fetch the updated music document
        const updatedMusic = await Music.findById(req.params.id);
        // Send the updated music data as JSON response
        res.json(updatedMusic);
    } catch (error) {
        // If an error occurs, send an error response
        res.status(400).json({ message: error.message });
    }
};

// Controller function to delete music by ID
exports.deleteMusicById = async (req, res) => {
    try {
        // Delete the music document with the specified ID
        await Music.findByIdAndDelete(req.params.id);
        // Send a success message as response
        res.json({ message: 'Music deleted successfully' });
    } catch (error) {
        // If an error occurs, send an error response
        res.status(500).json({ message: error.message });
    }
};
