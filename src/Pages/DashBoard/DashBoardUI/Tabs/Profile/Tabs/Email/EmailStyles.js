import styled from "styled-components";
import {Form} from 'react-bootstrap'
export const Heading = styled.h3``;
export const ImgSection = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 300px;
@media screen and (max-width:540px){
 flex-direction: column;
}
`;
export const Img = styled.img`
 
  @media screen and (max-width:768px){
    width: 200px;
    height:155px;
  }
  @media screen and (max-width:540px){
 margin-bottom: 2rem;
}
`;
export const Details=styled(Form)`
padding: 2rem;
`
export const Group=styled(Form.Group)`
display: flex;
min-height: 3rem;

@media screen and (max-width:768px){
  flex-direction: column;
}
`
export const Label=styled(Form.Label)`
width: 30%;
@media screen and (max-width:768px){
 width: 100%;
}
`
export const Input=styled(Form.Control)`
width: 70%;
@media screen and (max-width:768px){
 width: 100%;
}
`

export const UpdateButton=styled.button`
border: none;
outline: none;
padding: .7rem 1.3rem;
background-color: #007770;
border-radius: 10px;
color: white;
font-size: 1rem;
font-weight: 500;
display: block;
margin: auto;
margin-top: 2rem;
`