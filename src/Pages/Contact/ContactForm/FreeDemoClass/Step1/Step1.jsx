import React from 'react'
import { Form, Button } from 'react-bootstrap';
const Step1 = ({ navigation }) => {
    function handleSubmit(e) {
        e.preventDefault()
        navigation.next()
    }
    return (
        <>
            {/* const now = 33;
                const progressInstance = <ProgressBar now={now} label={`${now}%`} />;
                render(progressInstance); */}

            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Student Name</Form.Label>
                    <Form.Control type="name" placeholder="Student Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Select Class</Form.Label>
                    <select class="form-select" aria-label="Default select example">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Select Exam</Form.Label>
                    <select class="form-select" aria-label="Default select example">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Select Subject</Form.Label>
                    <select class="form-select" aria-label="Default select example">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
                </Form.Group>
                <Button variant="secondary" type="submit">
                    Next
                </Button>
            </Form>
        </>
    )
}

export default Step1
