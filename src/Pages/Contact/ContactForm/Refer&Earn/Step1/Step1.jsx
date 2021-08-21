import React from 'react'
import { Form,Button} from 'react-bootstrap';
const Step1 = ({navigation}) => {
    function handleSubmit(e){
        e.preventDefault()
        navigation.next()
    }
    return (
        <>         
                
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Your Name <span style={{color:'blue'}}>*</span></Form.Label>
                        <Form.Control type="name" placeholder="Your Name" required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email Address <span style={{color:'blue'}}>*</span></Form.Label>
                        <Form.Control type="email" placeholder="Email Address" required/>
                    </Form.Group>
                    <div className="d-flex justify-content-end">
                    <Button variant="primary" type="submit" >
                        Next
                    </Button>
                    </div>
                </Form>
        </>
    )
}

export default Step1
