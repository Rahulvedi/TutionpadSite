import React from 'react'
import { Logo,Title,SubTitle,LoginForm,LoginButton } from '../StepFormStyles'
import { Form } from 'react-bootstrap'
const OTPinfo = ({navigation}) => {
    function handleSubmit(e){
        e.preventDefault()
        navigation.next()
    }
    return (
        <>
            <Logo src='/images/logo-alt.svg' />
                <Title>Welcome To Tutionpad</Title>
                <SubTitle>Please Enter OTP</SubTitle>
                <LoginForm onSubmit={handleSubmit}>
                    <Form.Group id="OTP" className='mb-3'>
                        <Form.Label >OTP</Form.Label>
                        <Form.Control type="number" required style={{minHeight:'3rem'}}></Form.Control>
                    </Form.Group> 
                    <LoginButton className="w-100 mt-2" type="submit">Next</LoginButton>
                </LoginForm>
        </>
    )
}

export default OTPinfo
