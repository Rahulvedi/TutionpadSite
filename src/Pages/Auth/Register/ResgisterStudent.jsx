import React from 'react'
import logo from '../../../images/logo-alt.svg'
import loginImg from '../../../images/login-page-bg.jpg'
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Wrapper, FormWrapper, BannerWrapper, Logo, Title, SubTitle, LoginForm, BannerImg, LoginButton, SocialIcons, FaceBookBtn, GoogleBtn,Text} from './RegisterStudentStyle';
const ResgisterStudent = () => {
    return (
        <Wrapper>
            <FormWrapper>
                <Logo src={logo} />
                <Title>Welcome To Tutionpad</Title>
                <SubTitle>Please Register for your account</SubTitle>
                <LoginForm>
                    <Form.Group id="username" className='mb-3'>
                        <Form.Label >Username</Form.Label>
                        <Form.Control type="text" required style={{minHeight:'3rem'}}></Form.Control>
                    </Form.Group>
                    <Form.Group id="email" className='mb-3'>
                        <Form.Label >Email</Form.Label>
                        <Form.Control type="email" required  style={{minHeight:'3rem'}}></Form.Control>
                    </Form.Group>
                    <Form.Group id="password" className='mb-3'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" required  style={{minHeight:'3rem'}}></Form.Control>
                    </Form.Group>
                    <Form.Group id="confirmPassword" className='mb-3'>
                        <Form.Label>ConfirmPassword</Form.Label>
                        <Form.Control type="password" required  style={{minHeight:'3rem'}}></Form.Control>
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
            </FormWrapper>
            <BannerWrapper>
                <BannerImg src={loginImg} />
            </BannerWrapper>
        </Wrapper>
    )
}

export default ResgisterStudent
