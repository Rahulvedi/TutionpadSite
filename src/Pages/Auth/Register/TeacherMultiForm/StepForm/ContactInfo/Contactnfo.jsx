import React from 'react'
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Logo, Title, SubTitle, LoginForm, LoginButton, SocialIcons, FaceBookBtn, GoogleBtn,Text} from '../StepFormStyles';
const Contactnfo = ({ formData,setData,navigation}) => {
    function handleSubmit(e){
        e.preventDefault()
        navigation.next()
    }
    return (
        <>
            <Logo src='/images/logo-alt.svg' />
                <Title>Welcome To Tutionpad</Title>
                <SubTitle>Please Register for your account</SubTitle>
                <LoginForm onSubmit={handleSubmit}>
                    <Form.Group id="phoneNo" className='mb-3'>
                        <Form.Label >Mobile No.</Form.Label>
                        <Form.Control type="tel" required style={{minHeight:'3rem'}} name="phoneNo" onChange={setData}></Form.Control>
                    </Form.Group> 
                    <LoginButton className="w-100 mt-2" type="submit">Register</LoginButton>
                </LoginForm>
                <h6 style={{ textAlign: 'center', color: 'gray', margin: '2rem' }}>or Register with</h6>
                <SocialIcons>
                    <FaceBookBtn>FaceBook</FaceBookBtn>
                    <GoogleBtn>Google+</GoogleBtn>
                </SocialIcons>
                <Text>
                Already Have an Account! &nbsp;
                    <Link to='/signin'>Login</Link>
                </Text>
        </>
    )
}

export default Contactnfo
