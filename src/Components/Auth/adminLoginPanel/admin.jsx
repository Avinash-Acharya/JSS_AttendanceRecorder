import React from 'react'
import './admin.css'

const admin = () => {
    return (
        <div className='container'>
            <div className="con1">
            <form action="" className="adminForm">
                <div className='Username'>
                    <div>
                        <label htmlFor="usernameBox" id="username">Username :</label>
                    </div>
                    <input placeholder='Enter Your Username' type="text" id="usernameBox" />
                </div>
                <div className='Password'>
                    <div>
                        <label htmlFor="passwordBox" id="password">Password :</label>
                    </div>
                    <input placeholder='Enter Your Password' type="password" id="passwordBox" />
                </div>
                <button name="submit" id="submit">Login</button>
                {/* <div className="studentlogin">
                    Login as <a href='/'>Student</a>
                </div> */} 
                {/* This link is used to navigate to the Student page when clicked.
                    Could be added if found necessary. */}
                
            </form>
            </div>

        </div>
    )
}

export default admin

