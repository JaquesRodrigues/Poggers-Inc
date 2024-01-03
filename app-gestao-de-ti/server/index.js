const OpenAI = require('openai');
const dotenv = require('dotenv');
const express = require('express');
const app = express();
const http = require('http');
const cors = require('cors');
const { Server } = require('socket.io');
const server = http.createServer(app);
const path = require('path');
dotenv.config();
const PORT = process.env.PORT || 3001;

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Supondo que você tem uma rota para o chatbot, por exemplo '/ask'
app.post('/ask', async (req, res) => {
  try {
    const { message } = req.body; // Supondo que o corpo da solicitação tenha uma chave 'message'
    const response = await openai.complete({
      engine: 'davinci',
      prompt: message,
      max_tokens: 50,
    });

    // Aqui você pode manipular a resposta antes de enviá-la de volta ao cliente
    res.json({ botResponse: response.data.choices[0].text.trim() });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Suponha que você tem uma função para enviar mensagem ao servidor
const sendMessageToServer = async (message) => {
  try {
    const response = await fetch('http://127.0.0.1:3001/ask', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    });

    const data = await response.json();
    // Aqui você pode lidar com a resposta do chatbot recebida do servidor
    console.log('Resposta do Chatbot:', data.botResponse);
  } catch (error) {
    console.error('Error:', error);
  }
};

const router = require('./router');

app.use(cors());

const io = new Server(server, {
  cors: {
    origin: 'http://127.0.0.1:3000',
    methods: ['GET', 'POST'],
  },
});

io.on('connection', (socket) => {
  console.log(`User connected: ${socket.id}`);

  socket.on('join_room', (data) => {
    socket.join(data);
    // console.log(`User: ${socket.id} successfully joined the room: ${data}`);
  });

  socket.on('send-message', (data) => {
    // console.log(`Mensagem recebida na sala ${data.room} enviada por ${data.remetente}: ${data.message}`);
    io.to(data.room).emit('receive', data);
  });

  socket.on('disconnect', () => {
    console.log(`Usuário: ${socket.id} desconectado`);
  });
});

app.use(router);

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
