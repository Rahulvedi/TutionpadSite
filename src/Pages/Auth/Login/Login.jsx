import React, { useRef, useState } from 'react'
import { Form, Alert, Spinner} from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import { Wrapper, FormWrapper, BannerWrapper, Logo, Title, SubTitle, LoginForm, BannerImg, LoginButton, SocialIcons, FaceBookBtn, GoogleBtn, Text } from './LoginStyles';
const Login = () => {
    const [Error, setError] = useState('')
    const [Loading, setLoading] = useState(false)
    const passwordRef = useRef()
    const emailRef = useRef()
    const history = useHistory()
    async function handleSubmit(e) {
        e.preventDefault()
        const payload = {
            email: emailRef.current.value,
            password: passwordRef.current.value
        }
        try {
            setLoading(true)
            await axios.post('http://localhost:3001/students/login', payload).then((res) => {
                if(res.data.message==="ok"){
                    console.log(res.data.token)
                    localStorage.setItem('token', res.data.token);
                    history.push('/student-dashboard')
                }
                else{
                    setError(res.data)
                    setLoading(false)
                }
            })
        } catch(error){
            console.log(error)
        }
    }
    return (
        <Wrapper>
            <FormWrapper>
                <Logo src='/images/logo-alt.svg' />
                <Title>Welcome Back</Title>
                <SubTitle>Please log into your account</SubTitle>
                <LoginForm onSubmit={handleSubmit}>
                    <Form.Group id="email" className='mb-3'>
                        <Form.Label >Email</Form.Label>
                        <Form.Control type="email" required style={{ minHeight: '3rem' }} ref={emailRef}></Form.Control>
                    </Form.Group>
                    <Form.Group id="password" className='mb-3'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" required style={{ minHeight: '3rem' }} ref={passwordRef}></Form.Control>
                    </Form.Group>
                    {Error && <Alert variant='danger' className='text-center'>{Error}</Alert>}
                    <LoginButton className="w-100 mt-2" type="submit">{Loading ? <Spinner animation="border" /> : 'Log In'}</LoginButton>
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
