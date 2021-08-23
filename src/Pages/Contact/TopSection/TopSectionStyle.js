import styled from "styled-components"
export const TextWrapper=styled.div`
height: 40vh;
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: start;
padding: 12.5rem;
background: #d8fff5;
@media screen and (max-width:1024px){
          padding: 12rem 4rem;
      }
      @media screen and (max-width:495px){
          padding: 12rem 2rem;
      }
`

export const Title=styled.h2`
font-style: normal;
font-weight: bold;
font-size: 2.5rem;
padding: 1rem 0;
`

export const SubTitle=styled.p`
font-weight: 500;
font-size: 1.25rem;
`