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
              
                <Form> 
            
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Select UPI App <span style={{color:'blue'}}>*</span></Form.Label>
                        <select className="form-select" aria-label="Default select example" required>
                        <option>-Select UPI-</option>
                        <option value="1">GOOGLE PAY</option>
                        <option value="2">PAYTM</option>
                        <option value="3">PHONEPE</option>
                        </select>                        
                    </Form.Group>
                    <div className='d-flex justify-content-between'>
                    <Button variant='secondary' onClick={handlePrev}>
                        Previous
                    </Button>
                    <Button variant="danger" type="submit">
                        Submit
                    </Button>
                    </div>
                </Form>
        </>
    )
}

export default Step3
