import React from 'react'
import { Body, Head, Heading,HeadingDate, Row ,Data,Date,More,Table} from '../../../Classes/HiredTutors/Tabs/RecentClasses/RecentClassesStyles'
import {Section} from "../../../Report/ViewReport/ViewReportStyles"
import { BiRupee } from "react-icons/bi";

const MyOrders = () => {
    return (
        <>

        <Section>
           <h1 style={{fontSize: "16px",color: "rgba(52, 70, 69, 0.78)"}}>
               You hired 3 tutors.</h1>  
        </Section>
        <Section>
            <Table>
                <Head>
                    <Row>
                        <Heading>TUTOR</Heading>
                        <Heading>SUBJECT </Heading>
                        <Heading>FEE PER CLASS</Heading>
                        <HeadingDate>WHEN HIRED</HeadingDate>
                        <Heading>CLASSES TAKEN</Heading>
                    </Row>
                </Head>
                <Body>
                    <Row>
                        <Data>Mr. Ramesh</Data>
                        <Data>Physics</Data>
                        <Data><BiRupee/> 500</Data>
                        <Date>Saturday, 26 November</Date>
                        <More>15 Classes</More>   
                    </Row>
                    <Row>
                        <Data>Mr. Ramesh</Data>
                        <Data>Physics</Data>
                        <Data><BiRupee/> 500</Data>
                        <Date>Saturday, 26 November</Date>
                        <More>15 Classes</More>   
                    </Row>
                    <Row>
                        <Data>Mr. Ramesh</Data>
                        <Data>Physics</Data>
                        <Data><BiRupee/> 500</Data>
                        <Date>Saturday, 26 November</Date>
                        <More>15 Classes</More>   
                    </Row> 
                </Body>
            </Table>
        </Section>
        </>

    )
}

export default MyOrders
