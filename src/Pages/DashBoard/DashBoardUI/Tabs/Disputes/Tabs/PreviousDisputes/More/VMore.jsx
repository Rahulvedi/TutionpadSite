import React from 'react'
import { Body, Head, Heading,HeadingDate, Row ,Data,Date,More,ProfileImg,Name,Table} from '../../../../Classes/HiredTutors/Tabs/RecentClasses/RecentClassesStyles'
import {Nav, Title,SubTitle,DateBox,Section,Topic,Container,ModalBody,Button,Share} from './MoreStyles'
import { Modal} from 'react-bootstrap'

const VMore = () => {

    function CenteredModal(props) {
        return (
        <Modal {...props} size="xl" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                <Nav>
                    <Title>Dispute Details</Title>
                    <DateBox>Physics, 26 Nov</DateBox>
                    <SubTitle className="text-uppercase">RESOLVED</SubTitle>
                </Nav>
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ModalBody>
                    <Table responsive="xl">
                        <Head>
                            <Row>
                                <Heading>TUTOR</Heading>
                                <HeadingDate>Class happened on</HeadingDate>
                                <Heading>Subject</Heading>
                                <Heading>STATUS</Heading>
                            </Row>
                        </Head>
                        <Body>
                            <Row>
                                <Data>
                                    <ProfileImg src="/images/ProfileImg.jpg"/>
                                    <Name>Tutor Name</Name>
                                </Data>
                                <Date>26 November</Date>
                                <Data>Physics</Data>
                                <Data style={{color: "#007770"}}>RESOLVED</Data>
                            </Row>
                        </Body>
                    </Table>
                    <Section>
                        <Title>Issue Faced by Student</Title>
                        <Topic>Teacher has denied to my doubt and not responded after multiple attempts.</Topic>
                    </Section>
                    <Section>
                        <Title>Teacher’s View</Title>
                        <Topic>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita, distinctio!</Topic>
                    </Section>
                    <Section>
                        <SubTitle>Action Taken</SubTitle>
                        <Topic>Teacher has been agreed to give an half hour extra time in next class to resolve your doubts, hence you will not be charged for this extra time.</Topic>
                        <Topic>
                            <Container>
                                <Title>Are you happy with the action?</Title>
                                <div className="d-flex my-1">
                                    <Button>Give us a review</Button>
                                    <Share>Share with your friends</Share>
                                </div>
                            </Container>
                        </Topic>
                    </Section>
                    <Section>
                        <Title>Dispute Status</Title>
                        <div className="d-flex my-1">
                            <Topic style={{color: "#007770"}}>RESOLVED</Topic>
                            <Topic>Closed Now</Topic>
                        </div>
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
        
                <CenteredModal show={modalShow} onHide={() => setModalShow(false)} />
            </>
            );
 }
  
export default VMore
