import styled from "styled-components";
import { Link } from 'react-router-dom'
export const Nav=styled.nav`
display: flex;
background: #00A79D;
@media screen and (max-width:768px){
    display: none;
}
`
export const NavWrapper=styled.div`
display: flex;
`
export const NavLink=styled(Link)`
color:white;
padding: .5rem;
margin: .5rem;
cursor: pointer;
text-decoration: none;
&:hover{
    color: white;
}

/* border-bottom: 2px solid white; */
`