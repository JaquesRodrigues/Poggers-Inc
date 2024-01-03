import icon from './assets/icon.jpeg'
import menuIcon from './assets/menu.png'
import chatbot from './assets/chatbot.png'
import maisIcon from './assets/mais.png'
import planilhaIcon from './assets/planilha.png'
import webChatIcon from './assets/web-chat.png'
import Ativos from "./Components/Ativos";
import WebChat from "./Pages/WebChat";
import { Route, Routes, } from "react-router";
import { Link } from "react-router-dom";
import ArquivosPage from './Pages/ArquivosPage';
import ChartsPage from './Pages/ChartsPage';
import ChatBotPage from './Pages/ChatBotPage'
import { useState } from 'react'
import { UsageData } from './Data/UsageData'

function App() {

  const [userData, setUserdata] = useState({
    labels: UsageData.map((data) => data.Month),
    datasets: [{
      label: 'Uso de Dados',
      data: UsageData.map((data) => data.Usage),
      backgroundColor: ['#ef476f', '#ffd166', '#06d6a0', '#118ab2', '#073b4c'],
      borderColor: 'black',
      borderWidth: 2
    }]
  });
  return (
    <>
      <div className="flex flex-col justify-between fixed top-0 left-0 h-screen w-16 bg-gray-800 text-white">
        <div className="links">
          <Link to='/'>
            <SideBarIcon img={menuIcon} text='Menu de Ativos 💻' />
          </Link>
          <Link to='/Graficos'>
            <SideBarIcon img={maisIcon} text='Graficos 📊' />
          </Link>
          <Link to='/Planilhas'>
            <SideBarIcon img={planilhaIcon} text='Planilhas 📝' />
          </Link>
          <Link to='/WebChat'>
            <SideBarIcon img={webChatIcon} text='WebChat Geral 💬' />
          </Link>
          <Link to='/Chatbot'>
            <SideBarIcon img={chatbot} text='chatbot 🤖' />
          </Link>
        </div>
        <div>
          <img src={icon} alt="" className='my-3 p-2' />
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Ativos />} />
        <Route path="/WebChat" element={<WebChat />} />
        <Route path="/Graficos" element={<ChartsPage chartsData={userData} className='chart' />} />
        <Route path="/Planilhas" element={<ArquivosPage />} />
        <Route path="/Chatbot" element={<ChatBotPage />} />
      </Routes>
    </>
  );
}

const SideBarIcon = ({ img, text = "Tooltip 💡" }) => (
  <div className="sidebar-icon group cursor-pointer">
    <img src={img} alt={text} />
    <span className='sidebar-tooltip group-hover:scale-100'>
      {text}
    </span>
  </div>
)

export default App;
