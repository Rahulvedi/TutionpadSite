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
export const TopBar=styled.div`
display: flex;
`

export const Title=styled.p`
font-size: 1.5rem;

`
export const ViewAllButton=styled.button`
width: 5rem;
margin-bottom: 1rem;
margin-left: 1rem;
color: rgba(0, 119, 112, 0.8);
border: 1px solid rgba(0, 119, 112, 0.8);
`


export const Teachers=styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center
`