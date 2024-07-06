import { ContentAboutCard } from "./components/ContentAboutCard";
import { Buttons } from "../../components/Buttons";
import { FaX } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa6";

export function ContentInfoProject({ actionState }) {

    function close() {
        actionState(null, false)
    }

    return (
        <div className='contentInfosCard'>
            <FaX className="close"onClick={close} />
            <h2>Automação teste</h2>
            <div className="infosCard">
                <ContentAboutCard title="Status" info="Ativo" />
                <ContentAboutCard title="Data de criação" info="05/07/2024" />
                <ContentAboutCard title="Data de validade" info="05/08/2024" />
                <ContentAboutCard title="Último uso" info="05/07/2024 - 13:28:47" />
                <ContentAboutCard title="Uso total" info="04" />
            </div>
            <Buttons style="buttonInfoCard">
                <FaPlay className="play"/>
            </Buttons>
        </div>
    )
}