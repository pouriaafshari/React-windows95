import React, {useState, useEffect} from "react"

import AboutIcon from "../img/about.png"
import NotepadIcon from "../img/notepad.png"
import FolderIcon from "../img/folder.png" 
import ResumeIcon from "../img/resume.png"
import GithubIcon from "../img/github.png"
import LinkedinIcon from "../img/linkedin_pixel_logo_icon_181925.png"

export default function Desktop()
{
    const [OpenSkills, AddSkills] = useState(0)
    const [OpenAbout, AddAbout] = useState(0)
    const [OpenProjects, AddProjects] = useState(0)

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
                if (props.IconName == "Skills") AddSkills(OpenSkills + 1)
                else if (props.IconName == "About me") AddAbout(OpenAbout + 1)
                else if (props.IconName == "Projects") AddProjects(OpenProjects + 1)
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

        for (let i = 0; i < OpenSkills; i++) {
            bComponents.push(<SkillsWindow key={i} />);
        }

        return bComponents;
    };
    const renderAbout = () => {
        const bComponents = [];

        for (let i = 0; i < OpenAbout; i++) {
            bComponents.push(<AboutWindow key={i} />);
        }

        return bComponents;
    };
    const renderProjects = () => {
        const bComponents = [];

        for (let i = 0; i < OpenProjects; i++) {
            bComponents.push(<ProjectsWindow key={i} />);
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
            {renderAbout()}
            {renderProjects()}
        </>
    );



    function SkillsWindow()
    {
        function CloseWindow()
        {
            AddSkills(OpenSkills - 1)
        }

        return(
            <div id="skills-window" onClick={()=>{console.log("")}}>
                <div className="window-header" onmouseenter="MoveWindow(this)">
                    <h3>Skills</h3>
                    <button className="x-button" onClick={ CloseWindow }><span>X</span></button>
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

    function AboutWindow()
    {
        function CloseWindow()
        {
            AddAbout(OpenAbout - 1)
        }

        return(
            <div id="aboutme-window" onclick="MoveToTop(this)">
                <div class="window-header" onmouseenter="MoveWindow(this)">
                    <h3>About Me</h3>
                    <button class="x-button" onClick={ CloseWindow }><span>X</span></button>
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

    function ProjectsWindow()
    {
        function CloseWindow()
        {
            AddProjects(OpenProjects - 1)
        }

        return(
            <div id="projects-window" onclick="MoveToTop(this)">
                <div class="window-header" onmouseenter="MoveWindow(this)">
                    <h3>Projects</h3>
                    <button class="x-button" onClick={CloseWindow}><span>X</span></button>
                </div>
        
                <div class="tools-bar">
                    <div><u>F</u>ile</div>
                    <div><u>E</u>dit</div>
                    <div><u>S</u>earch</div>
                    <div><u>H</u>elp</div>
                </div>
        
                <div id="projects-body">
                    <a class="project" href="https://pouriaafshari.github.io/Hair-Physics-JS/" target="_blank">
                        <div class="prcomment">Hair Physics<br/><br/>I wanted to make a Pixel art game for br/owser, this was my experiment to make game look smoother.
                        </div>
                        <div class="prpic" style={{backgroundImage: `url('img/HairPhysics.png')`}}></div>
                    </a>

                    <a class="project" href="https://pouriaafshari.github.io/MemoryGame/" target="_blank">
                        <div class="prcomment">Memory Game<br/><br/>This is one of my first JavaScript projects.
                        </div>
                        <div class="prpic" style={{backgroundImage: `url('./img/MemmoryGame.png')`}}></div>
                    </a>
                </div>
            
                <div class="projects-footer">2 items &nbsp;&nbsp; | &nbsp;&nbsp; All source codes are on Github</div>
            </div>
        )
    }
}