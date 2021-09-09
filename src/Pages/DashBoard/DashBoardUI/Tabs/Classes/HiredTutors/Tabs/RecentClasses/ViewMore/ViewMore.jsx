import React from 'react'
import { Body, Head, Heading,HeadingDate, Row ,Data,Date,More,ProfileImg,Name} from '../RecentClassesStyles'
import {Nav, Title,SubTitle,DateBox,Section,Topic,Rated,ModalBody,Button} from './ViewMoreStyles'
import { Table,Modal} from 'react-bootstrap'
import { BiRupee } from "react-icons/bi"

const ViewMore = () => {

    function MyVerticallyCenteredModal(props) {
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
                    <Title> Class Details</Title>
                    <DateBox>Physics, 26 Nov</DateBox>
                    <SubTitle className="text-uppercase">Completed</SubTitle>
                </Nav>
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ModalBody>

                    <Table responsive="xl">
                        <Head>
                            <Row>
                                <Heading>TUTOR</Heading>
                                <HeadingDate>DATE </HeadingDate>
                                <Heading>DURATION</Heading>
                                <Heading>PRICE PER CLASS</Heading>
                                <Heading>SUBJECT</Heading>
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
                            </Row>
                        </Body>
                    </Table>
                    <Section>
                        <Title>What exactly taught by tutor</Title>
                        <Topic>Topic 1</Topic>
                        <Topic>Topic 2</Topic>
                        <Topic>Topic 3</Topic>
                    </Section>
                    <Section>
                        <SubTitle>Teacher’s Remark</SubTitle>
                        <Topic>Improve 1</Topic>
                        <Topic>revise 1</Topic>
                    </Section>
                    <Section>
                        <Title>Your Feedback</Title>
                        <Topic>Awesome Class</Topic>
                        <Rated> 5 Star Rated</Rated>
                    </Section>
                    <Section>
                        <Title>Dispute</Title>
                        <Topic>No Dispute Raised</Topic>
                    </Section>
                    <Section className="my-5">
                        <Topic>Faced any issue during this class?</Topic>
                        <Button>Create A Dispute</Button>
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
        
                <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                />
            </>
            );
 }
  
export default ViewMore
