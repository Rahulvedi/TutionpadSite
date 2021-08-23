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
                        <Form.Label>Student Name <span style={{color:'blue'}}>*</span></Form.Label>
                        <Form.Control type="name" placeholder="Student Name" required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Select Class <span style={{color:'blue'}}>*</span></Form.Label>
                        <select className="form-select" aria-label="Default select example" required>
                        <option >-Class-</option>
                        <option value="1">Class 8</option>
                        <option value="2">Class 9</option>
                        <option value="3">Class 10</option>
                        <option value="4">Class 11</option>
                        <option value="5">Class 12</option>
                        <option value="5">XI Foundation</option>
                        <option value="6">XII Foundation</option>
                        </select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Select Exam <span style={{color:'blue'}}>*</span></Form.Label>
                        <select className="form-select" aria-label="Default select example" required>
                        <option >-Exam-</option>
                        <option value="1">CBSE</option>
                        <option value="2">ICSE</option>
                        <option value="3">IB</option>
                        <option value="4">IIT JEE</option>
                        </select> 
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Select Subject <span style={{color:'blue'}}>*</span></Form.Label>
                        <select className="form-select" aria-label="Default select example" required>
                        <option >-Select-</option>
                        <option value="1">Science</option>
                        <option value="2">English</option>
                        <option value="3">Maths</option>
                        <option value="4">Physics</option>
                        <option value="5">Chemistry</option>
                        <option value="6">Biology</option>
                        <option value="7">Botany</option>
                        <option value="8">Zoology</option>
                        </select>
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
