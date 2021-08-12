import styled from "styled-components";
import { Form, Button } from "react-bootstrap";
export const Logo = styled.img`
  width: 180px;
  cursor: pointer;
`;
export const Title = styled.h1`
   font-size: 45px;
  line-height: 54px;
  font-weight: 700;
  margin-bottom: 0;
  margin-top: 58px;
  @media (max-width: 1600px) {
    font-size: 38px;
    line-height: 48px;
  }
  @media (max-width: 1440px) {
    font-size: 32px;
    line-height: 42px;
  }
  @media (max-width: 1200px) {
    font-size: 28px;
    line-height: 32px;
  }
`;
export const SubTitle = styled.p`
  color: #777777;
  font-size: 25px;
  line-height: 30px;
  margin-bottom: 45px;
  margin-top: 10px;
  @media (max-width: 1600px) {
    font-size: 22px;
  }
  @media (max-width: 1440px) {
    font-size: 20px;
  }
  @media (max-width: 1440px) {
    font-size: 18px;
  }
`;
export const LoginForm = styled(Form)``;
export const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const GoogleBtn = styled(Button)`
  width: 100%;
  margin: 10px 10px 10px 0;
  padding: 10px;
  outline: none;
  border: none;
  color: white;
  background-color: #dd4b39;
  &:hover {
    background-color: #dd4b39;
  }
`;
export const FaceBookBtn = styled(Button)`
  width: 100%;
  margin: 10px 10px 10px 0;
  padding: 10px;
  outline: none;
  border: none;
  color: white;
  background-color: #3b5998;
  &:hover {
    background-color: #3b5998;
  }
`;
export const LoginButton = styled(Button)`
  background-color: #34e0a1;
  border: none;
  outline: none;
  padding: 0.8rem;
  &:hover {
    background-color: #34e0a1;
  }
`;
export const Text = styled.p`
margin-top: 2rem;
  text-align: center;
  font-size: 15px;
  font-weight: 700;
  color: #777777;
  line-height: 1;
  a {
    color: #008489;
    &:hover,
    &:focus {
      outline: none;
      color: #008489d1;
      text-decoration: none;
    }
  }
`;
