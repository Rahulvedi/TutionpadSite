import React from 'react'
import { Body, Head, Heading,HeadingDate, Row ,Data,Date,More,Table} from '../../Classes/HiredTutors/Tabs/RecentClasses/RecentClassesStyles'
import {Nav, Title,SubTitle,DateBox,Section,ModalBody,Star,SubSection,Box,BoxDate,Text,SubText,BlurText,Area,Dispute,Para,Resolved,Assessment,Bar,Progress} from './ViewReportStyles'
import { Modal} from 'react-bootstrap'


const ViewReport = () => {

    function MyVerticalModal(props) {
        return (
        <Modal
            {...props}
            size="xl"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                <Nav>
                    <Title style={{marginRight:"3rem"}}> Report 1</Title>
                    <DateBox>Mr. Ramesh, Physics</DateBox>
                    <SubTitle>14 Nov. to 20 Nov.</SubTitle>
                </Nav>
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ModalBody>
                    <Section>
                        <Title>Weekly Report</Title>
                        <SubSection>
                            <Box>5</Box>
                            <Area>   
                                <SubTitle>Classes</SubTitle>
                                <Text>Happend this week</Text>
                            </Area>
                            <Box>0</Box>
                            <Area>   
                                <SubTitle>Disputes</SubTitle>
                                <Text>Raised</Text>
                            </Area>
                            <Box>5</Box>
                            <Area>   
                                <SubTitle>Assessments</SubTitle>
                                <Text>Taken this week</Text>
                            </Area>
                        </SubSection>
                    </Section>
                    <Section>
                        <Title>Classes</Title>
                        <Table responsive="xl">
                            <Head>
                                <Row>
                                    <HeadingDate>DATE </HeadingDate>
                                    <Heading>SUBJECT</Heading>
                                    <Heading>RATING</Heading>
                                    <HeadingDate>TEACHERS REMARK</HeadingDate>
                                    <Heading>ACTION</Heading>
                                </Row>
                            </Head>
                            <Body>
                                <Row>
                                    <Date>1 Nov. 2021</Date>
                                    <Data>Physics</Data>
                                    <Data><Star/><Star/><Star/><Star/><Star/></Data>
                                    <Date>Lorem ipsum dolor sit.</Date>
                                    <More>View</More>
                                </Row>
                                <Row>
                                    <Date>1 Nov. 2021</Date>
                                    <Data>Physics</Data>
                                    <Data><Star/><Star/><Star/><Star/><Star/></Data>
                                    <Date>Lorem ipsum dolor sit.</Date>
                                    <More>View</More>
                                </Row>
                                <Row>
                                    <Date>1 Nov. 2021</Date>
                                    <Data>Physics</Data>
                                    <Data><Star/><Star/><Star/><Star/><Star/></Data>
                                    <Date>Lorem ipsum dolor sit.</Date>
                                    <More>View</More>
                                </Row>
                            </Body>
                        </Table>
                    </Section>
                    <Section>
                        <Title>Disputes</Title>
                        <SubSection>
                            <Dispute>
                                <BoxDate>Class- 26 November</BoxDate>
                                <Text>Mr. Somesh</Text>
                                <SubText>Physics Class</SubText>
                                <Para>
                                    <BlurText>Issue</BlurText>
                                    Teacher has been agreed to give a free demo class.....<b>More</b> 
                                </Para>
                                <Resolved>RESOLVED</Resolved>
                            </Dispute>
                            <Dispute>
                                <BoxDate>Class- 26 November</BoxDate>
                                <Text>Mr. Somesh</Text>
                                <SubText>Physics Class</SubText>
                                <Para>
                                    <BlurText>Issue</BlurText>
                                    Teacher has been agreed to give a free demo class.....<b>More</b> 
                                </Para>
                                <Resolved>RESOLVED</Resolved>
                            </Dispute>
                            <Dispute>
                                <BoxDate>Class- 26 November</BoxDate>
                                <Text>Mr. Somesh</Text>
                                <SubText>Physics Class</SubText>
                                <Para>
                                    <BlurText>Issue</BlurText>
                                    Teacher has been agreed to give a free demo class.....<b>More</b> 
                                </Para>
                                <Resolved>RESOLVED</Resolved>
                            </Dispute>
                        </SubSection>
                    </Section>
                    <Section>
                        <Title>Assessments</Title>
                        <Assessment>
                            <SubSection style={{justifyContent:"space-between",width:"80%"}}>
                                <BoxDate>Assessment 1</BoxDate>
                                <SubTitle>26 November, 2021</SubTitle>
                                <Text>Mr. Somesh</Text>
                                <SubText>Physics Class</SubText>
                                <BlurText>MCQ </BlurText>
                                <BlurText>30 Minutes</BlurText>
                            </SubSection>
                            <SubSection style={{justifyContent:"space-between"}}>
                                <Progress>
                                    <div className="d-flex my-0 py-0"> 
                                    <SubText>Total Questions</SubText><b className=" mx-2 ">10</b></div>
                                    <Bar now={45} variant="success"/>
                                </Progress>
                                <Progress>
                                    <div className="d-flex">
                                     <SubText>Correct Questions</SubText><b className="mx-2">8</b></div>
                                    <Bar now={45} variant="success"/>
                                </Progress>
                                <Progress>
                                    <div className="d-flex"> 
                                    <SubText>Incorrect Questions</SubText><b className="mx-2">2</b></div>
                                    <Bar now={45} variant="success"/>
                                </Progress>
                            </SubSection>
                            <SubText>You have attempted 8 questions</SubText>
                            <Para>
                                <Text>Teacher’s Remark</Text>
                                Teacher has been agreed to give Teacher has been agreed to give a free demo class.. a free demo class Teacher has been agreed to give a free demo class.
                            </Para>
                        </Assessment>
                        <Assessment>
                            <SubSection style={{justifyContent:"space-between",width:"80%"}}>
                                <BoxDate>Assessment 1</BoxDate>
                                <SubTitle>26 November, 2021</SubTitle>
                                <Text>Mr. Somesh</Text>
                                <SubText>Physics Class</SubText>
                                <BlurText>MCQ </BlurText>
                                <BlurText>30 Minutes</BlurText>
                            </SubSection>
                            <SubSection style={{justifyContent:"space-between"}}>
                                <Progress>
                                    <div className="d-flex my-0 py-0"> 
                                    <SubText>Total Questions</SubText><b className=" mx-2 ">10</b></div>
                                    <Bar now={45} variant="success"/>
                                </Progress>
                                <Progress>
                                    <div className="d-flex">
                                     <SubText>Correct Questions</SubText><b className="mx-2">8</b></div>
                                    <Bar now={45} variant="success"/>
                                </Progress>
                                <Progress>
                                    <div className="d-flex"> 
                                    <SubText>Incorrect Questions</SubText><b className="mx-2">2</b></div>
                                    <Bar now={45} variant="success"/>
                                </Progress>
                            </SubSection>
                            <SubText>You have attempted 8 questions</SubText>
                            <Para>
                                <Text>Teacher’s Remark</Text>
                                Teacher has been agreed to give Teacher has been agreed to give a free demo class.. a free demo class Teacher has been agreed to give a free demo class.
                            </Para>
                        </Assessment>
                    </Section>
                </ModalBody>
            </Modal.Body>
        </Modal>
        );
    }


    const [modalShow, setModalShow] = React.useState(false);
        
            return (
            <>
                    <More onClick={() => setModalShow(true)}>View More</More>
        
                <MyVerticalModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                />
            </>
            );
 }
  
export default ViewReport
