import React from 'react'
import { Body, Head, Heading,HeadingDate, Row ,Data,Date,More,Table} from '../Classes/HiredTutors/Tabs/RecentClasses/RecentClassesStyles'
import ViewReport from './ViewReport/ViewReport';
import { Container,NavReport,Selects,Select} from './ReportStyles';
import {DiGhostSmall} from 'react-icons/di'
const Report = () => {
    return (
        <Container>
            <NavReport> 
                <Selects><DiGhostSmall style={{margin:"0 .7rem"}}/>Select Teacher          
                    <Select >
                        <option >Teacher</option>
                        <option value="1">Teacher1</option>
                        <option value="2">Teacher2</option>
                        <option value="3">Teacher3</option>
                    </Select>
                </Selects>
                <Selects>Subject        
                    <Select >
                        <option >Select</option>
                        <option value="1">Physics</option>
                        <option value="2">Chemistry</option>
                        <option value="3">Maths</option>
                        <option value="4">Biology</option>
                        <option value="3">English</option>
                    </Select>
                </Selects>
                <Selects>Month         
                    <input type="month" style={{margin:"0 1rem",cursor: "pointer"}}/>
                </Selects>
            </NavReport>

            <Table>
                <Head>
                    <Row>
                        <Heading>REPORT</Heading>
                        <Heading>TUTOR</Heading>
                        <Heading>SUBJECT</Heading>
                        <HeadingDate>GENERATED ON</HeadingDate>
                        <Heading>ACTION</Heading>
                    </Row>
                </Head>
                <Body>
                    <Row>
                        <Data>Report 1</Data>
                        <Data>Mr. Ramesh</Data>
                        <Data>Physics</Data>
                        <Date>Saturday, 26 November</Date>
                        <More><ViewReport/></More>
                    </Row>
                    <Row>
                        <Data>Report 1</Data>
                        <Data>Mr. Ramesh</Data>
                        <Data>Physics</Data>
                        <Date>Saturday, 26 November</Date>
                        <More><ViewReport/></More>
                    </Row>
                    <Row>
                        <Data>Report 1</Data>
                        <Data>Mr. Ramesh</Data>
                        <Data>Physics</Data>
                        <Date>Saturday, 26 November</Date>
                        <More><ViewReport/></More>
                    </Row>
                    
                </Body>
            </Table>
        </Container>
        

    )
}

export default Report
