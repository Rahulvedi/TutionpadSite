import React from 'react'
import { Header,Footer } from '../../Components/default'
import Sec0 from './Sec/Sec0'
import Sec2 from './Sec/Sec2'
// import Sec3 from './Sec/Sec3'
import Sec4 from './Sec/Sec4'
const About = () => {
    return (
        <>
            <Header/>
            <div className="sec0" style={{
                'background-color':'#E6F0F9'   
            }}>
            <Sec0/>
            </div> 
            <div className="container">
                    <Sec2/>
            </div>
            <div className="container-fluid" style={{
                'background-color':'#E6F0F9'   
            }}>
            {/* <Sec3/> */}
            </div>
            <div className="container-fluid"
            style={{
                'background-color':'#E6F0F9'   
            }}>
                <Sec4/>
            </div>
            <Footer/>
        </>
    )
}

export default About
