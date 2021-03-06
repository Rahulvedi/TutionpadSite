import React, { useContext, useState, useEffect } from 'react'
import axios from 'axios'
const AuthContext = React.createContext()
const baseURL = 'http://localhost:3001/';
const StudentProvider = ({ children }) => {
    const [currentUser, setcurrentUser] = useState({})
    useEffect(() => {
        const acccessToken = localStorage.getItem('token')
        const authAxios = axios.create({
            baseURL: baseURL,
            headers: {
                Authorization: `Bearer ${acccessToken}`
            }
        })
        const getStudent = async () => {
            try {
                await authAxios.get('/students/getstudent').then((res) => {
                    setcurrentUser(res.data)
                })
            } catch (error) {
                console.log(error)
            }
        }
        getStudent();
    }, [])
    const value = {
        currentUser:currentUser,
        baseURL:baseURL,
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
export default StudentProvider

export function Student() {
    return useContext(AuthContext)
}
