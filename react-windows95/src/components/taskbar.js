import React from 'react'

import StartIcon from '../img/windose.png';
import SysIcon from '../img/system.png'

export default function Taskbar()
{

    return(
        <div id="taskbar">
            <div id="start-button" onClick="StartButtonOpen()">
                <img src={ StartIcon } alt="" />
                <span>Start</span>
            </div>
            
            <div id="tabs">
                <div class="tab" id="welcome-tab">
                    <img src={ SysIcon } alt="" />
                    <span>Welcome</span>
                </div>
            </div>

            <div id="clock">
                <span id="time-text">6:15 PM</span>
            </div>
        </div>
    );
}