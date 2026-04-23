const musicModel = require('../models/music.models');
const { UploadFile } = require('../services/storage.service');
const albumModel = require('../models/album.models');
const jwt = require('jsonwebtoken');

async function createMusic(req, res) {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (decoded.role !== 'artist') {
            return res.status(403).json({
                message: "You don't have permission to perform this action"
            });
        }
        const file = req.file;
        const { title } = req.body;
        const uploadResult = await UploadFile(file.buffer);
        const music = await musicModel.create({
            id: music._id,
            uri: music.url,
            title: music.title,
            artist: music.artist  // adjust based on your JWT payload
        });
        return res.status(201).json({
            message: "Music uploaded successfully",
            music
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Unauthorized" });
    }
}

async function createAlbum(req, res) {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (decoded.role !== 'artist') {
            return res.status(403).json({
                message: "You don't have permission to create music"
            });
        }
        const { title, musics } = req.body;
        const album = await albumModel.create({
            title,
            artist: decoded.id,
            music: musics
        });
        return res.status(201).json({
            message: "Album created successfully",
            album
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Unauthorized" });
    }
}

module.exports = { createMusic, createAlbum };