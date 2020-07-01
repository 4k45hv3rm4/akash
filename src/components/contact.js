import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfo, faMailBulk, faCopyright} from '@fortawesome/free-solid-svg-icons'


const Contact  = () => {
    return (
        <div className="contactForm">
            <div className="footer" id="contact">
            <ul>
                <li>
                    <a href='#about'>about <FontAwesomeIcon icon={faInfo}/></a>                 
                </li>
                <li>
                    <a href='#projects' >Contact <FontAwesomeIcon icon={faMailBulk}/></a>
                </li>
                <li>
                    <a href='#contact'><FontAwesomeIcon icon={faCopyright}/> Copyright akash 2020</a>
                </li>
            </ul>
        </div>
        </div>
    )
}
export default Contact;