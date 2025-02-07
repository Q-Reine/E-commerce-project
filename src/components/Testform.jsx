import React from "react"
import '../styles/test.css'

const Testform = ({handleform}) => {
    return (
        <div className="formcontain">
            <div className="overlay" onClick={handleform}></div>
            <form>                
                <input type="text" placeholder="Enter your Firstname" required/>
                <input type="text" placeholder="Enter your Lastname" required/>
                <input type="email" placeholder="Enter your Email"required />
                <input type="password" placeholder="password" required/>
                <button>Register</button>
                <p>
                    Already have an account? 
                    <button type="button" onClick={handleform}>Login</button>
                </p>
            </form>
                      
        </div>
    )
    
}
export default Testform;