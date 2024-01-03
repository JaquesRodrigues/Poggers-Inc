import { useState } from "react"
import io from 'socket.io-client'
import Chat from './Chat'

const socket = io.connect("https://web-server-2bn2.onrender.com");

function JoinChat() {


    const [nome, setNome] = useState("")
    const [sala, setSala] = useState("")
    const [mostrarChat, setMostrarChat] = useState(false)

    const joinRoom = () => {
        if (nome !== "" && sala !== "") {
            socket.emit("join_room", sala)
            setMostrarChat(true)
        }
    }

    return (
        <div className="app">
            {!mostrarChat ? (
                <div className="joinChatContainer">
                    <h3>Entre no Chat</h3>
                    <input type="text" name="nome-usuario" placeholder="Nome de usuario" onChange={(event) => setNome(event.target.value)} />
                    <input type="text" name="sala" placeholder="Id da Sala" onChange={(event) => setSala(event.target.value)} />
                    <button onClick={joinRoom}>Entrar na Sala</button>
                </div>
            )
                : (
                    <Chat socket={socket} username={nome} room={sala} />
                )}
        </div>
    )
}

export default JoinChat
