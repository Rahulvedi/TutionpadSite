import React from 'react'
import loginImg from '../../../images/login-page-bg.jpg'
import { Wrapper, FormWrapper, BannerWrapper,BannerImg} from './RegisterStyle';
import TeacherMultiForm from './TeacherMultiForm/TeacherMultiForm';
const ResgisterTeacher = () => {
    return (
        <Wrapper>
            <FormWrapper>
                <TeacherMultiForm/>
            </FormWrapper>
            <BannerWrapper>
                <BannerImg src={loginImg} />
            </BannerWrapper>
        </Wrapper>
    )
}

export default ResgisterTeacher
