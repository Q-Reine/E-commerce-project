import React from "react"
import '../styles/footer.css'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTimes, FaPhone } from "react-icons/fa";
import { SiMastercard, SiVisa, SiPaypal, SiGooglepay, SiApplepay } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";

function Footer()
{
    return (
        
        <div className="footer">
            <div className="footer-1">
                <div className="footer-1-1">
                    <h2>Stay up to date</h2>
                    <p>Subscribe to our newsletter and get 20% discount offer in your first order.</p>
                    <div className="footer-1-2">
                        <input type="email" placeholder="Enter your email" />
                        <button>SUBMIT</button>
                    </div>
                </div>
                <div className="footer-2">
                    <div className="footer-2-1">
                        <h3>SHOP</h3>
                        <ul>
                            <li>Body Lotion</li>
                            <li>Computer Gadget</li>
                            <li>Electronics</li>
                            <li>Fashion</li>
                            <li>General</li>
                            <li>Shoes</li>
                            <li>Sports</li>
                            <li>Watch</li>
                        </ul>
                    </div>
                    <div className="footer-2-2">
                        <h3>COMPANY</h3>
                            <ul>
                                <li>About</li>
                                <li>Careers</li>
                                <li>Help</li>
                                <li>Contact</li>
                            </ul>
                    </div>
                    <div className="footer-2-3">
                        <h3>ABOUT</h3>
                        <ul>
                            <li>Who We Are</li>
                            <li>Reviews</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-3">
                <div className="footer-3-1">
                    <h2>Happy to help</h2>
                    <p>1279 Thorn Street, NY</p>
                    <p>Phone: 307-549-2480</p>
                    <p>Mail: demo@gmail.com</p>
                    <div className="footer-3-2">
                        <FaFacebookF />
                        <FaXTwitter />
                        <FaLinkedinIn />
                        <FaInstagram />
                    </div>
                </div>
                <div className="footer-4">
                    <h2>ACCEPT FOR</h2>
                    <div className="footer-4-1">
                        <SiPaypal />
                        <SiMastercard />
                        <SiGooglepay />
                        <SiApplepay />
                        <SiVisa />
                    </div>
                </div>
            </div>
            
        </div>
        
    )
}
export default Footer