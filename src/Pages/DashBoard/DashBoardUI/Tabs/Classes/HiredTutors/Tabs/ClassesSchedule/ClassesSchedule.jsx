import React from 'react'
import {RecentClass,ProfileImg,Name,Heading,Tutor,Paragraph,Tutors,Subject,ClassDetails,Schedule,Reviews,Progress,ProgressSection,Bar,SubHeading,Price,Message} from './ClassesScheduleStyles'
import { AiFillCheckCircle,AiFillStar } from "react-icons/ai";
import { BiRupee,BiMessageDetail } from "react-icons/bi"


const RecentClasses = () => {
    return (
        <RecentClass>
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

        <Paragraph>Schedule for <b>Selected Tutor Name</b> </Paragraph>

        <Schedule>
            <ClassDetails>
                <Heading>No. of classes in week= 3</Heading>
                <Heading>Date and classes day name</Heading>
                <Heading>With timing</Heading>
                <Heading>Class Duration</Heading>
                <Heading>Topics Name</Heading><br/><br/>
                <Heading>date with status- like class done or not done</Heading>
                <ProgressSection>
                    <Paragraph>85 Active students | 150 Classes | Online, Home Tuition | Vaccinated II</Paragraph>
                    <Progress>
                        <Bar now={45} variant="success"/>
                        <b>Total 150 Classes</b>
                    </Progress>
                    <Paragraph>Completed <b>80 Classes</b></Paragraph>

                </ProgressSection>
            </ClassDetails>

            <Reviews>
                <SubHeading>5 <AiFillStar style={{color:"#007770"}}/> (12 Reviews)</SubHeading>
                <br/>
                <Price><BiRupee/>1000</Price>       
                <Paragraph>Per class</Paragraph><br/>
                <SubHeading>Speaks</SubHeading>
                <Paragraph>Hindi, English, Spanish,French</Paragraph>
                <br/>
                <Message><BiMessageDetail/> Message</Message>
            </Reviews>

        </Schedule>
        </RecentClass>
    )
}

export default RecentClasses
