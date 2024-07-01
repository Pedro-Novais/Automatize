import { useContext } from 'react'
import { SideBarContext } from './SideBarContext'

import './style.css'

function Header() {

    const { openSidebar } = useContext(SideBarContext)

    return (
        <header>
            <div className='btnSideBar' onClick={openSidebar}>Clique Aqui</div>
            <p>Automatize</p>
        </header>
    )
}

export default Header