const express = require('express');
const app = express();
const http = require('http');
const cors = require('cors');
const { Server } = require('socket.io');
const server = http.createServer(app);
const path = require('path');

app.use(cors());

const io = new Server(server, {
    cors: {
        origin: 'http://127.0.0.1:3000',
        methods: ["GET", "POST"],
    },
});

io.on("connection", (socket) => {
    console.log(`User connected: ${socket.id}`);

    socket.on("join_room", (data) => {
        socket.join(data);
        // console.log(`User: ${socket.id} successfully joined the room: ${data}`);
    });

    socket.on("send-message", (data) => {
        // console.log(`Mensagem recebida na sala ${data.room} enviada por ${data.remetente}: ${data.message}`);
        io.to(data.room).emit('receive', data);
    });

    socket.on("disconnect", () => {
        console.log(`Usuário: ${socket.id} desconectado`);
    });
});

server.listen(3001, () => {
    console.log('Server is running on port 3001');
});
