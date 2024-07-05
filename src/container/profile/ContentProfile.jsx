import { TitlePage } from '../../components/TitlePage'
import { ContentPage } from '../../components/ContentPage'
import './style.css'

export function ContentProfile(){
    return (
        <div className="contentSection">
            <TitlePage title="Perfil"/>
            <ContentPage style=""/>
        </div>
    )
}