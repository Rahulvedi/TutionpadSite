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
                        <Form.Label >Teacher's Name</Form.Label>
                        <Form.Control type="text" required style={{minHeight:'3rem'}}></Form.Control>
                    </Form.Group>
                    <Form.Group id="email" className='mb-3'>
                        <Form.Label >Email</Form.Label>
                        <Form.Control type="email" required  style={{minHeight:'3rem'}}></Form.Control>
                    </Form.Group>
                    <Form.Group id="address" className='mb-3'>
                        <Form.Label >Address</Form.Label>
                        <Form.Control as='textarea'rows="4"cols="50" style={{minHeight:'3rem',resize:'none'}} required/>
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
