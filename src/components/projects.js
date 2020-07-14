import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faFile, faQuestion, faSquare, faProjectDiagram, faSmile } from '@fortawesome/free-solid-svg-icons'
const Project = ()=>{
    return (
        <div className="projectSection" id="project">
            <div className="Section">
                <div className="element_card">
                    <p>
                        <p>Quora Clone <FontAwesomeIcon icon={faSmile}/></p>
                        <a href="https://quora-clone-web.herokuapp.com/home/">Site link <FontAwesomeIcon icon={faFile}/> </a>
                        <br/>
                        <br/>
                        <a href="https://4k45hv3rm4/github/quora-clone">Github link <FontAwesomeIcon icon={faFile}/> </a>

                    </p>
                </div>
                <div className="element_card">
                    <p>
                        <p>Freshily Web</p>
                        <a href="https://freshily-web.herokuapp.com/">Live link <FontAwesomeIcon icon={faFile}/> </a>
                        <br/>
                        <br/>
                        <a href="https://4k45hv3rm4/github/freshily">Github Repo <FontAwesomeIcon icon={faFile}/> </a>
                        </p>
                </div>
                <div className="element_card">
                    <p>
                        <p>Multi User Blog Site</p>
                        <a href="http://thegreatblog.herokuapp.com/blog/">Live link <FontAwesomeIcon icon={faFile}/> </a>
                        <br/><br/>
                        <a href="https://4k45hv3rm4/github/dev-journal">Github Repo <FontAwesomeIcon icon={faFile}/> </a>
                    </p>
                </div>
                <div className="element_card">
                    <p>
                    <p>Blog Site </p>
                        <a href="http://akashwebblog.herokuapp.com/blog">Live link <FontAwesomeIcon icon={faFile}/> </a>
                        <br/><br/>
                        <a href="https://4k45hv3rm4/github/web-blog">Github Repo <FontAwesomeIcon icon={faFile}/> </a>
                    </p>
                </div>
                <div className="element_card">
                    <p>
                    <p>Todo App </p>
                        <a href="http://tasko-listo.herokuapp.com/">Live link <FontAwesomeIcon icon={faFile}/> </a>
                        <br/><br/>
                        <a href="https://4k45hv3rm4/github/todo-list">Github Repo <FontAwesomeIcon icon={faFile}/> </a>
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Project;
