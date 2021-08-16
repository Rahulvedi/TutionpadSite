import styled from "styled-components";
import { Card } from 'react-bootstrap'
import {AiFillStar} from 'react-icons/ai'
export const Teacher=styled(Card)`
margin:.5rem;
/* @media screen and (max-width:540px){
    margin: .5rem;
} */
`
export const TeacherImg=styled(Card.Img)``
export const TeacherInfo=styled(Card.Body)``
export const TeacherName=styled(Card.Title)`
font-weight: 600;
font-size: 14px;
line-height: 18px;
color: rgba(0, 0, 0, 0.97);

`
export const Location=styled(Card.Text)`
font-weight: normal;
font-size: 12px;
line-height: 15px;
color: rgba(0, 0, 0, 0.62);
`
export const PricePerClass=styled(Card.Text)`
font-weight: normal;
font-size: 12px;
line-height: 15px;
color: rgba(0, 0, 0, 0.62);
`

export const Rating=styled.div`
display: flex;
`

export const StarIcon=styled(AiFillStar)`
color: #007770;
`