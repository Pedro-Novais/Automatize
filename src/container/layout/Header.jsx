import { useContext } from 'react'
import { SideBarContext } from '../../context/SideBarContext'
import { Link } from 'react-router-dom';

import { FaBars } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa6";
import './style.css'

function Header(userName) {

    userName = "Pedro Henrique"
    const { isSidebarOpen, openSidebar, closeSidebar } = useContext(SideBarContext)

    return (
        <header>
            <div className='iconName'>
                <FaBars className="iconSideBar" onClick={isSidebarOpen ? closeSidebar : openSidebar} />
                <p>Automatize</p>
            </div>
            <Link className='linkProfileStyle' to={'/'}>
                <div className='infoProfile'>
                    <FaRegUser className="iconProfile" onClick={() => { console.log('teste') }} />
                    <p>{userName}</p>
                </div>
            </Link>
        </header>
    )
}

export default Header