import React from 'react'
import { Wrapper, FormWrapper, BannerWrapper,BannerImg} from './RegisterStyle';
import TeacherMultiForm from './TeacherMultiForm/TeacherMultiForm';
const ResgisterTeacher = () => {
    return (
        <Wrapper>
            <FormWrapper>
                <TeacherMultiForm/>
            </FormWrapper>
            <BannerWrapper>
                <BannerImg src='/images/login-page-bg.jpg' />
            </BannerWrapper>
        </Wrapper>
    )
}

export default ResgisterTeacher
