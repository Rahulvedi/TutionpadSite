import React from 'react'
import { Header } from '../../Components/default'
import Sec1 from './Sections/Sec1/Sec1'
import Sec2 from './Sections/Sec2/Sec2'
import Sec3 from './Sections/Sec3/Sec3.jsx'
// import Sec4 from './Sections/Sec4/Sec4'
import Sec5 from './Sections/Sec5/Sec5'
import Sec6 from './Sections/Sec6/Sec6'
const Home = () => {
    return (
        <>
            <Header/>
            <Sec1/>
            <Sec2/>
            <Sec3/>
            {/* <Sec4/> */}
            <Sec5/>
            <Sec6/>
        </>
    )
}

export default Home
