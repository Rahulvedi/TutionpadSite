import React from 'react'
import { Header,Footer } from '../../Components/default'
import Sec1 from './Sections/Sec1/Sec1'
const Home = () => {
    return (
        <>
            <Header/>
            <div className="content">
                <Sec1/>
                <Card/>
            </div>
            <Footer/>
        </>
    )
}

export default Home
