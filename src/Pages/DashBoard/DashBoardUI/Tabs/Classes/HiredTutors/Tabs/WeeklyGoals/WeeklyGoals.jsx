import React from 'react'
import {WeeklyGoalsSection,ProfileImg,Name,Heading,Tutor,Navigator,Button,Tutors,Subject,SubHeading, Paragraph, Goals,GoalSection1,GoalSection2,GoalHeader,Goal,Status,Row,GoalSection3,Header,ProgressHeading,Bar} from './WeeklyGoalsStyle'
import { AiFillCheckCircle,AiOutlineLeft,AiOutlineRight } from "react-icons/ai";

const WeeklyGoals = () => {
    return (
        <WeeklyGoalsSection>
            <Tutors>
                <Tutor>
                    <ProfileImg src="/images/ProfileImg.jpg"/>
                    <Name>
                        <Heading>Vijendra <AiFillCheckCircle style={{color:"#1547FA"}}/></Heading>
                        <Subject>Subject <b>React</b></Subject>
                    </Name>
                </Tutor>
                <Tutor>
                    <ProfileImg src="/images/ProfileImg.jpg"/>
                    <Name>
                        <Heading>Rahul Vedi <AiFillCheckCircle style={{color:"#1547FA"}}/></Heading>
                        <Subject>Subject <b>React</b></Subject>
                    </Name>
                </Tutor>
            </Tutors>

            <Paragraph>Goals shared by <b>Selected Tutor Name</b> </Paragraph>
            <Navigator>
                <Button><AiOutlineLeft className="fs-5"/>Prev </Button>
                <SubHeading>This week <b>7-14</b> September</SubHeading>
                <Button>Next<AiOutlineRight className="fs-5"/></Button>
            </Navigator>

            <Goals>
                <GoalSection1>
                    <Header>Goals Made to Achieve</Header>
                    <Paragraph>Below shared goals are milestone for the week. For scheduled classes and test, check <strong style={{color:"#007770 "}}>Classes Schedule </strong></Paragraph>
                </GoalSection1>

                <GoalSection2>
                    <Row>
                        <Goal>
                            <GoalHeader>GOALS FOR THIS WEEK</GoalHeader>
                        </Goal>
                        <GoalHeader>STATUS</GoalHeader>
                    </Row>
                    <hr/>
                    <Row>
                        <Goal>3 Classes (3 Hours)</Goal>
                        <Status>COMPLETED</Status>
                    </Row>
                    <Row>
                        <Goal>1 Test/ MCQ Exam</Goal>
                        <Status>COMPLETED</Status>
                    </Row>
                    <Row>
                        <Goal>1 Test/ MCQ Exam</Goal>
                        <Status>Not Started</Status>
                    </Row>
                    <Row>
                        <Goal>1 PTM Session for 20 minutes</Goal>
                        <Status>Not Started</Status>
                    </Row>

                </GoalSection2>
                <GoalSection3>

                    <ProgressHeading><h2>50% </h2> &nbsp;Goal Achieved</ProgressHeading>
                    <Bar variant="success" now={50} />
                </GoalSection3>
            </Goals>
            
        </WeeklyGoalsSection>
    )
}

export default WeeklyGoals
