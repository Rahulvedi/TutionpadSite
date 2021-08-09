import styled from "styled-components";
export const Nav = styled.nav`
  width: 100%;
  height: 4.175rem;
  top: 0;
`;
export const NavbarWrapper = styled.div`
  height: 100%;
  max-width: 120rem;
  padding: 0 20px;
  display: flex;
  margin: auto;
  align-items: center;
  justify-content: space-between;
`;
export const Left = styled.div``;
export const Right = styled.div`
  display: flex;
  align-items: center;
  transition: all ease-in 0.2s;
  @media screen and (max-width: 768px) {
    position: absolute;
    z-index: 1;
    width: 50vw;
    height: 100vh;
    top: 4.1875rem;
    align-items: center;
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
`;
export const NavItems = styled.ul`
  display: flex;
  align-items: center;
  margin-bottom: 0 !important;
  @media screen and (max-width:768px){
      flex-direction: column;
  }
`;
export const NavLinks = styled.li`
  padding: 1.5rem 1rem;
  align-items: center;
  cursor: pointer;
  text-align: center;
@media screen and (min-width:768px){
    &:hover .SubNavLinks{
     visibility: visible;
     opacity: 1;
     top: 4.175rem;
     transition: all ease-in .3s;
  }
}
@media screen and (max-width:768px){
    &:hover .SubNavLinks{
        position: unset;
     visibility: visible;
     opacity: 1;
     top: 4.175rem;
  }
}
`;
export const NavButton = styled.button`

  margin-right: 1rem;
  outline: none;
  border: none;
  padding: 0.4rem;
  color: white;
  border-radius: 0.5rem;
  background-color: var(--Color--Primary);
  cursor: pointer;
  font-size: 1rem;
  &:hover {
    background-color: white;
    color: var(--Color--Primary);
  }
  @media screen and (max-width:768px){
    margin-top: 1rem;
    margin-right: 0;
    width: 90%;
  }
`;
export const MenuIcon = styled.div`
  display: none;
  font-size: 1.5rem;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;
export const SubNavItems=styled.ul`
position: absolute;
display: flex;
background-color: white;
flex-direction: column;
top: 8rem;
visibility: hidden;
opacity: 0;
padding: 0  !important;

`
export const SubNavLinks=styled.li`
padding: .5rem;
`
