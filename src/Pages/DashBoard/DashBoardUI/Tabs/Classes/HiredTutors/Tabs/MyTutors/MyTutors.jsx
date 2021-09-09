import React from 'react'
import {ProfileImg,Name,Heading,Tutor,Paragraph,Tutors,Subject,ClassDetails,Reviews,Progress,ProgressSection,Bar,SubHeading,Price,Message} from './MyTutorsStyle';
import { AiFillCheckCircle,AiFillStar } from "react-icons/ai";
import { BiRupee,BiMessageDetail,BiCurrentLocation } from "react-icons/bi";
import { MdLocationOn} from "react-icons/md";
import { GiGraduateCap} from "react-icons/gi";


const MyTutors = () => {
    return (
        <>
    
        <Tutors>
            <ClassDetails>
                <Tutor>
                    <ProfileImg src="/images/ProfileImg.jpg"/>
                    <Name>
                        <Heading>Vijendra <AiFillCheckCircle style={{color:"#1547FA"}}/></Heading>
                        <Subject>
                            <GiGraduateCap/> IIT JEE, NEET Physics&nbsp;&nbsp;
                            <MdLocationOn/> Sikar, Rajasthan&nbsp;&nbsp;
                            <b><BiCurrentLocation/> 15km</b> away
                        </Subject>
                        <Paragraph>TEFL Certified English teacher with dynamic classes and online experience TEFL Certified English teacher with dynamic classes and online experience TEFL Certified English teacher with dynamic classes and online experience....<b>Read More</b>
                        </Paragraph>
                        <br/>
                        <ProgressSection>
                            <Paragraph>85 Active students | 150 Classes | Online, Home Tuition | Vaccinated II</Paragraph>
                            <Progress>
                                <Bar now={45} variant="success"/>
                                <b className="mx-3">Total 150 Classes</b>
                            </Progress>
                            <Paragraph>Completed <b>80 Classes</b></Paragraph>
                        </ProgressSection>
                    </Name>
                </Tutor>
                
            </ClassDetails>

            <Reviews>
                <SubHeading>5 <AiFillStar style={{color:"#007770"}}/> (12 Reviews)</SubHeading>
                <Price><BiRupee/>1000</Price>       
                <Paragraph>Per class</Paragraph><br/>
                <SubHeading>Speaks</SubHeading>
                <Paragraph>Hindi, English, Spanish,French</Paragraph>
                <Message><BiMessageDetail/> Message</Message>
            </Reviews>

        </Tutors>

        <Tutors>
            <ClassDetails>
                <Tutor>
                    <ProfileImg src="/images/ProfileImg.jpg"/>
                    <Name>
                        <Heading>Sunil <AiFillCheckCircle style={{color:"#1547FA"}}/></Heading>
                        <Subject>
                            <GiGraduateCap/> IIT JEE, NEET Physics&nbsp;&nbsp;
                            <MdLocationOn/> Sikar, Rajasthan&nbsp;&nbsp;
                            <b><BiCurrentLocation/> 15km</b> away
                        </Subject>
                        <Paragraph>TEFL Certified English teacher with dynamic classes and online experience TEFL Certified English teacher with dynamic classes and online experience TEFL Certified English teacher with dynamic classes and online experience....<b>Read More</b>
                        </Paragraph>
                        <br/>
                        <ProgressSection>
                            <Paragraph>85 Active students | 150 Classes | Online, Home Tuition | Vaccinated II</Paragraph>
                            <Progress>
                                <Bar now={45} variant="success"/>
                                <b className="mx-3">Total 150 Classes</b>
                            </Progress>
                            <Paragraph>Completed <b>80 Classes</b></Paragraph>
                        </ProgressSection>
                    </Name>
                </Tutor>
                
            </ClassDetails>

            <Reviews>
                <SubHeading>5 <AiFillStar style={{color:"#007770"}}/> (12 Reviews)</SubHeading>
                <Price><BiRupee/>1000</Price>       
                <Paragraph>Per class</Paragraph><br/>
                <SubHeading>Speaks</SubHeading>
                <Paragraph>Hindi, English, Spanish,French</Paragraph>
                <Message><BiMessageDetail/> Message</Message>
            </Reviews>

        </Tutors>
        </>
    )
}

export default MyTutors
