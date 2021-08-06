import React, { useState } from 'react'
import './Navbar.css'
import { RiArrowDropDownLine } from 'react-icons/ri'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdClose } from 'react-icons/md'
import {Dropdown} from 'react-bootstrap'
const Navbar = () => {
    const [MenuOpen, setMenuOpen] = useState(false)
    function handleMenuClick() {
        setMenuOpen(!MenuOpen)
    }
    return (
        <div className='Header'>
            <div className="navbarWrapper">
                <div className="left">
                    <p className="logo">Tutionpad</p>
                </div>
                <div className={MenuOpen ? 'right openmenu' : 'right'}>
                    <ul className='navitems'>
                        <li className='navlink'>Live Classes <RiArrowDropDownLine style={{ fontSize: '1.5rem' }} />
                        <ul className="subnavitems1">
                            <li className="subnavlink">CBSE <RiArrowDropDownLine style={{ fontSize: '1.5rem' }} /></li>
                            <li className="subnavlink">IIT JEE <RiArrowDropDownLine style={{ fontSize: '1.5rem' }} /></li>
                        </ul>
                        </li>
                        <li className='navlink'>Study Material <RiArrowDropDownLine style={{ fontSize: '1.5rem' }} />
                        <ul className="subnavitems1">
                            <li className="subnavlink">CBSE NCERT BOOKS</li>
                        </ul></li>
                        <li className='navlink'>More <RiArrowDropDownLine style={{ fontSize: '1.5rem' }} />
                        <ul className="subnavitems1">
                            <li className="subnavlink">Become a Teacher at Tutionpad </li>
                            <li className="subnavlink">Refer & Earn</li>
                            <li className="subnavlink">Contact Us</li>
                            <li className="subnavlink">About Us</li>
                            <li className="subnavlink">Blog</li>
                        </ul></li>
                    </ul>
                    <button className='signinbtn btns'>Sign In </button>
                    <button className='signupbtn btns'>Sign Up </button>
                </div>
                <div className="navmenu">
                    {MenuOpen ? <MdClose onClick={handleMenuClick} style={{ color: 'white' }} /> : <GiHamburgerMenu onClick={handleMenuClick} />}
                </div>
            </div>
        </div>
    )
}

export default Navbar
