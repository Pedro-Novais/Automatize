import { useContext } from 'react'
import { SideBarContext } from './SideBarContext'

import { FaAlignJustify } from "react-icons/fa";
import './style.css'

function SideBar() {

    const { isSidebarOpen, closeSidebar  } = useContext(SideBarContext)

    return (
        <div className='sideBar' style={{display: isSidebarOpen ? 'flex' : 'none'}}>
            <div onClick={closeSidebar}>teste</div>
        </div>
    )
}

export default SideBar