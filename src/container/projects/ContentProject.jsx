import { TitlePage } from '../../components/TitlePage'
import { ContentPage } from '../../components/ContentPage'
import { ProjectCard } from './components/ProjectCard'
import './style.css'

export function ContentProject() {
    const teste = [1,4,7]
    const title = ["Automação email cobrança", "Automação email faturamento", "Automação teste", "Chega de automação", "Último titulo"]

    let typejustify = 'flex-start'

    if (teste.length < 3) {

        typejustify = 'center'
    }

    return (
        <div className='contentSection'>
            <TitlePage title="Projetos" />
            <ContentPage>
                <div className='containerProjects'>
                    <div className='cardFlow'
                        style={{ justifyContent: `${typejustify}` }}>
                        {teste.map((element, index) => (
                            <ProjectCard key={index} title={title[index]} />
                        ))}

                        <ProjectCard title='Soliçitar Projeto' offerService = {true} />
                    </div>
                </div>
            </ContentPage>
        </div>
    )
}