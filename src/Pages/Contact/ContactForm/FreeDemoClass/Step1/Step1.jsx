import React from 'react'
import { Form,Button} from 'react-bootstrap';
const Step1 = ({navigation}) => {
    function handleSubmit(e){
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
                        <Form.Select aria-label="Floating label select example">
                        <option>Class</option>
                        <option value="1">Class 8</option>
                        <option value="2">Class 9</option>
                        <option value="3">Class 10</option>
                        <option value="4">Class 11</option>
                        <option value="5">Class 12</option>
                        <option value="5">XI Foundation</option>
                        <option value="6">XII Foundation</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Select Exam</Form.Label>
                        <Form.Select aria-label="Floating label select example">
                        <option>Exam</option>
                        <option value="1">CBSE</option>
                        <option value="2">ICSE</option>
                        <option value="3">IB</option>
                        <option value="4">IIT JEE</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Select Subject</Form.Label>
                        <Form.Select aria-label="Floating label select example">
                        <option>Subject</option>
                        <option value="1">Science</option>
                        <option value="2">English</option>
                        <option value="3">Maths</option>
                        <option value="4">Physics</option>
                        <option value="5">Chemistry</option>
                        <option value="6">Biology</option>
                        <option value="7">Botany</option>
                        <option value="8">Zoology</option>
                        </Form.Select>
                    </Form.Group>
                    <Button variant="secondary" type="submit">
                        Next
                    </Button>
                </Form>
        </>
    )
}

export default Step1
