import React from 'react'
import { Body, Head, Heading,HeadingDate, Row ,Data,Date,More,ProfileImg,Name} from './RecentClassesStyles'
import { Table} from 'react-bootstrap'
import { BiRupee } from "react-icons/bi";
import ViewMore from './ViewMore/ViewMore';

const RecentClasses = () => {
    return (
        <Table responsive="xl">
            <Head>
                <Row>
                    <Heading>TUTOR</Heading>
                    <HeadingDate>DATE </HeadingDate>
                    <Heading>DURATION</Heading>
                    <Heading>PRICE PER CLASS</Heading>
                    <Heading>SUBJECT</Heading>
                    <Heading>ACTION</Heading>
                </Row>
            </Head>
            <Body>
                <Row>
                    <Data>
                        <ProfileImg src="/images/ProfileImg.jpg"/>
                        <Name>Rahul</Name>
                        </Data>
                    <Date>Saturday, 26 November</Date>
                    <Data>1 Hour</Data>
                    <Data><BiRupee/> 500</Data>
                    <Data>Physics</Data>
                    <More><ViewMore/></More>
                </Row>
                <Row>
                    <Data>
                        <ProfileImg src="/images/ProfileImg.jpg"/>
                        <Name>Sunil</Name>
                        </Data>
                    <Date>Saturday, 29 November</Date>
                    <Data>1 Hour</Data>
                    <Data><BiRupee/> 600</Data>
                    <Data>Maths</Data>
                    <More><ViewMore/></More>
                </Row>
                <Row>
                    <Data>
                        <ProfileImg src="/images/ProfileImg.jpg"/>
                        <Name>Vijendra</Name>
                        </Data>
                    <Date>Saturday, 11 December</Date>
                    <Data>1 Hour</Data>
                    <Data><BiRupee/> 600</Data>
                    <Data>Physics</Data>
                    <More><ViewMore/></More>
                </Row>
            </Body>
        </Table>
        

    )
}

export default RecentClasses
