import React from 'react'
import { Form,Button} from 'react-bootstrap';

const WriteUs = () => {
    return (
        <>         
                
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Your Name <span style={{color:'blue'}}>*</span></Form.Label>
                <Form.Control type="name" placeholder="Your Name" required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email Address <span style={{color:'blue'}}>*</span></Form.Label>
                <Form.Control type="email" placeholder="Email Address" required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Contact Number <span style={{color:'blue'}}>*</span></Form.Label>
                 <Form.Control type="phone" placeholder="Contact Number" required />
             </Form.Group>
             <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Message <span style={{color:'blue'}}>*</span></Form.Label>
                 <Form.Control as="textarea" placeholder="Message Here..." style={{ height: '100px' }}  required/>                   
            </Form.Group>
            <div className="d-flex justify-content-end">
            <Button variant="danger" type="submit" >
                Submit
            </Button>
            </div>
        </Form>
       </>
    )
}

export default WriteUs
