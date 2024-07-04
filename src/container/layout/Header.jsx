import { useContext } from 'react'
import { SideBarContext } from './SideBarContext'

import { FaBars } from "react-icons/fa6";
import './style.css'

function Header() {

    const { openSidebar } = useContext(SideBarContext)

    return (
        <header>
            <FaBars className="iconSideBar" onClick={openSidebar}/>
            <p>Automatize</p>
        </header>
    )
}

export default Header