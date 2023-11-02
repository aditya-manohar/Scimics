import React from 'react';
import './Navbar.css';
import logo from './images/Group-33524.png';
import Resources from './images/Group 1993.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
    return (
        <nav className='navbar'>
            <div className='logo'>
                <img src={logo} alt='logo' />
            </div>

            <div className='menu'>
                <div className='item'>For Students</div>
                <div className='divide'></div>
                <div className='item'>For Institutions</div>
                <div className='dropdown'>
                    Resources <FontAwesomeIcon icon={faCaretDown} />
                </div>
                <div className='item'>Request Access</div>
            </div>
        </nav>
    );
}
