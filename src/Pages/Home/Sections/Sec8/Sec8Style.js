import styled from "styled-components";
export const Section = styled.section`
  display: flex;
  flex-direction: column;
  padding: 3rem 4rem;
  @media screen and (max-width: 1024px) {
    padding: 2rem 3rem;
  }
  @media screen and (max-width: 768px) {
    padding: 1rem 2rem;
  }
  @media screen and (max-width: 540px) {
    padding: 1rem;
  }
`;

export const Title = styled.h1`
  margin-bottom: 12px;
  text-align: center;
  font-size: 2rem;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  .render-switch{
      padding: 2rem;
      @media screen and (max-width:540px){
          padding: 1rem;
      }
  }
  .render-switch-items{
      margin: 1rem 0;
      border: 1px solid lightgray;
  }
`;
export const Tabs = styled.div`
width: 410px;
display: flex;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  margin-top: 1rem;
  .active {
    color: #fff;
    background: #4444fb;
  }
  @media screen and (max-width:540px){
      width: 100%;
      justify-content: center;
  }
`;
export const Tab = styled.div`
  padding: 0.5rem;
  margin-right: 1rem;
  border-radius: 10px;
  cursor: pointer;
`;
export const Button=styled.button`
width: 200px;
padding: 1rem;
    font-size: 16px;
    font-weight: 600;
    border-radius: 5px;
    align-self: center;
    box-shadow: 0px 3px 5px rgb(0 0 0 / 21%);
    background-color: #fb4444;
    border: none;
    color: white;
    align-items: center;

`