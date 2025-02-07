import React from "react";
import '../styles/vendor.css'
import { FaFilter } from "react-icons/fa";
import { IoGrid, IoList } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import santamonica from '../assets/santamonica.jpg'
import joshdoe from '../assets/joshdoe.jpg'
import digitalgoods from '../assets/digitalgoods.jpg'
import jessicastore from '../assets/jessicastore.jpg'
import glassstore from '../assets/glassstore.jpg'
import johndoe from '../assets/johndoe.jpg'
import shoes2 from '../assets/shoes2.jpg'
import glasses from '../assets/glasses.jpg'
import soundbox from '../assets/soundbox.jpg'
import shirt from '../assets/shirt.jpg'
import person from '../assets/person.jpg'
import user from '../assets/user.jpg'


const stores = [
  { name: "John Doe's Store", image: digitalgoods, rating: 5,  location: "Central Park, New York, US", profile: glasses, },
  { name: "Jessica's Store",  image: shoes2, rating: 4,  location: "Central Park, New York, US",  profile: shoes2, },
  { name: "Santa Monica's Store", image: jessicastore, rating: 4, location: "Central Park, New York, US",  profile: shirt, },
  { name: "Digital Good's Store", image: joshdoe, rating: 5, location: "Central Park, New York, US", profile: soundbox, },
  { name: "The Glass Store", image: santamonica, rating: 3, location: "Central Park, New York, US", profile: person },
  { name: "Josh Doe's Store", image: johndoe, rating: 5, location: "Central Park, New York, US", profile: user },
];

function Vendors()
{
  return (
    <div className="vendor-store">
        <h1>Store List</h1>
        <div className="store-list">
            <h4>Total stores showing: {stores.length}</h4>
                <div className="store-upleftside">
                    <button className="filter">
                        <FaFilter /> Filter
                    </button>
                    <h4>Sort by:</h4>
                    <select className="sort">
                        <option>Most Recent</option>
                        <option>Most popular</option>
                        <option>Random</option>
                    </select>
                    <button className="square-form"><IoGrid /></button>
                    <button className="list-form"><IoList /></button>
                </div>
            </div>
            <div className="store-products">            
                {stores.map((store, index) => (                 
                    <div key={index} className="store-product">
                        <div className="store-image" style={{backgroundImage: `url(${store.image})`}}>
                            <div className="product-list">
                                <h2>{store.name}</h2>
                                <div className="ratings">
                                    {Array.from({ length: store.rating }).map((_, i) => (
                                        <span key={i} className="text-yellow-400">★</span>
                                    ))}
                                </div>
                                <p>{store.location}</p>
                            </div>
                        </div>        
                        <div className="profile-picture">
                            <img src={store.profile} alt="Profile" />
                        </div>                      
                   
                        <button>  <IoIosArrowForward />  </button>
                    </div>
                ))}
            </div>
        </div>
  );
};

export default Vendors;
