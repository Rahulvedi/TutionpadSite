import React from 'react'
import { Form } from 'react-bootstrap';

import { Logo, Title, SubTitle, LoginForm,LoginButton} from '../StepFormStyles';
const PersonalInfo = () => {
    return (
        <>
            <Logo src='/images/logo-alt.svg'/>
                <Title>Welcome To Tutionpad</Title>
                <SubTitle>Account's Info</SubTitle>
                <LoginForm>
                <Form.Group id="username" className='mb-3'>
                        <Form.Label >Student's Name</Form.Label>
                        <Form.Control type="text" required style={{minHeight:'3rem'}}></Form.Control>
                    </Form.Group>
                    <Form.Group id="email" className='mb-3'>
                        <Form.Label >Email</Form.Label>
                        <Form.Control type="email" required  style={{minHeight:'3rem'}}></Form.Control>
                    </Form.Group>
                    <Form.Group id="class" className='mb-3'>
                        <Form.Label >Class</Form.Label>
                        <Form.Control type="number" required  style={{minHeight:'3rem'}}></Form.Control>
                    </Form.Group>
                    <Form.Group id="DOB" className='mb-3'>
                        <Form.Label >DOB</Form.Label>
                        <Form.Control type="date" required  style={{minHeight:'3rem'}}></Form.Control>
                    </Form.Group>
                    <Form.Group id="city" className='mb-3'>
                        <Form.Label >City</Form.Label>
                        <Form.Control type="text" required  style={{minHeight:'3rem'}}></Form.Control>
                    </Form.Group>
                    <Form.Group id="country" className='mb-3'>
                        <Form.Label >Country</Form.Label>
                        <Form.Control type="text" required  style={{minHeight:'3rem'}}></Form.Control>
                    </Form.Group>
                    <LoginButton className="w-100 mt-2" type="submit">Next</LoginButton>
                </LoginForm>
        </>
    )
}

export default PersonalInfo
