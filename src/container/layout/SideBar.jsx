import { useContext } from 'react'
import { SideBarContext } from './SideBarContext'
import { TitleSideBar } from "./components/TitleSideBar";
import { ContentSideBar } from './components/ContentSideBar';
import './style.css';

function SideBar() {

    const { isSidebarOpen, closeSidebar } = useContext(SideBarContext)

    return (
        <div className='sideBar' style={{ display: isSidebarOpen ? 'flex' : 'none' }}>
            <TitleSideBar eventClose={closeSidebar} style="topSideBar" />
            <ContentSideBar />
        </div>
    )
}

export default SideBar