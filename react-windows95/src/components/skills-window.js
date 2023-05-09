import React from "react"

export default function SkillsWindow()
{
    function CloseWindow(event)
    {
        event.target.parentElement.parentElement.remove()
    }

    return(
        <div id="skills-window" onClick={()=>{console.log("")}}>
            <div className="window-header" onmouseenter="MoveWindow(this)">
                <h3>Skills</h3>
                <button className="x-button" onClick={ CloseWindow }>X</button>
            </div>
    
            <div className="tools-bar">
                <div><u>F</u>ile</div>
                <div><u>E</u>dit</div>
                <div><u>S</u>earch</div>
                <div><u>H</u>elp</div>
            </div>
    
            <div id="skills-body">
                <p>Web development : <br/><br/> HTML <br/> CSS <br/> JavaScript <br/> Python (flask) <br/> MYSQL <br/><br/>Programming : <br/><br/>C <br/>C++<br/>Java<br/>Unity 3D (C#)<br/><br/> Other :<br/><br/>English (IELTS 6.5)<br/>Linux<br/>GIT
                </p>
            </div>
        </div>
    )
}