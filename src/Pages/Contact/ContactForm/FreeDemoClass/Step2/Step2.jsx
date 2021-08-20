import React from 'react'
import { Form,Button } from 'react-bootstrap';
const Step2 = ({navigation}) => {
    function handleSubmit(e){
        e.preventDefault()
        navigation.next()
    }
    return (
        <>         
                {/* const now = 66;
                const progressInstance = <ProgressBar now={now} label={`${now}%`} />;
                render(progressInstance); */}

                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Parent's Mobile Number</Form.Label>
                        <Form.Control type="phone" placeholder="9928814503" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Parent's Email Address</Form.Label>
                        <Form.Control type="email" placeholder="xyz@gmail.com" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Select Medium</Form.Label>
                        <Form.Select aria-label="Floating label select example">
                        <option>-Select Medium-</option>
                        <option value="1">Hindi</option>
                        <option value="2">English</option>
                        <option value="3">Hindi + English</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Select Demo Date</Form.Label>
                        <Form.Control type="date" />
                    </Form.Group>
                    <Button variant="secondary" type="submit">
                        Next
                    </Button>
                </Form>
        </>
    )
}

export default Step2
