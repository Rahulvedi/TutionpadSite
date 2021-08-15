import styled from "styled-components";

export const Section=styled.section`
padding:  2rem 4rem;
@media screen and (max-width:1024px){
    padding: 1rem 3rem;
}
@media screen and (max-width:768px){
padding: 1rem 2rem;
}
@media screen and (max-width:540px){
padding: 1rem;

}
`

export const Title=styled.p`
font-size: 1.5rem;
`

export const Tabs=styled.div`

`
export const Tab=styled.span`
margin: 1rem 1.5rem 0 0;
color: #007770;
background: #F3FEFF;
border-radius: 2px;
padding: .5rem;
`