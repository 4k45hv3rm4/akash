import React from 'react'
import '../App.css';
const Header = ()=> {
    return (
        <div className="sideheader">
            <ul>
                <li>
                    <a href='#about' >about</a>                 
                </li>
                <li>
                    <a href='#projects' >Projects</a>
                </li>
                <li>
                    <a href='#contact'>Contact</a>
                </li>
            </ul>
        </div>
    )
}

export default Header;