import styled from "styled-components";
import {Link} from "react-router-dom"

export const Container=styled.div`
padding: 2rem;
`
export const TopBar=styled.div`
background-color: white;
padding: .8rem;
border-radius: 5px;
display: flex;
justify-content: space-around;
`
export const Boxes=styled.div`
display: flex;
justify-content: center;
align-items: center;
margin:.8rem;
`
export const Box=styled.div`
background: rgba(107, 252, 243, 0.8);
Color: #007770;
border-radius: 5px;
padding:.8rem 1.1rem;
margin-right: .5rem;
width: fit-content;
`
export const Area = styled.div`
`
export const H2 = styled.div`
font-weight: bold;
font-size: 20px;
line-height: 25px;
letter-spacing: 0.05em;
color: #262626;
`
export const H3 = styled.div`
color:#A5A5A5;
font-size: 16px;
line-height: 20px;
letter-spacing: 0.1em;
`

export const AlarmButton=styled.button`
border: none;
outline: none;
padding: .7rem 1.3rem;
background: rgba(107, 252, 243, 0.8);
border-radius: 5px;
font-size: 1rem;
font-weight: 500;
/* margin-right: .8rem; */
`
export const Message=styled.div`
margin-right: 1.25rem;
line-height: 23px;
color: #007770;
cursor: pointer;
`
export const JoinNow=styled.button`
border: none;
outline: none;
padding: .2rem .5rem;
background-color:#007770;
color:#ffffff;
border-radius: 15px;
font-size: 1rem;
font-weight: 500;
margin: 0 .5rem;
display: flex;
align-items: center;
`
export const TutorInfo=styled.div`
display: flex;
align-items: center;
margin-left: 3.0625rem;
`

export const ProfileImg=styled.img`
width: 3.2rem;
height: 3.2rem;
border-radius: 2rem;
cursor: pointer;
margin-right: .5rem;
`
export const Name=styled.p`
margin: 0;
`
export const India=styled.img`
width: 1.1rem;
height: 1.2rem;
margin: .35rem;
`

export const ClassDetails=styled.div`
padding: 1rem;
margin-top: 1rem;
background-color: white;
`
export const NavigationBar=styled.div`
display: flex;
`
export const NavigationItem=styled(Link)`
text-decoration: none;
color: black;
font-size: 1.2rem;
font-weight: bold;
margin: 0 1.84375rem;
&:hover{
  color: black;
}
`
export const Item=styled.div`
text-decoration: none;
color: black;
font-size: 1.2rem;
font-weight: bold;
margin: 0 1.84375rem;
&:hover{
  color: black;
} 
`
export const Content=styled.div`
padding: 1rem;
@media screen and (max-width:768px){
  padding: .5rem;
}
`
