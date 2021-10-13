import React from 'react'
import {Container,Row,Col,Form,Button} from 'react-bootstrap'

const Requirments = () => {
    return (
        <>
        <Container style={{background: 'rgba(245, 247, 248, 1)',height: '100%', padding:'40px'}}>
            <Row style={{height: '100%'}}>
                <h3 style={{padding:'40px 10px'}}>Post Your Requirments</h3>
            </Row>
            <Container style={{backgroundColor:'rgba(255, 255, 255, 1)',padding:'40px 40px 40px 40px', boxShadow: '5px 10px #ffff'}}>
                <Row style={{padding:'10px 40px 10px 40px'}}>
                    <Col md={5} style={{borderRadius: '5px',backgroundColor: 'white' , alignItems: 'center',display: 'flex', padding:'0px 60px 0px' , border: '2px solid #007770'}}>
                                    <Form size="lg" style={{}}>
                                    <Form.Group controlId="exampleForm.ControlSelect1" >
                                        <Form.Control as="select" style={{borderStyle:'none'}}>
                                        <option>Select Class</option>
                                            <option>10th </option>
                                            <option>11th</option>
                                            <option>12th</option>
                                        </Form.Control>
                                    </Form.Group>
                                </Form>
                    </Col>
                    <Col md={{ span: 1,offset: 0 }}></Col>
                    <Col md={5} style={{borderRadius: '5px',backgroundColor: 'white' , alignItems: 'center',display: 'flex', padding:'0px 60px 0px', border: '2px solid #007770'}}>
                                {/* make a form to select the details */}
                                <Form size="lg">
                                    <Form.Group controlId="exampleForm.ControlSelect1">
                                        <Form.Control as="select" style={{borderStyle:'none'}}>
                                        <option>Select CLass Subject</option>
                                            <option>English</option>
                                            <option>Hindi</option>
                                            <option>Maths</option>
                                            <option>Science</option>
                                            <option>Social Science</option>
                                        </Form.Control>
                                    </Form.Group>
                                </Form>
                    </Col>
                    </Row>
                    <Row style={{padding:'10px 40px 10px 40px'}}>  
                <Col md={5} style={{borderRadius: '5px',backgroundColor: 'white' , alignItems: 'center',display: 'flex', padding:'0px 60px 0px', border: '2px solid #007770'}}>
                                    <Form size="lg" >
                                    <Form.Group controlId="exampleForm.ControlSelect1">
                                        <Form.Control as="select" style={{borderStyle:'none'}}>
                                        <option>Select Subject</option>
                                            <option>English</option>
                                            <option>Hindi</option>
                                            <option>Maths</option>
                                            <option>Science</option>
                                            <option>Social Science</option>
                                        </Form.Control>
                                    </Form.Group>
                                </Form>
                    </Col>
                    <Col md={{ span: 1,offset: 0 }}></Col>
                    <Col md={5} style={{borderRadius: '5px',backgroundColor: 'white' , alignItems: 'center',display: 'flex', padding:'0px 60px 0px', border: '2px solid #007770'}}>
                                    <Form size="lg">
                                    <Form.Group controlId="exampleForm.ControlSelect1">
                                        <Form.Control as="select" style={{borderStyle:'none'}}>
                                        <option>Select Subject</option>
                                            <option>English</option>
                                            <option>Hindi</option>
                                            <option>Maths</option>
                                            <option>Science</option>
                                            <option>Social Science</option>
                                        </Form.Control>
                                    </Form.Group>
                                </Form>
                    </Col>
                    </Row>
                    <Row style={{padding:'10px 40px 10px 40px'}}>
                    <Col md={5} style={{borderRadius: '5px',backgroundColor: 'white' , alignItems: 'center',display: 'flex', padding:'0px 60px 0px', border: '2px solid #007770'}}>
                                    <Form size="lg">
                                    <Form.Group controlId="exampleForm.ControlSelect1">
                                        <Form.Control as="select" style={{borderStyle:'none'}}>
                                        <option>Select Subject</option>
                                            <option>English</option>
                                            <option>Hindi</option>
                                            <option>Maths</option>
                                            <option>Science</option>
                                            <option>Social Science</option>
                                        </Form.Control>
                                    </Form.Group>
                                </Form>
                        </Col>
                        <Col md={{ span: 1,offset: 0 }}></Col>
                        <Col md={5} >
                        {/*Add a range slider */}
                        <input type="range" style={{color:"#6BFCF3CC",width:"100%"}} />
                        </Col>
                    </Row>
                    <Row style={{padding:'10px 40px 10px 40px'}}>
                    <Form>
                <Form.Label>
                Select Tuition Type
                </Form.Label>
                {['Online Live Classes','Offline- Home Tutor','Offline- Home Tutor'].map((type) => (
                    <div key={`default-${type}`} className="mb-3" style={{padding:"0px 20px 0px"}}>
                    <Form.Check 
                        id={`default-${type}`}
                        label={`${type}`}
                    />
                    </div>
                ))}
                </Form>
                    </Row>
                    <Row style={{padding:'10px 40px 10px 40px'}}>
                    <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>About your requirement</Form.Label>
                    <Form.Control as="textarea" rows={6} />
                </Form.Group>
                    </Form>
                    </Row>
                    <Row style={{padding:'10px 40px 10px 40px'}}>
                    <Col md={{ span: 5,offset: 0 }}></Col>
                    <Col md={{span:2,offset:0}}>
                    <Button variant="success">Publish</Button>
                    </Col>
                    <Col md={{ span: 5,offset: 0 }}></Col>
                    </Row>
                </Container>
        </Container>
        </>
    )
}

export default Requirments
