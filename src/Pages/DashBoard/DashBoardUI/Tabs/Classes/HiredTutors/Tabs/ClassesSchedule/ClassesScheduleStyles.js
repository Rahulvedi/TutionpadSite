import styled from "styled-components";

export const RecentClass=styled.div`
background: #ffffff;
padding: 1rem;
@media screen and (max-width:556px){ 
    padding:.5rem .3rem;
}
`
export const Tutors=styled.div`
width: fit-content;
display: flex;
@media screen and (max-width:768px){
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
`
export const Tutor=styled.div`
margin:1rem 1rem 2rem 0;
display: flex;
padding: 1rem ;
align-items: center ;
justify-content: center ;
border:2px solid white;
box-sizing: border-box;
box-shadow: 0px 4px 15px 5px rgba(113, 113, 113, 0.08);
border-radius: 5px;
&:hover{
    background: #F0FFFE;
    border: 2px solid rgba(107, 252, 243, 0.8);
}
`

export const ProfileImg=styled.img`
width: 3.2rem;
height: 3.2rem;
border-radius: 2rem;
cursor: pointer;
margin-right: .5rem;
`

export const Name=styled.div`
font-size: .8rem;
word-wrap: break-word;
white-space:normal;
`
export const Heading=styled.h4`
font-size: 1rem;
font-weight: bold;
`
export const SubHeading=styled.h4`
font-size: .95rem;
`
export const Paragraph=styled.p`
margin: 0;
font-size: .85rem;
`
export const Navigator=styled.p`
display: flex;
align-items: center;
margin:1.5rem 0 2.5rem 0;
`
export const Button=styled.p`
background: rgba(107, 252, 243, 0.8);
color: #007770;
padding:.2rem .3rem;
margin:0 .3rem;
font-size: .95rem;
font-weight: bold;

`
export const Subject=styled.p`
margin: 0;
`

export const Schedule = styled.div`
margin:1rem 0; 
padding:1.2rem 1.5rem;
box-shadow: 0px 4px 15px 5px #71717114;
border: 2px solid #E6E6E6;
border-radius: 5px;
@media screen and (max-width:768px){
    margin: 1rem 0; 
    padding:1rem .8rem;
}
`
export const ClassDetails = styled.div`
display: flex;
padding:1rem 0;
@media screen and (max-width:965px){
    padding: 0;
}
@media screen and (max-width:768px){
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

`
export const Details = styled.div`
display: flex;
padding:.4rem;
margin:1rem 5rem 0 0;
@media screen and (max-width:1200px){
    margin:1rem 1rem 0 0;
}
@media screen and (max-width:960px){
    padding:0;
    margin:1rem 0;
}


`
export const Dates = styled.div`
color: #007770;
margin-right: 1.5rem;
`
export const Date = styled.div`
padding:.5rem 1.4rem;
color: #007770;
font-size: 2rem;
font-weight: bolder;
border: 2px solid #007770;
box-sizing: border-box;
&:hover{
background: rgba(107, 252, 243, 0.8);
}
`
export const Month = styled.h2`
font-size: 1rem;
padding:.35rem 0;
`
export const Time = styled.div`
`
export const Head = styled.h3`
font-size: .9rem;
font-weight: bold;
`
export const Headline = styled.h3`
font-size: .9rem;
color: #838383;

`
export const Line = styled.h3`
font-size: .8rem;
padding:.3rem;
width: fit-content;
color: #007770;
background: #6BFCF3CC;
font-weight: bold;
`



 