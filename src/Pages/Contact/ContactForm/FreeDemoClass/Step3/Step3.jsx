import React from 'react'
import { Form,Button,Col } from 'react-bootstrap';
const Step3 = ({navigation}) => {
    function handleSubmit(e){
        e.preventDefault()
        navigation.next()
    }
    function handlePrev(e){
        e.preventDefault()
        navigation.previous()
    }
    return (
        <>         
                {/* <div class="progress">
                <div class="progress-bar" role="progressbar" style="width: 100%;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">100%</div>
                </div> */}
                {/* <Form onSubmit={handleSubmit}> */}
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
                        Prev
                    </Button>
                    <Button variant="danger" type="submit">
                        Schedule Demo Class
                    </Button>
                    </div>
                </Form>
        </>
    )
}

export default Step3
