import React, {useState, useEffect} from "react"
import SkillsWindow from "./skills-window"
import AboutWindow from "./about-window"

import AboutIcon from "../img/about.png"
import NotepadIcon from "../img/notepad.png"
import FolderIcon from "../img/folder.png" 
import ResumeIcon from "../img/resume.png"
import GithubIcon from "../img/github.png"
import LinkedinIcon from "../img/linkedin_pixel_logo_icon_181925.png"

export default function Desktop()
{
    const [OpenWindows, AddWindow] = useState(0)

    function Icon(props)
    {
        const [Highlight, SetHighlight] = useState(false)

        useEffect(()=>{
            const RemoveHighlight = (event) => {
                SetHighlight(false)
            }
            document.addEventListener('click', RemoveHighlight);
        })

        const handleClick = event => {
            switch (event.detail) {
            case 1: {
                setTimeout(() => {
                    SetHighlight(true)
                }, 50);
                break;
            }
            case 2: {
                AddWindow(OpenWindows + 1)
                break;
            }
            case 3: {
                console.log('triple click');
                break;
            }
            default: {
                break;
            }
            }
        };

        const handleOpenWindow = () =>
        {
            console.log("No")
        }

        return(
            <div className={ `icon${Highlight? " highlight-icon" : ""}` } onClick={ handleClick } >
                <img src={ props.IconImage } />
                <p>{ props.IconName }</p>
            </div>
        );
    }


    const renderSkills = () => {
        const bComponents = [];

        for (let i = 0; i < OpenWindows; i++) {
            bComponents.push(<SkillsWindow key={i} />);
        }

        return bComponents;
    };

    return(
        <>
            <Icon IconName="About me" IconImage={ AboutIcon } />
            <Icon IconName="Skills" IconImage={ NotepadIcon } />
            <Icon IconName="Projects" IconImage={ FolderIcon } />
            <Icon IconName="Resume" IconImage={ ResumeIcon } />
            <Icon IconName="Github" IconImage={ GithubIcon } />
            <Icon IconName="Linkedin" IconImage={ LinkedinIcon } />
            {renderSkills()}
        </>
    );
}