import React from 'react'
import {Tutor,ProfileImg,Name,Heading,SubHeading,Date,India} from './TutorIdStyles'
// Tutors,TutorSelect,Action,
import { Container } from 'react-bootstrap'
import {AiFillCheckCircle} from 'react-icons/ai'

const TutorId = () => {
    return (
        <>  
            {/* <Tutors>
                <TutorSelect>
                    <Action>All</Action>
                    <Action style={{color:"#A5A5A5"}}>Unread</Action>
                </TutorSelect> */}
                <Tutor>
                    <Container className="d-flex">
                        <ProfileImg src="/images/ProfileImg.jpg"/>
                        <Name>
                            <Heading>Tutor Name<AiFillCheckCircle style={{color:"#1547FA" ,margin:"0 .4rem"}}/>
                            <India src="/images/india.svg"/>
                            </Heading>
                            <SubHeading>Hi there! How are you?</SubHeading>
                        </Name>
                    </Container>
                    <Date>8/11/2021</Date>
                </Tutor>
                <hr className="m-0"/>
            {/* </Tutors> */} 
                
        </>
    )
}

export default TutorId
