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
                        <Form.Label>Parent's Mobile Number <span style={{color:'blue'}}>*</span></Form.Label>
                        <Form.Control type="phone" placeholder="eg.9928814503" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Parent's Email Address <span style={{color:'blue'}}>*</span></Form.Label>
                        <Form.Control type="email" placeholder="xyz@gmail.com" required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Select Medium <span style={{color:'blue'}}>*</span></Form.Label>
                        <select className="form-select" aria-label="Default select example" required>
                        <option>-Select Medium-</option>
                        <option value="1">Hindi</option>
                        <option value="2">English</option>
                        <option value="3">Hindi + English</option>
                        </select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Select Demo Date <span style={{color:'blue'}}>*</span></Form.Label>
                        <Form.Control type="date" required />
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
