import React from "react"
import {useState} from "react";
import '../styles/login.css'
import Testform from "./Testform";

const Login = () =>{

  const [showSignup, setShowSignup] = useState(false);

  const handleFormToggle = () => {
      setShowSignup(!showSignup);
  };
    // const[initial, setinitial]= useState("Diane");

    // const Change =() =>{
    //     setinitial("ingabire"); 
    // }
    // const[number1, changenumber] = useState(0);
    // const mynumbers = ()=>{
    //     changenumber(8);
    // }

    
        return(
            // <div className="content">
            // <div className="name">
            //     {initial}
            // </div>
            // <div className="button">
            //     {""}
            //    <button className="btn" onClick={Change}> hook</button>
            // </div>
            // <div className="button">
            //     {""}
            //    <button className="btn" onClick={mynumbers}> hook</button>
            // </div>

            // </div>

            
          <div className="formcontainer">
            {showSignup && <Testform handleform={handleFormToggle}/>}
            <div className="form">
              <form className="login-form">
                
                <h2>Login</h2>
                <input type="text" placeholder="Enter your username " required/>
                <input type="email" placeholder=" Enter your Email" required/> 
                <input type="password" placeholder=" password" required/> 
                <button type="button" className="button">
                    Login
                </button>
                <p>
                    Don't have an account yet? 
                    <button type="button" onClick={handleFormToggle}>Sign Up</button>
                </p>            
            </form>           
           </div>            
          </div>    
        
          
            

        )        
        
   
} 
export default Login;