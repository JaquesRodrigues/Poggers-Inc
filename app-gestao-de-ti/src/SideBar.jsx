import menuIcon from './assets/menu.png'
import maisIcon from './assets/mais.png'
import planilhaIcon from './assets/planilha.png'
import webChatIcon from './assets/web-chat.png'

function SideBar() {


    return(
        <div className="flex flex-col fixed top-0 left-0 h-screen w-16 bg-gray-800 text-white">
            <SideBarIcon img={menuIcon} />
            <SideBarIcon img={maisIcon} />
            <SideBarIcon img={planilhaIcon} />
            <SideBarIcon img={webChatIcon} />
        </div>
    )
}

const SideBarIcon = ({ img, text = "Tooltip 💡" }) => (
    <div className="sidebar-icon group">
        <img src={img} alt="" />
        <span className='sidebar-tooltip group-hover:scale-100'>
            {text}
        </span>
    </div>
)

export default SideBar;