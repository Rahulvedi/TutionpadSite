import React, { useRef, useState } from 'react'
import { Form ,Alert,Spinner} from 'react-bootstrap';
import axios from 'axios';
import { useHistory } from 'react-router-dom'
import { Logo, Title, SubTitle, LoginForm, LoginButton } from '../StepFormStyles';
const PersonalInfo = ({ formData, setData }) => {
    const [Error, setError] = useState('')
    const passwordRef = useRef()
    const history = useHistory()
    const [Loading, setLoading] = useState(false)
    const passwordConfirmRef = useRef()

    async function handleSubmit(e) {
        e.preventDefault()
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Password do not match')
        }
        try {
            setLoading(true)
            await axios.post('http://localhost:3001/teachers/addteacher', formData).then((res)=>{
                if(res.data==="ok"){
                    history.push('/teacher-dashboard')
                }
                else{
                    setError(res.data)
                    setLoading(false)
                }
            })
        }catch(error){
            console.log(error)
        }
    }
    return (
        <>
            <Logo src='/images/logo-alt.svg' />
            <Title>Welcome To Tutionpad</Title>
            <SubTitle>Account's Info</SubTitle>
            <LoginForm onSubmit={handleSubmit}>
                <Form.Group id="username" className='mb-3'>
                    <Form.Label >Teacher's Name</Form.Label>
                    <Form.Control type="text" required style={{ minHeight: '3rem' }} name="username" onChange={setData}></Form.Control>
                </Form.Group>
                <Form.Group id="email" className='mb-3'>
                    <Form.Label >Email</Form.Label>
                    <Form.Control type="email" required style={{ minHeight: '3rem' }} name="email" onChange={setData}></Form.Control>
                </Form.Group>
                <Form.Group id="address" className='mb-3'>
                    <Form.Label >Address</Form.Label>
                    <Form.Control as='textarea' rows="4" cols="50" style={{ minHeight: '3rem', resize: 'none' }} required name="address" onChange={setData} />
                </Form.Group>
                <Form.Group id="city" className='mb-3'>
                    <Form.Label >City</Form.Label>
                    <Form.Control type="text" required style={{ minHeight: '3rem' }} name="city" onChange={setData}></Form.Control>
                </Form.Group>
                <Form.Group id="country" className='mb-3'>
                    <Form.Label >Country</Form.Label>
                    <Form.Control type="text" required style={{ minHeight: '3rem' }} name="country" onChange={setData}></Form.Control>
                </Form.Group>
                <Form.Group id="password" className='mb-3'>
                    <Form.Label >Password</Form.Label>
                    <Form.Control type="text" required style={{ minHeight: '3rem' }} name="password" ref={passwordRef} onChange={setData}></Form.Control>
                </Form.Group>
                <Form.Group id="confirmPassword" className='mb-3'>
                    <Form.Label >ConfirmPassword</Form.Label>
                    <Form.Control type="text" required style={{ minHeight: '3rem' }} ref={passwordConfirmRef}></Form.Control>
                </Form.Group>
                {Error && <Alert variant='danger' className='text-center'>{Error}</Alert>}
                <LoginButton className="w-100 mt-2" type="submit">{Loading ? <Spinner animation="border" /> : 'Next'}</LoginButton>
            </LoginForm>
        </>
    )
}

export default PersonalInfo
