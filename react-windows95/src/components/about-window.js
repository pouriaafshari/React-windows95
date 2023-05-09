import React from "react"

export default function AboutWindow()
{
    function CloseWindow(event)
    {
        event.target.parentElement.parentElement.remove()
    }

    return(
        <div id="aboutme-window" onclick="MoveToTop(this)">
            <div class="window-header" onmouseenter="MoveWindow(this)">
                <h3>About Me</h3>
                <button class="x-button" onClick={ CloseWindow }>X</button>
            </div>
    
            <div id="aboutme-body">
                <b style={{fontSize: "24px"}}>Pouria Afshari</b><br/><br/>
                Phone: +36 30 413 2954 <br/>
                Address: Debr/ecen, Hungary <br/>
                Email: <a target="_blank" href="mailto:pooriyaafshari81@gmail.com">pooriyaafshari81@gmail.com</a><br/>
                Education: ComputerScience BSc <a href="https://www.edu.unideb.hu/" target="_blank">University of Debr/ecen</a> (2021 - 2024)
            </div>
        </div>
    )
}