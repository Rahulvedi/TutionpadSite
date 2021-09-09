import styled from "styled-components";
import { ProgressBar } from 'react-bootstrap'

export const WeeklyGoalsSection=styled.div`
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
font-size: 1rem;
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

export const Goals = styled.div`

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
export const GoalSection1 = styled.div`
margin:1rem 0; 
text-align: center;
`
export const Header=styled.h4`
font-size: 1.4rem;
font-weight: bold;
`
export const GoalSection2 = styled.div`
text-align: start;
margin:1rem 0; 
width:70%;
`
export const Row = styled.div`
display: flex;
justify-content: space-between;
`
export const GoalHeader = styled.h2`
font-family: Mulish;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 20px;
letter-spacing: 0.1em;
color: #A5A5A5;

`
export const Goal = styled.h3`
font-size: 14px;
`

export const Status = styled.h4`
color: #007770;
font-size: 14px;

`


export const GoalSection3 = styled.div`
color: #007770;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`
export const ProgressHeading = styled.div`
display: flex;
justify-content: center;
align-items: center;
font-size: 1.2rem;
margin:0;
padding: 0;

`

export const Bar = styled(ProgressBar)`
background:#6BFCF3;
color: #007770 !important;
height:.65rem;
width:50%;
`




 