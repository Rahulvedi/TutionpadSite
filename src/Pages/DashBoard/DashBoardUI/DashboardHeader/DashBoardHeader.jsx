import React, { useState } from 'react'
import { Nav, NavbarWrapper, Left, Right, Logo, ProfileImg, DropDownItems, Profile, DropdownItem, MenuIcon, Icon, Text, MenuItems, MenuItem, Item ,LogoutButton} from './DashBoardHeaderStyles'
import { BsFillCaretDownFill } from 'react-icons/bs'
import { RiLogoutBoxRLine } from 'react-icons/ri'
import { MdClose } from 'react-icons/md'
import { GiHamburgerMenu } from 'react-icons/gi'
const DashBoardHeader = ({match}) => {
    
    const [DropDownOpen, setDropDownOpen] = useState(false)
    const [MenuIsOpen, setMenuIsOpen] = useState(false)
    function handleMenuClick() {
        setMenuIsOpen(!MenuIsOpen)
    }
    return (
        <Nav>
            <NavbarWrapper>
                <Left>
                    <Logo src='/images/logo-alt.svg' alt='Profile-Img' />
                </Left>
                <Right click={MenuIsOpen}>
                    <Profile>
                        <ProfileImg src='/images/ProfileImg.jpg' />
                        <Text>Rahul</Text>
                        <Icon>
                            <BsFillCaretDownFill style={{ color: 'grey', cursor: 'pointer' }} onClick={() => { setDropDownOpen(!DropDownOpen) }} />
                        </Icon>
                        <DropDownItems click={DropDownOpen}>
                            <DropdownItem>Logout <RiLogoutBoxRLine /></DropdownItem>
                        </DropDownItems>
                        <MenuItems>
                            <MenuItem>
                                <Item onClick={()=>{setMenuIsOpen(false)}} to={`${match.path}`}>My Classes</Item>
                            </MenuItem>
                            <MenuItem>
                                <Item onClick={()=>{setMenuIsOpen(false)}} to={`${match.path}/messages`}>Messages</Item>
                            </MenuItem>
                            <MenuItem>
                                <Item onClick={()=>{setMenuIsOpen(false)}} to={`${match.path}/report`}>Reports</Item>
                            </MenuItem>
                            <MenuItem>
                                <Item onClick={()=>{setMenuIsOpen(false)}} to={`${match.path}/disputes`}>Disputes</Item>
                            </MenuItem>
                            <MenuItem>
                                <Item onClick={()=>{setMenuIsOpen(false)}} to={`${match.path}/requirements`}>Requirements</Item>
                            </MenuItem>
                            <MenuItem>
                                <Item onClick={()=>{setMenuIsOpen(false)}} to={`${match.path}/payment`}>Payment</Item>
                            </MenuItem>
                            <MenuItem>
                                <Item onClick={()=>{setMenuIsOpen(false)}} to={`${match.path}/orders`}>Orders</Item>
                            </MenuItem>
                            <MenuItem>
                                <Item onClick={()=>{setMenuIsOpen(false)}} to={`${match.path}/profile`}>Profile</Item>
                            </MenuItem>
                            <MenuItem>
                                <Item onClick={()=>{setMenuIsOpen(false)}} to={`${match.path}/favourites`}>Favourites</Item>
                            </MenuItem>
                            <LogoutButton>Logout <RiLogoutBoxRLine /></LogoutButton>
                        </MenuItems>
                    </Profile>
                </Right>
                <MenuIcon>
                    {MenuIsOpen ? <MdClose onClick={handleMenuClick} style={{ color: 'black' }} /> : <GiHamburgerMenu onClick={handleMenuClick} style={{ color: 'black' }} />}
                </MenuIcon>
            </NavbarWrapper>
        </Nav>
    )
}

export default DashBoardHeader
