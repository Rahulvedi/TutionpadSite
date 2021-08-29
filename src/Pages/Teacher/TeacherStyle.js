import styled from "styled-components";
export const Sec1 = styled.section`
background: #4444fb;
color:#ffffff;
text-align:center;
padding:5rem 20rem;
@media screen and (max-width:1200px){
    padding:5rem 8rem;
 }
 @media screen and (max-width:768px){
    padding:4rem 1rem;
 }

`


export const Sec2 = styled.section`
padding: 5rem 10rem;
text-align:center;
@media screen and (max-width:1200px){
    padding:4rem 0.7rem;
 }
 
`
export const Cards = styled.div`
display: flex;
margin:2rem 0;
@media screen and (max-width:992px){
    flex-direction: column;;
 }
`
export const Card1 = styled.div`
background: #ffffff;
margin:.4rem;
padding:1rem;
text-align: start;
`
export const Div = styled.div`
font-size:1.25rem;
font-weight:bold;
text-align: center;
padding:.15rem;
margin-bottom:.75rem;
border-bottom: 2px solid #1abc9c;
`

export const Sec3 = styled.section`
background: rgba(249,214,214,0.25);
padding: 5rem 10rem;
text-align:center;
@media screen and (max-width:1200px){
    padding:4rem 0.7rem;
 }
`
export const Card2 = styled.div`
background: #ffffff;
margin:.6rem;
padding:1rem;
text-align: start;
border-left: 2px solid red;
`
export const Div2 = styled.div`
font-size:1.25rem;
font-weight:bold;
padding:.15rem;
margin-bottom:.75rem;
`

export const Card3 = styled.div`
background: #ffffff;
margin:.6rem;
padding:1rem;
text-align: start;
`
export const Div3 = styled.div`
font-size:1.25rem;
font-weight:bold;
padding:.15rem;
margin-bottom:.75rem;
`
export const Info = styled.div`
color:#ec3939;
background:#ffdade;
width:fit-content;
margin:2rem;
padding:.1rem 1rem;
border-radius:10rem;
`