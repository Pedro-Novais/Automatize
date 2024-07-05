import { TitlePage } from "../../../components/TitlePage"

export function ProjectCard({title}){
    return (
        <div className="cards">
            <TitlePage title={title}/>
        </div>
    )
}