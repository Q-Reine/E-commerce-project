import React from "react";
import '../styles/contact.css'

function Contact()
{
  return (
    <div className="map">
        <div className="location-map">
            <iframe  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.9313146579363!2d-73.99104328459324!3d40.7519807793274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259ae13fa76af%3A0x118ed0cf89c99679!2s501-521%20Fashion%20Ave%2C%20New%20York%2C%20NY%2010018%2C%20USA!5e0!3m2!1sen!2sus!4v1700000000000"
            allowFullScreen=" " loading="lazy"></iframe>
        </div>
        <div className="contact-info">
            <div className="message-form">
                <h2>Leave Us a Message</h2>
                <form className="form">
                    <p>Name * </p>
                    <div className="personal-info">
                        <input type="text" placeholder=" " required /> 
                        <p>First Name</p>
                        <input type="text" placeholder=" " required /> Last Name
                    </div>
                    <p>Email * </p>
                    <input type="email" placeholder=" " required />
                    <p>Comment or Message </p>
                    <textarea placeholder=" "/>
                    <button>SUBMIT</button>
                </form>
            </div>
            <div className="store-info">
                <h2>Our Store</h2>
                <h3>501-521 Fashion Ave, New York, NY 10018, USA</h3>
                <p><strong>PHONE:</strong> +1 212 244 2681</p>
                <p><strong>E-MAIL:</strong> office@example.org</p>
                <h2>Store Hours</h2>
                <p>Sun: Closed</p>
                <p>Mon to Sat: 10 AM - 5:30 PM</p>
            </div>
        </div>
    </div>
  );
};

export default Contact;
