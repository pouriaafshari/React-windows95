import React from "react"

import Icon from "./icon"

import AboutIcon from "../img/about.png"
import NotepadIcon from "../img/notepad.png"
import FolderIcon from "../img/folder.png" 
import ResumeIcon from "../img/resume.png"
import GithubIcon from "../img/github.png"
import LinkedinIcon from "../img/linkedin_pixel_logo_icon_181925.png"

class ParentComp extends React.Component
{
    childRefs = []

    render()
    {
        return(
            <div>
                <Icon ref={c => this.childRefs.push(c)} IconName="About me" IconImage={ AboutIcon } />
                <Icon ref={c => this.childRefs.push(c)} IconName="Skills" IconImage={ NotepadIcon } />
                <Icon ref={c => this.childRefs.push(c)} IconName="Projects" IconImage={ FolderIcon } />
                <Icon ref={c => this.childRefs.push(c)} IconName="Resume" IconImage={ ResumeIcon } />
                <Icon ref={c => this.childRefs.push(c)} IconName="Github" IconImage={ GithubIcon } />
                <Icon ref={c => this.childRefs.push(c)} IconName="Linkedin" IconImage={ LinkedinIcon } />
                <button onClick={this.SelectIcons}>No</button>
            </div>
        )
    }

    SelectIcons = ()=> 
    {
        this.childRefs.forEach(child => {
            console.log(child.)
        })  
    }
}

export default ParentComp;