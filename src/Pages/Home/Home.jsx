import React,{useState} from 'react'
import {Navbar} from '../../Components/default'
import { Link } from 'react-router-dom'
const Home = () => {
    const [Count, setCount] = useState(0)
    function handleClick(){
        setCount(Count+1)
    }
    return (
        <>
            <Navbar/>
            <Link to='/about'>go to about</Link>
            <p onClick={handleClick}>{Count}</p>
        </>
    )
}

export default Home
