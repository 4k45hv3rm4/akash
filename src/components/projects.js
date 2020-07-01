import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faFile } from '@fortawesome/free-solid-svg-icons'
const Project = ()=>{
    return (
        <div className="projectSection" id="project">
            <div className="Section">
                <div className="element_card">
                    <p>
                        <p>This is the project</p>
                        <a href="">This is <FontAwesomeIcon icon={faFile}/> </a>

                    </p>
                </div>
                <div className="element_card">
                    <p>
                        <p>This is the project</p>
                        <a href="">This is <FontAwesomeIcon icon={faFile}/></a>
                    </p>
                </div>
                <div className="element_card">
                    <p>
                         <p>This is the project</p>
                        <a href="">This is <FontAwesomeIcon icon={faFile}/></a>
                    </p>
                </div>
                <div className="element_card">
                    <p>
                        <p>This is the project</p>
                        <a>This is <FontAwesomeIcon icon={faFile}/></a>
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Project;