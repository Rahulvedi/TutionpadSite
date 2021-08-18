import React,{useState} from 'react'
import { Section,Title,SubTitle,Content,Container,Selector} from './Sec5Styles'
import {CgProfile} from 'react-icons/cg'
import {BsCalendar} from 'react-icons/bs'
import {BsFillCameraVideoFill} from 'react-icons/bs'
const BookFreetrailClasses=()=>{
    return(
        <div className='content'>
            <img src="/images/BookTrailClasses.png" alt="" className='content-img'/>
            <div >
                <p className="title">Book Free Trial Class Now</p>
                <p className="text">While booking  trial class, tell us more about what you want to learn.
We will schedule your class with our best subject expert available on the platform at the scheduled date and time..</p>
            </div>
        </div>
    )
}
const AttendDemoClasses=()=>{
    return (
        <div className='content'>
        <img src="/images/AttendDemoClasses.png" alt="" className='content-img'/>
        <div >
            <p className="title">Attend your First Live Class</p>
            <p className="text">Get ready with your computer or laptop with required devices and internet connection at the scheduled time. Sit comfortably and attend your first live class, ask doubts if arises. Your first class is free if you are not satisfied with the faculty.</p>
        </div>
    </div>
    )
}
const ContinueLearning=()=>{
    return (
        <div className='content'>
            <img src="/images/ContinueLearning.png" alt="" className='content-img'/>
            <div >
                <p className="title">Continue Learning</p>
                <p className="text">Once you are satisfied with the faculty, enroll in a regular batch of the faculty and attend classes daily. The class schedule will be shared with you.</p>
            </div>
        </div>
    )
}
const RenderSwitch=({option})=>{
    switch(option) {
        case 0:
          return <BookFreetrailClasses/>;
        case 1:
          return <AttendDemoClasses/>;
        case 2:
          return <ContinueLearning/>;
        default:
          return <BookFreetrailClasses/>;
      }
}
const Sec5 = () => {
    const [Option, setOption] = useState(0)
    return (
        <Section>
            <Title>How to start learning with Tuitionpad? </Title>
            <SubTitle>Learn how to start learning in the comfort of your home, choose batches from 1 on 1 and 1 to 5 group classes, fully personalized to meet your requirements.</SubTitle>
            <Container>
                <Selector>
                    <span className={(Option===0)?'options active':'options'} onClick={()=>setOption(0)}>
                        <BsCalendar className='icon'/>
                        <p className="option">Book Free Trial Class</p>
                    </span>
                    <span className={(Option===1)?'options active':'options'} onClick={()=>setOption(1)}>
                        <BsFillCameraVideoFill className='icon'/>
                        <p className="option">Attend Demo Class</p>
                    </span>
                    <span className={(Option===2)?'options active':'options'} onClick={()=>setOption(2)}>
                        <CgProfile className='icon'/>
                        <p className="option">Continue Learning</p>
                    </span>
                </Selector>
                <Content>
                    <RenderSwitch  option={Option}/>
                </Content>
            </Container>
        </Section>
    )
}

export default Sec5
