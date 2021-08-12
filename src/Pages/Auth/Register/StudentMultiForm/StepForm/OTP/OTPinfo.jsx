import React from 'react'
import { Logo,Title,SubTitle,LoginForm,LoginButton } from '../StepFormStyles'
import logo from '../../../../../../images/logo-alt.svg'
import { Form } from 'react-bootstrap'
const OTPinfo = ({navigation}) => {
    function handleClick(e){
        navigation.next()
    }
    return (
        <>
            <Logo src={logo} />
                <Title>Welcome To Tutionpad</Title>
                <SubTitle>Please Enter OTP</SubTitle>
                <LoginForm>
                    <Form.Group id="OTP" className='mb-3'>
                        <Form.Label >OTP</Form.Label>
                        <Form.Control type="number" required style={{minHeight:'3rem'}}></Form.Control>
                    </Form.Group> 
                    <LoginButton className="w-100 mt-2" type="submit" onClick={handleClick}>Next</LoginButton>
                </LoginForm>
        </>
    )
}

export default OTPinfo
