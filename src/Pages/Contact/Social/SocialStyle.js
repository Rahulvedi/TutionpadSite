import styled from "styled-components"
export const Section=styled.section`
height:34rem;
width:100%;
display:flex;
flex-direction: column;
padding: 7rem 0  7rem 12rem;
margin-top:9rem;
/* background:whitesmoke; */
position: relative;

`
export const Links=styled.a`
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