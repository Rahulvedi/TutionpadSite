import React from 'react'
import Table from 'react-bootstrap/Table'
import {Profile, ProfileImg,Text} from '../HiredTutorsStyle'
import {BiRupee} from "react-icons/bi"
import Data from "./Data.json"

const RecentClasses = () => {
    return (
        <>
            <Table strip hover>
                <thead>
                    <tr className="text-uppercase" style={{"Color":"#A5A5A5"}}>
                    <th>Tutor</th>
                    <th>Date</th>
                    <th>Duration</th>
                    <th>PRICE PER CLASS</th>
                    <th>Subject</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {Data.map((data,index) => {return (
                    <tr className="px-5" key={index}>
                    <td>
                        <Profile>
                            <ProfileImg src={data.img} />
                            <Text> {data.Tutor}</Text>
                        </Profile>
                    </td>
                    <td>{data.Date}</td>
                    <td>{data.Duration}</td>
                    <td><BiRupee/>{data.Price}</td>
                    <td>{data.Subject}</td>
                    <td style={{"Color":"#007770"}}>{data.Action}</td>
                    </tr>
                )})} 
                    
                </tbody>
                </Table>
        </>
    )
}

export default RecentClasses
