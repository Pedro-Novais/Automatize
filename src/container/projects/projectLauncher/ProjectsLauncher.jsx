import { useFetch } from "../../../hooks/useFetch"
import { useParams, useNavigate } from 'react-router-dom'
import '../style.css'

function ProjectPlay() {

    const {id} = useParams()
    const navigate = useNavigate()

    const {data, loading, error} = useFetch(`http://localhost:4000/${id}`)

    if(loading){

        return <div>Carregando...</div>
    }

    if(error){
        console.log(error)
        return navigate('/projects')
    }

    return (
        <div className="content">
            <div className='contentSection'>
                <p>{data.name}</p>
                <p>{data.creation_date}</p>
            </div>
        </div>
    )
}

export default ProjectPlay