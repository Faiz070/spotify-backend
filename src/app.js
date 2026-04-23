const express = require('express');
const cookies = require('cookie-parser');
const authRoutes = require('./routes/auth.routes');
const musicRoutes = require('./routes/music.routes');
const registerValidation = require('./middleware/validation.middleware');

const app = express();
app.use(express.json());
app.use(cookies());


app.get('/', (req, res) => {
  res.json({ message: 'Spotify API' });
});

app.use('/api/auth',authRoutes);
app.use('/api/music',musicRoutes);


module.exports = app;