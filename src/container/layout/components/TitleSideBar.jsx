import React from "react";
import { FaReply   } from "react-icons/fa6";

export function TitleSideBar({eventClose, style}){

    return (
        <div className={style}>
            <p style={{ fontSize: '20px' }}>Automatize</p>
            <FaReply   onClick={eventClose} className="iconCloseSideBar"/>
        </div>
    )
}