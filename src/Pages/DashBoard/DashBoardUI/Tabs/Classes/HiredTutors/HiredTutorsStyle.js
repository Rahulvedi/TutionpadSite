import styled from "styled-components";
export const Navbar = styled.div`
padding:.7rem 1rem;
display: flex;
justify-content:space-evenly;
align-items: center;
background:yellowgreen;
`

export const Alarm=styled.button`
border: none;
outline: none;
padding: .5rem 1rem;
background-color:#6BFCF3;
border-radius: 10px;
font-size: 1rem;
font-weight: 500;
`
export const Time = styled.div`
`
export const Message=styled.button`
border: none;
outline: none;
background-color:#ffffff;
font-size: 1rem;
font-weight: 500;
margin: 0 .5rem;
`
export const JoinClass=styled.button`
border: none;
outline: none;
padding: .2rem .5rem;
background-color:#007770;
color:#ffffff;
border-radius: 15px;
font-size: 1rem;
font-weight: 500;
margin: 0 .5rem;
`
export const Profile = styled.div`
display: flex;
justify-content: center;
align-items: center;
width:fit-content;
font-weight:bold;
`
export const ProfileImg=styled.img`
width: 3.2rem;
height: 3.2rem;
border-radius: 2rem;
cursor: pointer;

@media screen and (max-width: 768px){
    border-radius: 50%;
    width: 40%;
    height: 150px;
    margin: 1rem 0;
}
`
export const Text=styled.p`
margin: 0 .5rem;
font-weight: bold;
`



