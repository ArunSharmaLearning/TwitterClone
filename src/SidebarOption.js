import React from 'react'
import "./SidebarOption.css"

function SidebarOption({active ,Icon , text }) {
    return (
        <div className={`sidebarOption ${active && 'sidebarOption_active'}`}>
            <Icon className="icon"/>
            <h2 className="text"> {text}</h2>
        </div>
    )
}

export default SidebarOption
