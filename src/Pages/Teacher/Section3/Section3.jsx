import React from 'react'
import {Container,Button,Col,Row} from 'react-bootstrap';
import { FaAngleRight } from 'react-icons/fa';
import {Sec4,Cards,Card4,Card5,Sec5,Div2,Sec6,Icon,Title,Process} from '../TeacherStyle';
const Section3 = () => {
    return (
        <>
        <Sec4>
            <Container>
                <h1><b>How Much You Can Earn?</b></h1>
                <Cards>
                    <Card4>
                        <b className="fs-3">You can earn minimum</b><br/>
                        <strong  style={{'color':'yellow','fontSize':'3.5rem','padding':'3.5rem .2rem'}} >₹ 26,000+</strong><br/>
                        per month @ 4 hours /day
                    </Card4>
                    <Card4>
                    <b className="fs-3">Up to</b><br/>
                        <strong style={{'color':'yellow','fontSize':'3.5rem','padding':'3.5rem .2rem'}}>₹ 60,000+</strong><br/>
                        for full time faculty
                    </Card4>
                </Cards>
                <Button variant="danger"> APPLY NOW</Button>
            </Container>
        </Sec4>

        <Sec5>
            <h1><b>Our Expectations From Teacher</b></h1>
                <Container className="py-2 my-5">
                <Row>
                    <Col lg={6} md={12}>
                        <Card5>
                        <Div2>Content is King</Div2>
                        We believe a single size of shoes can't be fit for all. You should create very creative content, have multiple interesting ways to understand the topic.
                         </Card5>
                    </Col>
                    <Col lg={6} md={12} >
                        <Card5>
                        <Div2>Growth Mindset</Div2>
                        We train our teacher frequently for new concepts, new tech involvement to grow this partnership. We expect you to be open to learn and grow.
                        </Card5>
                     </Col>
                </Row>
                <Row>
                    <Col lg={6} md={12}>
                    <Card5>
                        <Div2>You Love the Process</Div2>
                        We have some parameters to deliver the best  to our learners. We expect our teachers to follow the parameter for better learning experiences on this platform.
                    </Card5>
                    </Col>
                    <Col lg={6} md={12} >
                    <Card5>
                        <Div2>Consistently Available</Div2>
                        We expect you to be available for a minimum 4 hours daily between 4 PM to 10 PM IST.
                    </Card5>
                     </Col>
                </Row>          
              </Container>
               <Button variant="danger"> APPLY NOW</Button>
        </Sec5>
            
        <Sec6>
            <h1><b>Our Expectations From Teacher</b></h1>
            <Process>
                <b>
                <Title>
                    <Icon><FaAngleRight/></Icon>
                    Apply to be a teacher on Tuitionpad
                </Title>
                <Title>
                    <Icon><FaAngleRight/></Icon>
                    Teachers Eligibility Assessment
                </Title>
                <Title>
                    <Icon><FaAngleRight/></Icon>
                    Demo Live /Recorded Video Class
                </Title>
                <Title>
                    <Icon><FaAngleRight/></Icon>
                    Interview
                </Title>
                <Title>
                    <Icon><FaAngleRight/></Icon>
                    Teacher Term Sheet Agreement
                </Title>
                <Title>
                    <Icon><FaAngleRight/></Icon>
                    Tech Training and Certification
                </Title>
                <Title>
                    <Icon><FaAngleRight/></Icon>
                    Listing on Platform
                </Title>
                </b>
            </Process>
            <Button variant="danger"> APPLY NOW</Button>
        </Sec6>
        </>
    )
}

export default Section3
