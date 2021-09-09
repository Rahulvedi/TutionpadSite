import React from 'react'
import { Body, Head, Heading, Row ,Data,ProfileImg,Name, Table} from './RecentClassesStyles'
// import { Table } from 'react-bootstrap'
import { BiRupee } from "react-icons/bi"

const RecentClasses = () => {
    return (
        <Table >
            <Head>
                <Row>
                    <Heading>TUTOR</Heading>
                    <Heading>DATE </Heading>
                    <Heading>DURATION</Heading>
                    <Heading>PRICE PER CLASS</Heading>
                    <Heading>SUBJECT</Heading>
                    <Heading>Table heading</Heading>
                    <Heading>ACTION</Heading>
                </Row>
            </Head>
            <Body>
                <Row>
                    <Data>
                        <ProfileImg src="/images/ProfileImg.jpg"/>
                        <Name>Rahul</Name>
                        </Data>
                    <Data>Table cell</Data>
                    <Data>Table cell</Data>
                    <Data>Table cell</Data>
                    <Data>Table cell</Data>
                    <Data>Table cell</Data>
                    <Data>Table cell</Data>
                </Row> 
                <Row>
                    <Data>
                        <ProfileImg src="/images/ProfileImg.jpg"/>
                        <Name>Rahul</Name>
                        </Data>
                    <Data>Table cell</Data>
                    <Data>Table cell</Data>
                    <Data>Table cell</Data>
                    <Data>Table cell</Data>
                    <Data>Table cell</Data>
                    <Data>Table cell</Data>
                </Row> 
                <Row>
                    <Data>
                        <ProfileImg src="/images/ProfileImg.jpg"/>
                        <Name>Rahul</Name>
                        </Data>
                    <Data>Table cell</Data>
                    <Data>Table cell</Data>
                    <Data>Table cell</Data>
                    <Data>Table cell</Data>
                    <Data>Table cell</Data>
                    <Data>Table cell</Data>
                </Row> 
                <Row>
                    <Data>
                        <ProfileImg src="/images/ProfileImg.jpg"/>
                        <Name>Rahul</Name>
                        </Data>
                    <Data>Table cell</Data>
                    <Data>Table cell</Data>
                    <Data>Table cell</Data>
                    <Data>Table cell</Data>
                    <Data>Table cell</Data>
                    <Data>Table cell</Data>
                </Row> 
            </Body>
        </Table>
    )
}

export default RecentClasses
