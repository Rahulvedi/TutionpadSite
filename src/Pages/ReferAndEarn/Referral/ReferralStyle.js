import styled from "styled-components"
export const Refer = styled.section`
/* background:greenyellow; */
display: flex;
width: auto;
@media screen and (max-width:1200px){
    flex-direction: column;

}
`
export const ReferralForm =styled.div`
/* background:yellow; */
margin: 1.5rem;
padding: .5rem 1rem;
width: 55%;
@media screen and (max-width:1200px){
    width: 95%;
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
`
// ReferImageSection Css Ends

export const ReferralWorks = styled.div`
background: #ffffff;
box-shadow: 0px 0px 25px 3px rgba(0, 0, 0, 0.18);
margin: 1.5rem;
padding:10rem;
text-align: center;
`