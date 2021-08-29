import React from 'react'
import {Container,Button} from 'react-bootstrap';
import {Sec1,Sec2,Cards,Card1,Div} from '../TeacherStyle';
const Section1 = () => {
    return (
        <>
        <Sec1>
                <h1 className=" py-3">Teach Online with Tuitionpad</h1>
                <ul className="py-3 text-start">
                    <li className="py-3 ">Dear teachers, you can shape the future of a million students using technology. Do you love to play with tech?</li>
                    <li className="py-3">We have a virtual classroom for you. Being a Tuitionpad teacher is more than just teaching a class. When you become part of our family, you are connecting daily with something bigger.</li>
                    <li className="py-3">We are committed to making an impact in the lives of every student we help, and the tutors share that same passion. We are looking for passion-driven, dynamic, and expert of their subject to partner with us and put our students on the road to success.</li>
                </ul>
                <Button variant="danger"> APPLY NOW</Button>
        </Sec1>
        <Sec2>
            <Container>
                <h1>Why Do You Teach With Tuitionpad?</h1>
                <Cards>
                    <Card1>
                        <Div>Earn 26000 to 60000 Per Month</Div>
                        Earn at the higher side. You can earn surprisingly well by putting some hours daily.
                    </Card1>
                    <Card1>
                        <Div>Teach Anytime from Anywhere</Div>
                            You don't need a classroom and school time to follow your passion. You can teach your students from anywhere.
                    </Card1>
                    <Card1>
                        <Div>Become a Recognized Educator on Internet</Div>
                        Your passion for teaching deserves to be recognized on the Internet. Become the face of real education with Tuitionpad.
                    </Card1>
                    <Card1>
                        <Div>Be the Part of Best Educators Community</Div>
                        Get an opportunity to learn and grow from the experiences of thousands of educators
                    </Card1>
                </Cards>
                <Button variant="danger"> APPLY NOW</Button>
            </Container>
        </Sec2>
            
        </>
    )
}

export default Section1
