import styled from "styled-components";
import { ProgressBar } from 'react-bootstrap'

export const Tutors = styled.div`
display: flex;
justify-content: space-between;
padding: 2rem 2rem 1rem 1rem;
border: 2px solid #E6E6E6;
box-sizing: border-box;
box-shadow: 0px 4px 15px 5px rgba(113, 113, 113, 0.08);
border-radius: 5px;
margin:4rem 0 .8rem 0; 
@media screen and (max-width:768px){ 
   flex-direction: column;
   padding: 1.5rem .5rem;
   margin:1.5rem  0 ; 
   justify-content: center;
   align-items: center;
}

`
export const Tutor=styled.div`
display: flex;
width:80%;
@media screen and (max-width:768px){ 
    width:100%;
}
@media screen and (max-width:468px){ 
   flex-direction: column;
   align-items: center;
}
`

export const ProfileImg=styled.img`
width: 4.5rem;
height: 4.5rem;
border-radius: 5rem;
cursor: pointer;
margin-right: .8rem;
@media screen and (max-width:468px){ 
    margin-bottom: 1.8rem;
}
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
export const Paragraph=styled.div`
color: rgba(21, 39, 38, 0.78);
font-size: .9rem;
`
export const Subject=styled.div`
margin-bottom:.9rem;
`

export const ClassDetails = styled.div`
display: flex;
flex-direction: column;
@media screen and (max-width:768px){ 
   margin-bottom:2.5rem; 
   
}
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
display: flex;
align-items: center;
margin:1.2rem 0 .2rem 0;
`
export const Bar = styled(ProgressBar)`
background:#6BFCF3;
color: #007770 !important;
height:.65rem;
width: 60%;

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
 