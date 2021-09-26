import React from 'react'
import { Body, Head, Heading,Row ,Data,More,ProfileImg,Name, HeadingDate, Date} from '../../../Classes/HiredTutors/Tabs/RecentClasses/RecentClassesStyles'
import { Table} from 'react-bootstrap'
import VMore from './More/VMore';

const PreviousDisputes = () => {
    return (
        <Table >
            <Head>
                <Row>
                    <Heading>TUTOR</Heading>
                    <HeadingDate>ISSUE FACED</HeadingDate>
                    <HeadingDate>CLASS DATE</HeadingDate>
                    <Heading>STATUS</Heading>
                    <Heading>ACTION</Heading>
                </Row>
            </Head>
            <Body>
                <Row>
                    <Data>
                        <ProfileImg src="/images/ProfileImg.jpg"/>
                        <Name>Tutor Name</Name>
                        </Data>
                    <Date>Doubts not resolved...</Date>
                    <Date>Saturday, 29 November</Date>
                    <Data style={{color: "#007770"}}>RESOLVED</Data>
                    <More><VMore/></More>
                </Row>
                <Row>
                    <Data>
                        <ProfileImg src="/images/ProfileImg.jpg"/>
                        <Name>Tutor Name</Name>
                        </Data>
                    <Date>Doubts not resolved...</Date>
                    <Date>Saturday, 29 November</Date>
                    <Data>PENDING</Data>
                    <More><VMore/></More>
                </Row>
                <Row>
                    <Data>
                        <ProfileImg src="/images/ProfileImg.jpg"/>
                        <Name>Tutor Name</Name>
                        </Data>
                    <Date>Doubts not resolved...</Date>
                    <Date>Saturday, 11 December</Date>
                    <Data>PENDING</Data>
                    <More><VMore/></More>
                </Row>
            </Body>
        </Table>
        

    )
}

export default PreviousDisputes
