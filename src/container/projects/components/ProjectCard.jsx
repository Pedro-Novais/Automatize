import { TitlePage } from "../../../components/TitlePage"
import { ContentAboutCard } from "./ContentAboutCard"
import { Buttons } from "../../../components/Buttons"

import { FaRegClipboard } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa6";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { BsJustify } from "react-icons/bs";

export function ProjectCard({ title, offerService = false }) {

    const actionInfo = () => {
        console.log('visualizar informações!')
    }

    const actionPlay = () => {
        console.log('Rodar a automação!')
    }

    const actionNewService = () => {
        console.log('Soliçitar novos serviços!')
    }

    return (
        <div className="cards">
            <TitlePage title={title} />
            <div className="contentAboutCard" style={offerService ? {alignItems: 'center'} : {}}>
                {
                    !offerService ?
                        <>
                            <ContentAboutCard title="Status" info="Ativo" />
                            <ContentAboutCard title="Data de criação" info="05/07/2024" />
                            <ContentAboutCard title="Data de validade" info="05/08/2024" />
                            <ContentAboutCard title="Último uso" info="05/07/2024 - 13:28:47" />
                            <ContentAboutCard title="Uso total" info="04" />
                        </> :
                        <>
                        
                        <p>Adquirir novo projeto!</p>
                      
                        </>
                }
            </div>
            <div className="contentButtonsCard" style={offerService ? {justifyContent:'center'} : {}}>
                {
                    !offerService ?
                        <>
                            <Buttons style='styleButtons' action={actionInfo}>
                                <FaRegClipboard />
                            </Buttons>
                            <Buttons style='styleButtons' action={actionPlay}>
                                <FaPlay />
                            </Buttons>
                        </> :
                        <Buttons style='styleButtons' action={actionNewService}>
                            <FaHandHoldingDollar />
                        </Buttons>
                }
            </div>
        </div>
    )
}