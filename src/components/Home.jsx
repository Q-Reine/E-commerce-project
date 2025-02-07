import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaExchangeAlt, FaTruck, FaBoxOpen } from "react-icons/fa";
import '../styles/home.css'
import bodylotion from '../assets/bodylotion.jpg'
import sports from '../assets/sports.jpg'
import computergadget from '../assets/computergadget.jpg'
import electronics from '../assets/electronics.jpg'
import watch from '../assets/watch.jpg'
import womanclothes from '../assets/womanclothes.jpg'
import AllInOneBottle from '../assets/AllInOneBottle.jpg'
import AmazonAlexa from '../assets/AmazonAlexa.jpg'
import HeadsetGamerLegion from '../assets/HeadsetGamerLegion.jpg'
import santamonica from '../assets/santamonica.jpg'
import joshdoe from '../assets/joshdoe.jpg'
import digitalgoods from '../assets/digitalgoods.jpg'
import jessicastore from '../assets/jessicastore.jpg'
import glassstore from '../assets/glassstore.jpg'
import johndoe from '../assets/johndoe.jpg'
import headset2 from '../assets/headset2.jpg'
import watch2 from '../assets/watch2.jpg'
import camrecorder from '../assets/camrecorder.jpg'
import girl1 from '../assets/girl1.jpg'
import girl2 from '../assets/girl2.jpg'
import girl3 from '../assets/girl3.jpg'
import girl4 from '../assets/girl4.jpg'
import girl5 from '../assets/girl5.jpg'
import girl6 from '../assets/girl6.jpg'



const categories = [
    { name: "Body Lotion", image: bodylotion },
    { name: "Sports", image: sports },
    { name: "Computer Gadget", image:computergadget },
    { name: "Electronics", image:electronics },
    { name: "Watch", image: watch },
    { name: "Woman Clothes", image: womanclothes},
  ];
const products = [
    { name: "All In One Bottle", price: "$22.00 - $55.00", rating: 3, colors: ["bg-green-700", "bg-brown-700", "bg-gray-300"],image: AllInOneBottle },
    { name: "Amazon Alexa", price: "$49.00 - $69.00", rating: 5, colors: ["bg-gray-500", "bg-white"],image: AmazonAlexa },
    { name: "Headset Gamer Legion", price: "$22.00 - $55.00", rating: 4, colors: ["bg-gray-500", "bg-brown-700", "bg-gray-300"], image: HeadsetGamerLegion },
  ];
export const Products= [
    { id: 1, name: "All In One Bottle", price: "$22.00 - $55.00",  image: AllInOneBottle, rating: 2, },
    { id: 2, name: "Amazon Alexa", price: "$49.00 - $69.00", image: AmazonAlexa, rating: 5, },
    { id: 3, name: "Headset Gamer Legion", price: "$22.00 - $55.00", image: HeadsetGamerLegion, rating: 4 },
    { id: 4, name: "Headset Gamer Legion Plus", price: "$22.00 - $55.00", image: headset2, rating: 4},
    { id: 5, name: "JDoe’s Styling Watch", price: "$22.00 - $33.00", image: watch2 , rating: 5},
    { id: 6, name: "Jessi Cam Recorder", price: "$22.00 - $55.00", image: camrecorder, rating: 5 }
  ];
const vendors = [
    { name: "Santa Monica's Store", location: "New York, NY",  image: santamonica},
    { name: "Josh Doe's Store", location: "New York, NY", image: joshdoe },
    { name: "Digital Good's Store", location: "New York, NY", image: digitalgoods},
    { name: "Jessica's Store", location: "New York, NY", image: jessicastore },
    { name: "The Glass Store", location: "New York, NY", image: glassstore },
    { name: "John Doe's Store", location: "New York, NY", image: johndoe },
  ];

const features = [
    { icon: <FaExchangeAlt/>, title: "Easy Returns", description: "Our return policy is simple and that is why customers love our shop."},
    { icon: <FaTruck />, title: "Customer Service", description: "Our return policy is simple and that is why customers love our shop." },
    { icon: <FaBoxOpen/>, title: "High Quality", description: "Our return policy is simple and that is why customers love our shop." }
  ];
const galleryImages = [
    { image: girl1 },
    { image: girl2 },
    { image: girl3 },
    { image: girl4 },
    { image: girl5},
    { image: girl6 },
  ];
  

function Home()
{
    const navigation = useNavigate();
        const handleNavigate = (id) => {
            navigation(`/singleproduct/${id}`)
        }

    return (

        <div className="categories">
            <div className="home">
            <div className="home-1">
                <div className="list-categories">
                    <ul>
                        <li>Electronics</li>
                        <li>Computer Gadget</li>
                        <li>Fashion</li>
                        <li>Body Lotion</li>
                        <li>Sports</li>
                        <li>Woman Clothes</li>
                        <li>Shoes</li>
                        <li>Watches</li>
                    </ul>
                </div>
                <div className="home-1-1">
                    <h1>Explore our latest and greatest electronics</h1>
                    <button>SHOP NOW</button>
                </div>
            </div>
            <div className="Popular-categories">
                <h2>Popular Categories</h2>
                <div className="home-2">
                    {categories.map((category, index) => (
                        <div key={index} className="home-2-text">
                            <img  src={category.image}  alt={category.name} />
                            <p>{category.name}</p>
                        </div>
                    ))}
                </div>
            </div>  
            <div className="New-Arrivals-Products">
                <h2>New Arrival Products</h2>
                <div className="product">
                    {products.map((product) => (
                        <div key={product.id} className="card">
                            <img src={product.image}  alt={product.name}/>
                            <div>
                                <h3>{product.name}</h3>
                                <p >{product.price}</p>
                                <div className="product-rate">
                                    {[...Array(5)].map((_, i) => (
                                        <div key={i} className={`w-5 h-5 ${i < product.rating ? "text-yellow-500" : "text-gray-300"}`}/>
                                    ))}
                                </div>
                                <div className="product-color">
                                    {product.colors.map((color, i) => (
                                        <div key={i} className={`w-5 h-5 rounded-full border ${color}`} />
                                    ))}
                                </div>
                            </div>
                            <Link to='Quickviewpage'> 
                            <button type = "button" className="button-1" onClick={() =>handleNavigate(product.id)}>Quickview</button>
                            </Link>
                        </div>
                    ))}
                </div>
                <div className="shop-btn">
                    <button>SHOP NOW</button>
                </div>
            </div>
            <div className="vendor-list">
                <h2>Our Vendor List</h2>
                <div className="vendor-1">
                    {vendors.map((vendor, index) => (
                        <div key={index} className="border rounded-lg overflow-hidden shadow-md">
                            <img src={vendor.image} alt={vendor.name} />
                            <div className="vendor-1-1">
                                <h3>{vendor.name}</h3>
                                <p>{vendor.location}</p>
                                <button>
                                    &rarr;
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="btn">
                    <button>SEE ALL VENDORS</button>
                </div>            
            </div>
            <div className="features">
                <h2>Why People Choose Us</h2>
                <div className="features-1">
                    {features.map((feature, index) => (
                        <div key={index} className="features-1-1">
                            <div className="features-1-2">{feature.icon}</div>
                            <div className="features-1-2-1">
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="explore-products">
                <h2>Explore Our Products</h2>
                <div className="explore-product">
                    {Products.map((product) => (
                        <div key={product.id} className="explore-1">
                            <img src={product.image} alt={product.name}/>
                            <h3>{product.name}</h3>
                            <p>{product.price}</p>
                            <div className="exlpore-1-1">
                                {Array.from({ length: 5 }).map((_, index) => (
                                    <span key={index} className={ index < product.rating ? "text-yellow-500" : "text-gray-300"}>
                                        ★
                                    </span>
                                ))}
                            </div>
                        </div>
                     ))}
                </div>
                <button>View All Products</button>
            </div>
            </div>
            <div className="follow">
                <h2>Follow us on @instagram</h2>
                <div className="follow-1">
                    {galleryImages.map((galleryImage, index) => (
                        <img  src={galleryImage.image} />
                    ))}
                </div>
            </div>
        </div>

    )
}

export default Home