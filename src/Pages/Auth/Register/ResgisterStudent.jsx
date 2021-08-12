import React from 'react'
import loginImg from '../../../images/login-page-bg.jpg'
import { Wrapper, FormWrapper, BannerWrapper,BannerImg} from './RegisterStyle';
import StudentMultiForm from './StudentMultiForm/StudentMultiForm';
const ResgisterStudent = () => {
    return (
        <Wrapper>
            <FormWrapper>
                <StudentMultiForm/>
            </FormWrapper>
            <BannerWrapper>
                <BannerImg src={loginImg} />
            </BannerWrapper>
        </Wrapper>
    )
}

export default ResgisterStudent
