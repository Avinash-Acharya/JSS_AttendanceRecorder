import React from 'react'
import Student from '../../Components/Auth/studentLoginPanel/student'
// import Admin from '../../Components/Auth/adminLoginPanel/admin'
import './Login.css'

const Login = (prop) => {
  return (
    <div className='container'>


      
        <Student/>
        {/* <Admin /> */}
        {/* {prop? <Admin/> :  <Student/>} */}

      
    </div>
  )
}

export default Login
