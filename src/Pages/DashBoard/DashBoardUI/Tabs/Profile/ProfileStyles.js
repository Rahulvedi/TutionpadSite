import styled from "styled-components";
import {FiEdit} from 'react-icons/fi'
import {Link} from 'react-router-dom'
export const Container = styled.div`
  position: relative;
`;

export const CoverImg = styled.div`
  width: 100%;
  height: 160px;
  /* background: url(${({ src }) => src}); */
  background: rgba(87, 130, 127, 0.8);
  /* background-size: cover;
background-position: top; */
`;
export const Info = styled.div`
  position: absolute;
  top: 75px;
  left: 80px;
`;
export const ProfileImg = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
`;
export const Name = styled.h3`
  font-size: 1.5rem;
  display: inline;
  color: white;
  margin: 1rem;
`;
export const Edit=styled(FiEdit)`
 color: white;
 cursor: pointer;
`

export const Settings=styled.div`
max-width: 120rem;
margin: auto;
padding: 5rem;
display: flex;
`
export const Tabs=styled.div`
display: flex;
flex-direction: column;
width: 40%;
`
export const Tab=styled.div`
padding:.5rem;
margin:.5rem;
`
export const Options=styled(Link)`
text-decoration: none;
color: black;
&:hover{
    color: black;
}
`
export const Content=styled.div`
width: 60%;
`