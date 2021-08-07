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
    width: 40vw;
    height: 100vh;
    top: 4.1875rem;
    left:${({ click }) => (click ? '0' : '-100%')};
    flex-direction: column;
    background-color: white;
  }
`;
export const Logo = styled.img`
  height: 2.6rem;
`;
export const NavItems = styled.ul`
  display: flex;
  align-items: center;
  @media screen and (max-width:768px){
      flex-direction: column;
  }
`;
export const NavLinks = styled.li`
  padding: 1rem;
  align-items: center;
  cursor: pointer;
  text-align: center;
@media screen and (min-width:768px){
    &:hover .SubNavLinks{
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
      width: 100%;
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
flex-direction: column;
top: 8rem;
visibility: visible;
opacity: 0;
transition: all ease-in .3s;
`
export const SubNavLinks=styled.li`
padding: .5rem;
`
