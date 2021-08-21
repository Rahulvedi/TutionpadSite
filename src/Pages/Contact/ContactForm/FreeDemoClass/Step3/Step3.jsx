import React from 'react'
import { Form,Button,Col } from 'react-bootstrap';
const Step3 = ({navigation}) => {
    function handleSubmit(e){
        e.preventDefault()
        navigation.next()
    }
    return (
        <>         
                {/* const now = 100;
                const progressInstance = <ProgressBar now={now} label={`${now}%`} />;
                render(progressInstance); */}

                <Form onSubmit={handleSubmit}>
            
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Do you have Laptop or PC with webcam and headphone at your home for live class?</Form.Label>
                        <Form.Select aria-label="Floating label select example">
                        <option>-Select-</option>
                        <option value="1">Yes</option>
                        <option value="2">No</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Internet connection type </Form.Label>
                        <Col sm={10}>
                            <Form.Check type="radio" label=" Broadband" name="formHorizontalRadios" id="formHorizontalRadios1"
                            />
                            <Form.Check type="radio" label=" Jio Fiber" name="formHorizontalRadios" id="formHorizontalRadios2"
                            />
                            <Form.Check  type="radio"  label="JioFi" name="formHorizontalRadios" id="formHorizontalRadios3"
                            />
                            <Form.Check  type="radio"  label="WiFi Router" name="formHorizontalRadios" id="formHorizontalRadios4"
                            />
                            <Form.Check  type="radio"  label=" Mobile Internet" name="formHorizontalRadios" id="formHorizontalRadios5"
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Details About Your Request</Form.Label>
                            <Form.Control as="textarea" placeholder="Details About Your Request" style={{ height: '100px' }}/>                   
                    </Form.Group>
                    <Button variant="Danger" type="submit">
                        Schedule Demo Class
                    </Button>
                </Form>
        </>
    )
}

export default Step3
