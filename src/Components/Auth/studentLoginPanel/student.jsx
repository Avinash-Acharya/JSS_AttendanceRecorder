import React from 'react'
import './student.css'

const student = () => {
  return (
    <div className='container'>

      <form action="" className="studentForm">
        <div className='studentInput'>
          <div>
          <label htmlFor="usnBox" id="usn">USN :</label>
          </div>
          <input placeholder='Enter Your USN' type="text" id="usnBox" />
        </div>
        <button name="submit" id="submit">Login</button>
        <div className="adminlogin">
          Login as <a href='/'>Admin</a>
        </div>
      </form>


    </div>
  )
}

export default student

