import { TitlePage } from '../../../components/TitlePage'
import { ContentPage } from '../../../components/ContentPage'
import { ProjectCard } from './components/ProjectCard'
import '../style.css'

export function ContentProject({ actionState, dataPopup, cardsKey }) {

    let typejustify = 'flex-start'

    if (cardsKey.length < 3) {

        typejustify = 'center'
    }

    return (
        <div
            className='contentSection'
            style={{
                opacity: dataPopup ? '.5' : '1',
                pointerEvents: dataPopup ? 'none' : 'auto'
            }}>
            <TitlePage title="Projetos" />
            <ContentPage>
                <div className='containerProjects'>
                    <div className='cardFlow'
                        style={{
                            justifyContent: `${typejustify}`
                        }}>
                        {cardsKey.map((element, index) => (
                            <ProjectCard key={index} title="teste" stateInfo={actionState} statePlay={element} />
                        ))}

                        <ProjectCard title='Soliçitar Projeto' offerService={true} />
                    </div>
                </div>
            </ContentPage>
        </div>
    )
}