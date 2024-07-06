import { useState } from "react"
import { ContentProject } from "./ContentProject"
import { ContentInfoProject } from "./ContentInfoProject"
function Projects() {

    const [data, setData] = useState(null)
    const [popupInfo, setPopupInfo] = useState(false)

    const viewPopupInfo = (infos, state) => {

        setData(infos)
        setPopupInfo(state)

    }
   
    return (
        <div className="content">
            <ContentProject actionState={viewPopupInfo} dataPopup = {popupInfo}/>
            {
                popupInfo && <ContentInfoProject actionState={viewPopupInfo} />
            }
        </div>
    )
}

export default Projects