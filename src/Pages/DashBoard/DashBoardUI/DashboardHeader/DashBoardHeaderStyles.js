import styled from "styled-components";
import {Link} from 'react-router-dom'
export const Nav = styled.nav`
  width: 100%;
  height: 4rem;
  top: 0; 
  position: sticky;
  transition: all ease-in 0.2s;
  background-color: white;
  z-index: 10;
`;
export const NavbarWrapper = styled.div`
  height: 100%;
  max-width: 120rem;
  padding: 0 20px;
  display: flex;
  margin: auto;
  align-items: center;
  justify-content: space-between;
  background-color: white;
`;
export const Left = styled.div``;
export const Right = styled.div`
 display: flex;
  /* align-items: center; */
  transition: all ease-in 0.2s;
 
 @media screen and (max-width: 768px) {
    position: absolute;
    z-index: 1;
    width: 50vw;
    height: 100vh;
    top: 4rem;
    left:${({ click }) => (click ? '0' : '-100%')};
    flex-direction: column;
    background-color: white;
  }
  @media screen and (max-width:540px){
    width: 80vw;
  }
`;
export const Logo = styled.img`
  height: 2.6rem;
  cursor: pointer;
  @media screen and (max-width: 768px){
      align-items: center;
  }
`;
export const Profile=styled.div`
/* position: relative; */
display: flex;
align-items: center;
width: 100%;
@media screen and (max-width: 768px){
    flex-direction: column;
}
`
export const Icon=styled.div`
@media screen and (max-width: 768px){
    display: none;
}
`
export const ProfileImg=styled.img`
width: 3.2rem;
height: 3.2rem;
border-radius: 2rem;
cursor: pointer;

@media screen and (max-width: 768px){
    border-radius: 50%;
    /* margin-right: 0; */
    width: 40%;
    height: 150px;
    margin: 1rem 0;
}
`
export const Text=styled.p`
margin: 0 .5rem;
font-weight: bold;
`
export const DropDownItems=styled.div`
position: absolute;
display: flex;
flex-direction: column;
right: 1rem;
top: ${({ click }) => (click ? '4rem' : '-10rem')};
opacity: ${({ click }) => (click ? '1' : '0')};
visibility: ${({ click }) => (click ? 'visible' : 'hidden')};
transition: all ease-in .2s;
z-index: -1;
background-color: white;
@media screen and (max-width: 768px){
    position: unset;
    width: 100%;
    top: 0;
    opacity: 1;
    visibility: visible;
    display: none;
}
`
export const DropdownItem=styled.div`
margin: .5rem 0;
padding: .5rem .5rem;
cursor: pointer;
@media screen and (max-width: 768px) {
    margin: 1rem;
  }
`
export const MenuIcon = styled.div`
  display: none;
  font-size: 1.5rem;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const MenuItems=styled.div`
display: none;
width: 100%;
margin-top: 1rem;
padding: 1rem;
@media screen and (max-width:768px){
  display: block;
}
`
export const MenuItem=styled.div`
margin: .5rem;
padding: .5rem;
`
export const Item=styled(Link)`
text-decoration: none;
font-size: 1rem;
color: black;
&:hover{
  color: #007770;
}
`

export const LogoutButton=styled.button`
display: block;
border: none;
outline: none;
margin: auto;
padding:.8rem;
background: #007770;
border-radius: 10px;
color: white;
`