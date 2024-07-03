import { useContext } from 'react'
import { SideBarContext } from './SideBarContext'

import { FaAlignJustify } from "react-icons/fa";
import './style.css'

function Header() {

    const { openSidebar } = useContext(SideBarContext)

    return (
        <header>
            <FaAlignJustify className="iconSideBar" onClick={openSidebar}/>
            <p>Automatize</p>
        </header>
    )
}

export default Header