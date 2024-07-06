import { useState, useEffect } from "react"
import { ContentProject } from "./ContentProject"
import { ContentInfoProject } from "./ContentInfoProject"

import { useFetch } from "../../../hooks/useFetch"

function Projects() {

    const [popupInfo, setPopupInfo] = useState(false)

    const { data, loading, error } = useFetch("http://localhost:4000/project")

    const viewPopupInfo = (state) => {
        setPopupInfo(state)
    }

    if (loading) {

        return <div>teste</div>
    }

    if (error) {
        return <div>{error}</div>
    }

    console.log(data)
    return (
        <div className="content">

            <ContentProject actionState={viewPopupInfo} dataPopup={popupInfo} cardsKey={data.projects.key} />
            {popupInfo && <ContentInfoProject actionState={viewPopupInfo} />}

        </div>
    )
}

export default Projects