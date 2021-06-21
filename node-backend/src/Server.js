const express = require('express');
const cors = require('cors');
const socketio = require('socket.io');



// INITIALIZATION

const app = express();
app.use(cors());
const server = app.listen(4000, () => {
    console.log('listening for requests on port 4000');
});


// USE APPROPRIATE ROUTES

const authRoutes = require('./routes/AuthRoutes');
app.use('/auth', authRoutes);

const historyRoutes = require('./routes/HistoryRoutes');
app.use('/history', historyRoutes);

const profileRoutes = require('./routes/ProfileRoutes');
app.use('/profile', profileRoutes);


// SOCKET IO

const io = socketio(server);
io.on('connection', (socket) => {

    console.log('new socket connection', socket.id);

    // socket events here

});