import React from 'react'
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Wrapper, FormWrapper, BannerWrapper, Logo, Title, SubTitle, LoginForm, BannerImg, LoginButton, SocialIcons, FaceBookBtn, GoogleBtn,Text} from './LoginStyles';
const Login = () => {
    return (
        <Wrapper>
            <FormWrapper>
                <Logo src='/images/logo-alt.svg' />
                <Title>Welcome Back</Title>
                <SubTitle>Please log into your account</SubTitle>
                <LoginForm>
                    <Form.Group id="email" className='mb-3'>
                        <Form.Label >Email</Form.Label>
                        <Form.Control type="email" required style={{minHeight:'3rem'}}></Form.Control>
                    </Form.Group>
                    <Form.Group id="password" className='mb-3'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" required style={{minHeight:'3rem'}}></Form.Control>
                    </Form.Group>
                    <LoginButton className="w-100 mt-2" type="submit">Log In</LoginButton>
                </LoginForm>
                <h6 style={{ textAlign: 'center', color: 'gray', margin: '2rem' }}>or login with</h6>
                <SocialIcons>
                    <FaceBookBtn>FaceBook</FaceBookBtn>
                    <GoogleBtn>Google+</GoogleBtn>
                </SocialIcons>
                <Text>
                    Don't Have an Account?&nbsp;
                    <Link to='/signup-as-student'>Registration</Link>
                </Text>
            </FormWrapper>
            <BannerWrapper>
                <BannerImg src='/images/login-page-bg.jpg' />
            </BannerWrapper>
        </Wrapper>
    )
}

export default Login
