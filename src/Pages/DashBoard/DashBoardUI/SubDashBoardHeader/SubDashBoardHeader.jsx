import React from 'react'
import {Nav,NavWrapper,NavLink} from './SubDashBoardHeaderStyles'
const SubDashBoardHeader = ({match}) => {
    return (
        <Nav>
            <NavWrapper>
                <NavLink to={`${match.path}`}>My Classes</NavLink>
                <NavLink to={`${match.path}/messages`}>Messages</NavLink>
                <NavLink to={`${match.path}/report`}>Reports</NavLink>
                <NavLink to={`${match.path}/disputes`}>Disputes</NavLink>
                <NavLink to={`${match.path}/requirements`}>Requirements</NavLink>
                <NavLink to={`${match.path}/orders`}>Orders</NavLink>
                <NavLink to={`${match.path}/profile`}>Profile</NavLink>
                <NavLink to={`${match.path}/favourites`}>Favourites</NavLink>
            </NavWrapper>
        </Nav>
    )
}

export default SubDashBoardHeader
