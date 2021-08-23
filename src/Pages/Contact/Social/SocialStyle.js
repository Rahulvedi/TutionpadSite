import styled from "styled-components"
export const Section=styled.section`
height:fit-content;
width:100%;
display:flex;
flex-direction: column;
padding: 3rem 12rem;
    @media screen and (max-width:1024px){
          padding: 3rem 5rem;
      }
      @media screen and (max-width:495px){
          padding: 3rem 2rem;
      }
/* background:whitesmoke; */

`
export const Links=styled.div`
display:flex;
/* background: greenyellow; */
color:black;
width: fit-content;
cursor: pointer;
text-decoration: none;
margin:.5rem 0;
&:hover {
    color: var(--Color--Primary);
  }
`

export const Icon=styled.div`
background: #1abc9c;
color: white;
font-style:normal;
font-size:1.2rem;
text-align:center;
border-radius:50rem;
height:2rem;
width:2rem;
`

export const Title=styled.h2`
font-size: 1.4rem;
padding:0 0.6rem;
`
export const SubTitle=styled.h3`
font-size: 1rem;
`