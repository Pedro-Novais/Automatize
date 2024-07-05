import { useContext } from 'react'
import { SideBarContext } from '../../context/SideBarContext'
import { ContentSideBar } from './components/ContentSideBar';
import './style.css';

function SideBar() {

    const { isSidebarOpen, closeSidebar } = useContext(SideBarContext)

    return (
        <div className='sideBar' style={{ display: isSidebarOpen ? 'flex' : 'none' }}>
            <ContentSideBar />
        </div>
    )
}

export default SideBar