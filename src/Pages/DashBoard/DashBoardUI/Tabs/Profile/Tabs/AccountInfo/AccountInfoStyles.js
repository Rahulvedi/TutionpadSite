import { Form } from "react-bootstrap";
import styled from "styled-components";
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
  width: 150px;
  height: 150px;
  border-radius: 50%;
  @media screen and (max-width:768px){
    width: 100px;
    height:100px;
  }
  @media screen and (max-width:540px){
 margin-bottom: 2rem;
}
`;

export const UploadImgButton = styled.button`
  border: none;
  outline: none;
  font-size: 1.2rem;
  padding: .8rem 1.5rem;
  background: #007770;
  color: white;
  font-weight: 500;
  border-radius: 10px;
  margin-bottom: .5rem;
  @media screen and (max-width:768px){
    font-size: 1rem;
    padding: .6rem 1.2rem;
  }
`;
export const UploadImg = styled.div`
margin-left: 2rem;
@media screen and (max-width:540px){
  margin-left: 1rem;
}
`

export const Text=styled.p`
margin-bottom: 2px;
color: #8D8C8C;
`

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