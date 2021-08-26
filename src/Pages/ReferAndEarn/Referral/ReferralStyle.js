import styled from "styled-components"
export const Refer = styled.section`
display: flex;
justify-content:space-evenly;
width: auto;
@media screen and (max-width:992px){
    flex-direction: column;
    justify-content:center;
}
`
export const ReferralForm =styled.div`
margin: 1.5rem;
padding: .5rem 1rem;
width: 55%;
@media screen and (max-width:992px){
    width: 95%;
    margin: .5rem;
}
`
export const ReferImg = styled.img`
height:14rem;
width: 17rem;
`
export const Paragraph = styled.div`
`
export const Title = styled.h1`
color: #1abc9c;
padding: 1rem 0;
`
export const SubTitle = styled.h3`
font-weight:bold;
margin:2rem 0;

`

// ReferImageSection Css
export const ReferImageSection = styled.div`
text-align:center;
`
export const ReferImage = styled.img`
height: auto;
width: 70%;
@media screen and (max-width:772px){
    width: 90%;
}

`
// ReferImageSection Css Ends

export const ReferralWorks = styled.div`
background: #ffffff;
box-shadow: 0px 0px 25px 3px rgba(0, 0, 0, 0.18);
margin: 1.5rem;
padding:1.5rem;
width:40%;
height: fit-content;
@media screen and (max-width:992px){
    width: 95%;
    margin: .5rem;
}

`
export const LogoSpan = styled.div`
background: #1abc9c;
color: #ffffff;
font-size:1.8rem;
text-align:center;
border-radius:50rem;
height:3rem;
width:3rem;
margin:1rem 0;
z-index:2;
` 
export const ReferWork = styled.div`
display: flex;
text-align:start;
`
export const ArrowDiv = styled.div`
height:29rem;
width:.3rem;
margin: 1rem 1.25rem;
position:absolute;
z-index:1;
background:#1abc9c;
@media screen and (max-width:1198px){
    height:33rem;
}
@media screen and (max-width:992px){
    height:22rem;
}
@media screen and (max-width:766px){
    height:28rem;
}
@media screen and (max-width:479px){
    height:30.6rem;
}
@media screen and (max-width:407px){
    height:35rem;
}
@media screen and (max-width:369px){
    height:37rem;
}

`