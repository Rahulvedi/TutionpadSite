import React from 'react'
import {RecentClass,ProfileImg,Name,Heading,Tutor,Navigator,Button,Tutors,Subject,ClassDetails,Schedule,SubHeading,Details,Dates,Date,Time,Headline,Head,Line,Month, Paragraph} from './ClassesScheduleStyles'
import {India} from '../../HiredTutorsStyle'
import { AiFillCheckCircle,AiOutlineLeft,AiOutlineRight } from "react-icons/ai";

const RecentClasses = () => {
    return (
        <RecentClass>
            <Tutors>
                <Tutor>
                    <ProfileImg src="/images/ProfileImg.jpg"/>
                    <Name>
                        <Heading>Vijendra <AiFillCheckCircle style={{color:"#1547FA"}}/>
                        <India src="/images/india.svg"/>
                        </Heading>
                        <Subject>Subject <b>React</b></Subject>
                    </Name>
                </Tutor>
                <Tutor>
                    <ProfileImg src="/images/ProfileImg.jpg"/>
                    <Name>
                        <Heading>Rahul Vedi <AiFillCheckCircle style={{color:"#1547FA"}}/>
                        <India src="/images/india.svg"/>
                        </Heading>
                        <Subject>Subject <b>React</b></Subject>
                    </Name>
                </Tutor>
            </Tutors>

            <Paragraph>Schedule for <b>Selected Tutor Name</b> </Paragraph>
            <Navigator>
                <Button><AiOutlineLeft className="fs-5"/>Prev </Button>
                <SubHeading>This week <b>7-14 September </b></SubHeading>
                <Button>Next<AiOutlineRight className="fs-5"/></Button>
            </Navigator>

            <Schedule>
                <SubHeading><b>3 Classes</b> Scheduled in this week</SubHeading>
                <ClassDetails>
                    <Details>
                        <Dates>
                            <Date>18</Date>
                            <Month>September</Month>
                        </Dates>
                        <Time>
                            <Head>Saturday</Head>
                            <Headline>Physics</Headline>
                            <Headline>Timing: <b>10:30 AM</b></Headline>
                            <Headline>Duration: <b>1 Hour</b></Headline>
                            <Line>Completed</Line>
                        </Time>
                    </Details>
                    <Details>
                        <Dates>
                            <Date>19</Date>
                            <Month>September</Month>
                        </Dates>
                        <Time>
                            <Head>Sunday</Head>
                            <Headline>Physics</Headline>
                            <Headline>Timing: <b>10:30 AM</b></Headline>
                            <Headline>Duration: <b>1 Hour</b></Headline>
                            <Line>Completed</Line>
                        </Time>
                    </Details>
                    <Details>
                        <Dates>
                            <Date>20</Date>
                            <Month>September</Month>
                        </Dates>
                        <Time>
                            <Head>Monday</Head>
                            <Headline>Physics</Headline>
                            <Headline>Timing: <b>10:30 AM</b></Headline>
                            <Headline>Duration: <b>1 Hour</b></Headline>
                            <Line>Upcoming</Line>
                        </Time>
                    </Details>
                    
                </ClassDetails>

                </Schedule>
        </RecentClass>
    )
}

export default RecentClasses
