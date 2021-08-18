import styled from "styled-components";
export const Section = styled.section`
  padding: 3rem 4rem;
  display: flex;
  flex-direction: column;
  background-color: #eafaf1;
  @media screen and (max-width: 1024px) {
    padding: 2rem 3rem;
  }
  @media screen and (max-width: 768px) {
    padding: 1rem 2rem;
  }
  @media screen and (max-width: 540px) {
    padding: 1rem;
  }
`;
export const Title = styled.h1`
  color: #000;
  margin-bottom: 12px;
  text-align: center;
  font-size: 2rem;
`;
export const Content=styled.div`
display: grid;
grid-gap: 2rem;
margin: 4rem;
grid-template-columns: auto auto auto;
@media screen and (max-width:768px){
    grid-template-columns: auto auto;
}
@media screen and (max-width:540px){
    grid-template-columns: auto;
}
`
export const Card=styled.div`

`
export const Icon=styled.div`
font-size: 3rem;
`
export const Text=styled.h4``
export const SubText=styled.p``
export const Button=styled.button`
width: 200px;
padding: 1rem;
    font-size: 16px;
    font-weight: 600;
    border-radius: 5px;
    align-self: center;
    box-shadow: 0px 3px 5px rgb(0 0 0 / 21%);
    background-color: #fb4444;
    border: none;
    color: white;
    align-items: center;

`