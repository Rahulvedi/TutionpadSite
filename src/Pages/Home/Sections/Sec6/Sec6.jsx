import React from 'react'
import { Section, Title, SubTitle, Content, TutionpadTutors, OfflineTutors, Row, Text, Icon } from './Sec6Styles'
import { FaCheck } from 'react-icons/fa'
import { RiCloseFill } from 'react-icons/ri'
const Sec6 = () => {
    return (
        <Section>
            <Title>Tuitionpad vs. Offline Tuition </Title>
            <SubTitle>Why parents choosing Tuitionpad over offline tutors</SubTitle>
            <Content>
                <TutionpadTutors>
                    <h4>Tuitionpad</h4>
                    <Row varient='primary'>
                        <Icon  varient='primary'><FaCheck /></Icon>
                        <Text>Real-time interaction, 5 times more engagement than video courses</Text>
                    </Row>
                    <Row varient='primary'>
                        <Icon varient='primary'><FaCheck /></Icon>
                        <Text>Students can record sessions to revise the study</Text>
                    </Row>
                    <Row varient='primary'>
                        <Icon varient='primary'><FaCheck /></Icon>
                        <Text>You can choose from 1 faculty for 1 student or 1 faculty for max. 5 students group</Text>
                    </Row>
                    <Row varient='primary'>
                        <Icon varient='primary'><FaCheck /></Icon>
                        <Text>A structured curriculum,  also extra notes, practice material provided</Text>
                    </Row>
                    <Row varient='primary'>
                        <Icon varient='primary'><FaCheck /></Icon>
                        <Text>A pool of experienced faculties, you can choose the best one</Text>
                    </Row>
                    <Row varient='primary'>
                        <Icon varient='primary'><FaCheck /></Icon>
                        <Text>No travel, saves time and money</Text>
                    </Row>
                    <Row varient='primary'>
                        <Icon varient='primary'><FaCheck /></Icon>
                        <Text>100% Safe & Secure Environment</Text>
                    </Row>
                    <Row varient='primary'>
                        <Icon varient='primary'><FaCheck /></Icon>
                        <Text>Transparent outcomes, daily reports, complete tracking</Text>
                    </Row>
                </TutionpadTutors>
                <OfflineTutors>
                    <h4>Offline Tuition</h4>
                    <Row varient='primary'> 
                        <Icon varient='primary'><FaCheck /></Icon>
                        <Text>Real interaction,  real engagement with faculty</Text>
                    </Row>
                    <Row>
                        <Icon><RiCloseFill /></Icon>
                        <Text>No personalized learning</Text>
                    </Row>
                    <Row>
                        <Icon><RiCloseFill /></Icon>
                        <Text>No such facility available</Text>
                    </Row>
                    <Row>
                        <Icon><RiCloseFill /></Icon>
                        <Text>No structure</Text>
                    </Row>
                    <Row>
                        <Icon><RiCloseFill /></Icon>
                        <Text>Very limited faculty options</Text>
                    </Row>
                    <Row>
                        <Icon><RiCloseFill /></Icon>
                        <Text>Includes travel and usually consumes 1 extra hour than tuition time</Text>
                    </Row>
                    <Row>
                        <Icon><RiCloseFill /></Icon>
                        <Text>Not safe</Text>
                    </Row>
                    <Row>
                        <Icon><RiCloseFill /></Icon>
                        <Text>No transparency and tracking followed</Text>
                    </Row>
                </OfflineTutors>

            </Content>
        </Section>
    )
}

export default Sec6
