import styled from "styled-components";
import { ProgressBar } from 'react-bootstrap'

export const RecentClass=styled.div`
background: #ffffff;
padding: 1rem;
`
export const Tutors=styled.div`
width: fit-content;
display: flex;
`
export const Tutor=styled.div`
margin:1rem 1rem 2rem 0;
display: flex;
padding: 1rem !important;
align-items: center !important;
justify-content: center !important;
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
export const Paragraph=styled.p`
margin: 0;
color: rgba(21, 39, 38, 0.78);
font-size: .85rem;
`
export const Subject=styled.p`
margin: 0;
`
export const Schedule = styled.div`
display: flex;
justify-content: space-between;
padding: 1rem;
box-shadow: 0px 4px 15px 5px #71717114;
margin:4rem 0 .8rem 0; 

`
export const ClassDetails = styled.div`
display: flex;
flex-direction: column;
padding: 1rem;
margin: 1rem;
`
export const Reviews = styled.div`
display: flex;
align-items: center;
flex-direction: column;
padding: 1rem;
margin:1rem;
`
export const ProgressSection = styled.div`
margin-left: 1.5rem;
`
export const Progress = styled.div`
font-weight: bold;
color: #007770 !important;
`
export const Bar = styled(ProgressBar)`
background:#6BFCF3;
color: #007770 !important;
height:.65rem;
margin:1.2rem 0 .2rem 0;
`

export const SubHeading = styled.h5`
font-weight: bold;
font-size:1rem;
color: #494949;
;
`
export const Price = styled.div`
background:#6BFCF3;
color: #007770;
padding:.4rem .6rem;
border-radius: 5px;
font-size: 1.2rem;
font-weight: bold;
`
export const Message = styled.div`
color: #007770;
font-size: 1.2rem;
width: fit-content;
height: fit-content;
`
 