import { Form } from "react-bootstrap";
import styled from "styled-components";
export const Heading = styled.h3``;
export const ImgSection = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 300px;
`;

export const Img = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  @media screen and (max-width:768px){
    width: 100px;
    height:100px;
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
`
export const Label=styled(Form.Label)`
width: 30%;
`
export const Input=styled(Form.Control)`
width: 70%;
`