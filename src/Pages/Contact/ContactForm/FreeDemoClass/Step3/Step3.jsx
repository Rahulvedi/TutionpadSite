import React from 'react'
import { Form,Button,Col, ProgressBar } from 'react-bootstrap';
const Step3 = ({navigation}) => {
    // function handleSubmit(e){
    //     e.preventDefault()
    //     navigation.next()
    // }
    function handlePrev(e){
        e.preventDefault()
        navigation.previous()
    }
    return (
        <>         
                <p className="mb-3 py-1">Step 3 
                <ProgressBar now={100} label={`${100}%`} className="my-2" />
                </p>
                <Form> 
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Do you have Laptop or PC with webcam and headphone at your home for live class? <span style={{color:'blue'}}>*</span></Form.Label>
                        <select className="form-select" aria-label="Default select example" required>
                        <option>-Select-</option>
                        <option value="1">Yes</option>
                        <option value="2">No</option>
                        </select>
                                            
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Internet connection type <span style={{color:'blue'}}>*</span></Form.Label>
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
                        <Form.Label>Details About Your Request <span style={{color:'blue'}}>*</span></Form.Label>
                            <Form.Control as="textarea" placeholder="Details About Your Request" style={{ height: '100px' }}  required/>                   
                    </Form.Group>
                    <div className='d-flex justify-content-between'>
                    <Button variant='secondary' onClick={handlePrev}>
                        Previous
                    </Button>
                    <Button variant="danger">
                        Schedule Demo Class
                    </Button>
                    </div>
                </Form>
        </>
    )
}

export default Step3
