import React from 'react'
import { Form } from 'react-bootstrap';
import logo from '../../../../../../images/logo-alt.svg'
import { Link } from 'react-router-dom';
import { Logo, Title, SubTitle, LoginForm, LoginButton, SocialIcons, FaceBookBtn, GoogleBtn,Text} from '../StepFormStyles';
const Contactnfo = ({navigation}) => {
    function handleClick(e){
        navigation.next()
    }
    return (
        <>
            <Logo src={logo} />
                <Title>Welcome To Tutionpad</Title>
                <SubTitle>Please Register for your account</SubTitle>
                <LoginForm>
                    <Form.Group id="mobileNO." className='mb-3'>
                        <Form.Label >Mobile No.</Form.Label>
                        <Form.Control type="tel" required style={{minHeight:'3rem'}}></Form.Control>
                    </Form.Group> 
                    <LoginButton className="w-100 mt-2" type="submit" onClick={handleClick}>Register</LoginButton>
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
