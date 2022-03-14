const express = require('express');
const app = express();
const http = require('http');
const cors = require('cors');
const { Server } = require('socket.io');

app.use(cors());
app.get('/', (req, res) => res.json({ status: 'Online' }));

const server = http.createServer(app);

const io = new Server(server);

io.on('connection', (socket) => {
	console.log(`User Connected: ${socket.id}`);
	socket.emit('connected', socket.id);
	socket.on('disconnect', () => console.log('User Disconnected', socket.id));
});

server.listen(3001, () => console.log('SERVER RUNNING'));
