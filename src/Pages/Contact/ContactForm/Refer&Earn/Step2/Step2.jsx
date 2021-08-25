import React from 'react'
import { Form,Button, ProgressBar } from 'react-bootstrap';
const Step2 = ({navigation}) => {
    function handleSubmit(e){
        e.preventDefault()
        navigation.next()
    }
    function handleBack(e){
        e.preventDefault()
        navigation.previous()
    }
    return (
        <>      
                <p className="mb-3 py-1">Step 2/3 
                <ProgressBar now={66} label={`${66}%`} className="my-2" />
                </p>   
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>WhatsApp Contact Number <span style={{color:'blue'}}>*</span></Form.Label>
                        <Form.Control type="phone" placeholder="WhatsApp Contact Number" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Full Address (Current) <span style={{color:'blue'}}>*</span></Form.Label>
                            <Form.Control as="textarea" placeholder="Full Address (Current)" style={{ height: '100px' }}  required/>                   
                    </Form.Group>
                    <div className='d-flex justify-content-between'>
                    <Button variant="secondary" onClick={handleBack}>
                        Previous
                    </Button>
                    <Button variant="primary" type="submit">
                        Next
                    </Button>
                    </div>
                </Form>
        </>
    )
}

export default Step2
