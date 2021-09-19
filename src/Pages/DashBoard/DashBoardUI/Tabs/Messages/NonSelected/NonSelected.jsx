import React from 'react'
import styled from "styled-components";
import {BiMessageDetail} from "react-icons/bi"
const NonSelected = () => {

    const Non=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #6BFCF347;
    height:18rem;
    width: 18rem;
    padding: 1rem;
    margin:9rem 25rem;
    border-radius:20rem;
    `
    return (
        <>
            <Non>
                <BiMessageDetail style={{fontSize:"7rem" , color: "#00777080"}}/>
                No conversation selected
            </Non>

        </>
    )
}

export default NonSelected
