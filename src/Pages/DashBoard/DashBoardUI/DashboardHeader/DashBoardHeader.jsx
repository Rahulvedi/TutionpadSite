import React,{useState} from 'react'
import {Nav,NavbarWrapper,Left,Right,Logo,ProfileImg,DropDownItems,Profile,DropdownItem,MenuIcon,Icon,Text} from './DashBoardHeaderStyles'
import {BsFillCaretDownFill} from 'react-icons/bs'
import {RiLogoutBoxRLine} from 'react-icons/ri'
import {MdClose} from 'react-icons/md'
import {GiHamburgerMenu} from 'react-icons/gi'
const DashBoardHeader = () => {
    const [DropDownOpen, setDropDownOpen] = useState(false)
    const [MenuIsOpen, setMenuIsOpen] = useState(false)
    function handleMenuClick(){
        setMenuIsOpen(!MenuIsOpen)
    }
    return (
        <Nav>
            <NavbarWrapper>
                <Left>
                <Logo src='/images/logo-alt.svg'alt='Profile-Img' />
                </Left>
                <Right click={MenuIsOpen}>
                    <Profile>
                    <ProfileImg src='/images/ProfileImg.jpg'/>
                    <Text>Rahul</Text>
                    <Icon>
                    <BsFillCaretDownFill style={{color:'grey',cursor:'pointer'}} onClick={()=>{setDropDownOpen(!DropDownOpen)}}/>
                    </Icon>
                    <DropDownItems click={DropDownOpen}>
                        <DropdownItem>LiveClasses</DropdownItem>
                        <DropdownItem>LiveClasses</DropdownItem>
                        <DropdownItem>Logout <RiLogoutBoxRLine/></DropdownItem>
                    </DropDownItems>
                    </Profile>
                </Right>
                <MenuIcon>
                {MenuIsOpen?<MdClose onClick={handleMenuClick} style={{ color: 'black' }} />:<GiHamburgerMenu onClick={handleMenuClick} style={{ color: 'black' }} />}
            </MenuIcon>
            </NavbarWrapper>
        </Nav>
    )
}

export default DashBoardHeader
