import React, { useEffect, useState } from 'react'
import ScrolltoBottom from 'react-scroll-to-bottom'
import { v4 as uuidv4 } from 'uuid';
import io from 'socket.io-client';

const socket = io.connect("http://127.0.0.1:3001");

function Chat({ socket, username, room }) {

    const [currentMessage, setCurrentMessage] = useState("")
    const [mensagens, setMensagens] = useState([])

    const send = () => {
        if (currentMessage.trim() !== '') {
            const dadosMensagem = {
                id: uuidv4(),
                room: room,
                remetente: username,
                message: currentMessage,
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            };

            setMensagens(prevMensagens => [...prevMensagens, dadosMensagem]);
            socket.emit('send-message', dadosMensagem);
            setCurrentMessage('');
        }
    };

    useEffect(() => {
        const receiveMessage = (data) => {
            // console.log(`Mensagem recebida de ${data.remetente}: ${data.message}`);
            if (data.remetente !== username) {
                setMensagens(prevMensagens => [...prevMensagens, data]);
            }
        };

        socket.on('receive', receiveMessage);

        return () => {
            socket.off('receive', receiveMessage);
        };
    }, []);
  
    return (
        <div className="chat-window">
            <div className="chat-header">
                <p>Chat</p>
            </div>
            <div className="chat-body">
                <ScrolltoBottom className="message-container">
                {mensagens.map((dadosMensagem, index) => {
                    return <div className="message" key={index} id={username === dadosMensagem.remetente ? "you" : "other"}>
                        <div className='message-content'>
                            <p>{dadosMensagem.message}</p>
                        </div>
                        <div className='message-meta'>
                            <p id="time">{dadosMensagem.time}</p>
                            <p id="author">{dadosMensagem.remetente}</p>
                        </div>
                    </div>;
                })}
                </ScrolltoBottom>
            </div>
            <div className="chat-footer">
                <input name="enviar-mensagem" type="text" onClick={send} value={currentMessage} placeholder="Mandar mensagem" onChange={(event) => setCurrentMessage(event.target.value)} onKeyDown={(event) => {
                    event.key === "Enter" && send();
                }} />
                <button onClick={send}>&#9658;</button> 
            </div>
        </div>
    )
}

export default Chat
