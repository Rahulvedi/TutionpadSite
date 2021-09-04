import styled from "styled-components";
export const Nav = styled.div`
background-color:#ffffff;
padding:.7rem 1rem;
display: flex;
justify-content:space-evenly;
align-items: center;
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
    margin: .5rem 0;
}
`
export const Text=styled.p`
margin: 0 .5rem;
font-weight: bold;
`



export const Content = styled.div`
margin: 2.5rem 0;
  display: flex;
  flex-direction: column;
  background:#ffffff;
  /* .render-switch{
      padding: 2rem;
      background:green;
  }
  .render-switch-items{
      margin: 1rem 0;
      border: 1px solid lightgray;
  } */
`;
export const Tabs = styled.div`
width: 100%;
display: flex;
  padding: .02rem .7rem;
  border-bottom: 1.5px solid gray;
  /* box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px; */
  margin: 1rem 0 2rem 0;

  .active {
    border-bottom: 2px solid #007770;
  }
  
`;
export const Tab = styled.div`
  padding: .1rem;
  margin-right: 1.5rem;
  font-weight:bolder;
  cursor: pointer;
  @media screen and (max-width: 768px){
    margin-right: .5rem;
}
`




