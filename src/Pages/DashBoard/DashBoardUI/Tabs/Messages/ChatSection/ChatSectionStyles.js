import styled from "styled-components";
import {CgArrowRightO} from 'react-icons/cg'
import {AiOutlinePlus} from 'react-icons/ai'
import {FormControl} from 'react-bootstrap'

export const ChatPortion = styled.section`
display: flex;
background: #F5F7F8;
font-family: Mulish;
font-style: normal;
`

export const ChatingSection = styled.div`
background: #ffffff;
width:80%;
height:81vh;
padding: 1rem .05rem 1rem 1rem;
margin-right: 1rem;
`

export const Header = styled.h3`
font-size: 1.2rem;
padding:.5rem;
color: #2F2E41;
border-bottom: 1px solid rgba(213, 213, 213, 0.67);
`
export const Chat = styled.div`
height: 83.5%;
overflow-y: scroll;
border-bottom: 1px solid rgba(213, 213, 213, 0.67);
`
export const Date = styled.div`
font-size: .75rem;
padding:.2rem  .4rem;
width: fit-content;
margin: auto;
color: #007770;
background: rgba(107, 252, 243, 0.8);
border-radius: 50px;
text-align: center;
`
export const Left = styled.div`
font-size: 1.1rem;
padding:.5rem 1rem;
width: fit-content;
text-align: left;
left: 500px;
color: #494949;
background: #F5F7F8;
border-radius: 10px 10px 10px 0px;
`
export const Right = styled.div`
font-size: 1.1rem;
padding:.5rem 1rem;
margin:.4rem .8rem;
width: fit-content;
text-align: right;
right: 0px;
color: #494949;
background: #D5FCF9CC;
border-radius: 10px 10px 0px 10px;
`
export const Time = styled.h5`
font-size :.75rem;
margin:0;
padding-top: 2px;
color: #838383;

`

export const MessgeFooter = styled.div`
padding: .8rem 2rem .2rem 2rem;
display: flex;
justify-content: center;
align-items: center;
`
export const Input=styled(FormControl)`
color:#007770;
margin:0 1rem;
padding:.6rem .9rem;
background: #F5F7F8;
border-radius: 19px;
`
export const TutorChatDeatails = styled.div`
background: #ffffff;
width:35%;
height:81vh;
padding:1rem;
`
export const Tutor=styled.div`
display: flex;
padding: .7rem 0;
align-items: center ;
`

export const ProfileImg=styled.img`
width: 3.2rem;
height: 3.2rem;
border-radius: 2rem;
cursor: pointer;
margin-right: .3rem;
`
export const India=styled.img`
width: 1.1rem;
height: 1.2rem;
margin-right: .5rem;
`
export const Name=styled.div`
font-size: .8rem;
word-wrap: break-word;
white-space:normal;
width: fit-content;
`
export const Heading=styled.h4`
font-size: 1rem;
font-weight: bold;
color: #2F2E41;

`
export const SubHeading=styled.h4`
font-size: 14px;
color: rgba(21, 39, 38, 0.78);
`
export const Prices=styled.div`
margin-left: 3rem;
display: flex;
align-items: center;
flex-direction: column;
`
export const Price=styled.div`
font-weight: bold;
font-size: 18px;
color: #007770;
background: rgba(107, 252, 243, 0.8);
border-radius: 3px;
padding:.2rem .5rem;

height: fit-content;
`

export const Details=styled.div`
font-size: 14px;
color: #838383;
margin: 1rem  0 4rem 0;
`
export const Arrow=styled(CgArrowRightO)`
color:#007770 ;
margin:0 .1rem;
`

export const Select=styled.div`
display: flex;
align-items: center;
justify-content: space-between;
font-weight: bold;
font-size: 14px;
color: #007770;
cursor: pointer;
background: #D2FFFC;
border-radius: 3px;
margin:.7rem .2rem;
padding:.7rem 1rem;
width:90%;
`
export const Plus=styled(AiOutlinePlus)`
color:#007770 ;
margin:0 .1rem;
font-size: 1rem;
font-weight: bold;
`
export const Button=styled.button`
background: #007770;
font-size: 16px;
color: #FFFFFF;
border-radius: 3px;
font-weight: bold;
padding:.5rem 3rem;
margin: 2rem ;
text-align: center;
`