import { Link } from "react-router-dom"

export function ContentSideBar(){
    return (
        <div className="contentLinksSideBar">
            <ul>
                <Link to={'/'}><li>Perfil</li></Link>
                <Link to={'/projects'}><li>Projetos</li></Link>
                <Link to={'/signature'}><li>Serviços</li></Link>
            </ul>
        </div>
    )
}