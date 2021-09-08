import styled from "styled-components";
import { ProgressBar } from 'react-bootstrap'

export const Tutors = styled.div`
display: flex;
justify-content: space-between;
padding: 2rem 2rem 1rem 1rem;
box-shadow: 0px 4px 15px 5px #71717114;
margin:4rem 0 .8rem 0; 

`
export const Tutor=styled.div`
display: flex;
width:80%;
`

export const ProfileImg=styled.img`
width: 4.5rem;
height: 4.5rem;
border-radius: 5rem;
cursor: pointer;
margin-right: .8rem;
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
color: rgba(21, 39, 38, 0.78);
font-size: .9rem;
`
export const Subject=styled.div`
margin-bottom:.9rem;
`

export const ClassDetails = styled.div`
display: flex;
flex-direction: column;
`
export const Reviews = styled.div`
width:35%;
display: flex;
align-items: center;
flex-direction: column;
`
export const ProgressSection = styled.div`
`
export const Progress = styled.div`
font-weight: bold;
color: #007770 !important;
`
export const Bar = styled(ProgressBar)`
background:#6BFCF3;
color: #007770 !important;
height:.65rem;
width: 60%;
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
margin-top:.3rem;
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
 