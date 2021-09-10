import React from 'react'
import {Favourite,ProfileImg,Name,Heading,Tutor,Paragraph,Tutors,Subject,ClassDetails,Reviews,Progress,ProgressSection,Demo,SubHeading,Price,Message,Section,Title,Teachers} from './FavouritesStyles';
import { AiFillCheckCircle,AiFillStar } from "react-icons/ai";
import { BiRupee,BiMessageDetail,BiCurrentLocation } from "react-icons/bi";
import { MdLocationOn} from "react-icons/md";
import { GiGraduateCap} from "react-icons/gi";
import { TeacherCard } from '../../../../../Components/default'


const Favourites = () => {
    return (
        <>
        <Favourite>
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
                                    <Demo>Book Demo Class</Demo>
                                    <Message><BiMessageDetail className="fs-3"/> Message</Message>
                                </Progress>
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
                </Reviews>
            </Tutors>

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
                                    <Demo>Book Demo Class</Demo>
                                    <Message><BiMessageDetail className="fs-3"/> Message</Message>
                                </Progress>
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
                </Reviews>
            </Tutors>
        </Favourite>
            <Section>
                <Title>Recommended Tutors by Tuitionpad</Title>
                <Teachers>
                    <TeacherCard/>
                    <TeacherCard/>
                    <TeacherCard/>
                    <TeacherCard/>
                    <TeacherCard/>
                </Teachers>
             </Section>
        
        </>
    )
}

export default Favourites
