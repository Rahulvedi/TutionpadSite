import React,{useState} from 'react'
import { RiArrowDropDownLine } from 'react-icons/ri'
import {MdClose} from 'react-icons/md'
import {GiHamburgerMenu} from 'react-icons/gi'
import {Link} from 'react-router-dom'
import { Nav,NavbarWrapper,Left,Right, Logo,NavItems,NavLinks,NavButton,MenuIcon,SubNavLinks,SubNavItems} from './HeaderStyle'
const Header = () => {
    const [MenuIsOpen, setMenuIsOpen] = useState(false)
    function handleMenuClick(){
        setMenuIsOpen(!MenuIsOpen)
    }

    return (
        <Nav>
            <NavbarWrapper>
            <Left>
                <Logo src='/images/logo-alt.svg'/>
            </Left>
            <Right click={MenuIsOpen}>
                <NavItems>
                    <NavLinks >Live Classes<RiArrowDropDownLine/>
                    <SubNavItems className='SubNavLinks'>
                        <SubNavLinks>CBSE</SubNavLinks>
                        <SubNavLinks>IIT JEE</SubNavLinks>
                        </SubNavItems>
                    </NavLinks>
                    <NavLinks  >Study Material<RiArrowDropDownLine/>
                    <SubNavItems className='SubNavLinks'>
                    <SubNavLinks>CBSE NCERT BOOKS</SubNavLinks>
                    </SubNavItems>
                    </NavLinks>
                    <NavLinks >More<RiArrowDropDownLine/>
                    <SubNavItems className='SubNavLinks'>
                    <SubNavLinks >Become a Teacher at Tutionpad</SubNavLinks>
                    <SubNavLinks as={Link} to='/invite'>Refer & Earn</SubNavLinks>
                    <SubNavLinks as={Link} to='/contact-us'>Contact Us</SubNavLinks>
                    <SubNavLinks as={Link} to='/about'>About Us</SubNavLinks>
                    <SubNavLinks>Blog</SubNavLinks>
                </SubNavItems>
                    </NavLinks>
                </NavItems>
                <NavButton as={Link} to='/signup-as-student'>Sign Up</NavButton>
                <NavButton as={Link} to='/signin'>Sign In</NavButton>
                
                
            </Right>
            <MenuIcon>
                {MenuIsOpen?<MdClose onClick={handleMenuClick} style={{ color: 'black' }} />:<GiHamburgerMenu onClick={handleMenuClick} style={{ color: 'black' }} />}
            </MenuIcon>
            </NavbarWrapper>
        </Nav>
    )
}

export default Header
