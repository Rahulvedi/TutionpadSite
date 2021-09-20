import React,{useContext,useState,useEffect} from 'react'
import axios from 'axios'
const AuthContext=React.createContext()
const baseURL='http://localhost:3001/';
const acccessToken=localStorage.getItem('token')
console.log(acccessToken)
const authAxios=axios.create({
    baseURL:baseURL,
    headers:{
        Authorization:`Bearer ${acccessToken}`
    }
})
const StudentProvider = ({children}) => {
    const [currentUser, setcurrentUser] = useState({})
    useEffect(()=>{
        try{
            authAxios.get('/students/getstudent').then((res)=>{
               setcurrentUser(res.data)
           })
       }catch(error){
           console.log(error)
       }
    },[])
    const value={
        currentUser,
        baseURL,
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
     )
}
export default StudentProvider

export function Student() {
    return  useContext(AuthContext)
}
