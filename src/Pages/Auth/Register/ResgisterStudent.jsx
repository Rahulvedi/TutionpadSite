import React from 'react'
import { Wrapper, FormWrapper, BannerWrapper,BannerImg} from './RegisterStyle';
import StudentMultiForm from './StudentMultiForm/StudentMultiForm';
const ResgisterStudent = () => {
    return (
        <Wrapper>
            <FormWrapper>
                <StudentMultiForm/>
            </FormWrapper>
            <BannerWrapper>
                <BannerImg src='/images/login-page-bg.jpg' />
            </BannerWrapper>
        </Wrapper>
    )
}

export default ResgisterStudent
