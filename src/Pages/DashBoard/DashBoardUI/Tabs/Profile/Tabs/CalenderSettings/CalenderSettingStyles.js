import styled from "styled-components";
export const Heading = styled.h3``;
export const ImgSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  @media screen and (max-width: 768px) {
    height: 200px;
  }
  @media screen and (max-width: 540px) {
    flex-direction: column;
  }
`;
export const Img = styled.img`
  width: 200px;
  height: 155px;
  @media screen and (max-width: 768px) {
    width: 120px;
    height: 120px;
  }
  @media screen and (max-width: 540px) {
    margin-bottom: 2rem;
  }
`;
export const Details = styled.div`
  padding: 2rem 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width:768px){
  padding: 1rem;
}
@media screen and (max-width:540px){
  padding: 0;
}
`;
export const Title = styled.p`
  font-size: 1.5rem;
  color: black;
  font-weight: 550;
  text-align: center;
`;
export const SubTitle = styled.p`
  text-align: center;
`;

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