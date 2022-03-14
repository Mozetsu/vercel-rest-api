const express = require('express');
const http = require('http');
const cors = require('cors');
const { Server } = require('socket.io');

const PORT = process.env.PORT || 4000;
const app = express();
app.use(cors());
app.get('/', (req, res) => res.json({ status: 'Online' }));

const server = http.createServer(app);
const io = new Server(server);

io.on('connection', (socket) => {
	console.log(`User Connected: ${socket.id}`);
	socket.emit('connected', socket.id);
	socket.on('disconnect', () => console.log('User Disconnected', socket.id));
});

server.listen(PORT, () => console.log('SERVER RUNNING'));
