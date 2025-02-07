import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import '../styles/navbar.css'
import { IoSearchOutline } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";
import { CgShoppingBag } from "react-icons/cg";
import { GoHeart } from "react-icons/go";
import { FaAngleDown } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { FaUser}  from "react-icons/fa";
import Login from "./Login";
import Testform from "./Testform"


function Navbar()
{

    const[model, setmodel] =  useState(false);
    const handleloginform = ()=>{
        setmodel(!model);
      }    
    
    const[form, setform] = useState(false);
    const handleform = () => {
        setform(!form);
    }
   
    return (
        <div className="header">
            {model && <Login handleloginform={handleloginform}/>}
            {form && <Testform handleform={handleform}/>}
    
            <div className="nav">
                <h1>Botiga</h1>
                <button className="categories">All categories ▼</button>
                <div className="searchbar">
                    <input placeholder="Search products"/>
                    <IoSearchOutline />                                     
                </div>
                <div className="user">
                < AiOutlineUser onClick={handleloginform} />                        
                </div>
           <div>
          
                    <CgShoppingBag />
                    <GoHeart />
                </div>
            </div>
            <div className="nav-bar">
            <button className="categories">All Categories <FaAngleDown /></button>

                <ul>
                    <Link to='/'><li>Home</li></Link>
                    <Link to='Shop'><li>Shop</li></Link>
                    <Link to='Vendors'><li>Vendors</li></Link>
                    <Link to='Blog'><li>Blog</li></Link>
                    <Link to='Contact'><li>Contact</li></Link>
                    <Link to='View'><li>View</li></Link> 
                   
                </ul>
                <div>
                <IoCall /> 800-123-4567
                </div>
            </div>
           
        </div>
    )
}

export default Navbar