import { TitlePage } from '../../components/TitlePage'
import { ContentPage } from '../../components/ContentPage'
import './style.css'

export function ContentProject(){
    return (
        <div className='contentSection'>
            <TitlePage title="Projetos"/>
            <ContentPage />
        </div>
    )
}