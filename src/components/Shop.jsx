import React from "react";
import { useState } from "react";
import '../styles/shop.css'
import shopheader from '../assets/shopheader.webp'
import AllInOneBottle from '../assets/AllInOneBottle.jpg'
import AmazonAlexa from '../assets/AmazonAlexa.jpg'
import HeadsetGamerLegion from '../assets/HeadsetGamerLegion.jpg'
import headset2 from '../assets/headset2.jpg'
import watch2 from '../assets/watch2.jpg'
import camrecorder from '../assets/camrecorder.jpg'
import shoes from '../assets/shoes.jpg'
import mouse from '../assets/mouse.jpg'
import skincream from '../assets/skincream.jpg'

const categories = [
    { name: "Body Lotion", count: 1 },
    { name: "Computer Gadget", count: 3 },
    { name: "Electronics", count: 5 },
    { name: "Fashion", count: 3 },
    { name: "General", count: 1 },
    { name: "Shoes", count: 2 },
    { name: "Sports", count: 3 },
    { name: "Watch", count: 1 },
    { name: "Woman Clothes", count: 3 },
  ];
  const colors = [{ hex: "#D4AF37"},{ hex: "#8B4513"}, { hex: "#C0C0C0" }, { hex: "#FFFFFF" } ];
  const ratings = [ { stars: 5, count: 8 }, { stars: 4, count: 4 }, { stars: 3, count: 1 }, ];
  const products = [
    { name: "All in One Bottle", price: "$22.00 - $55.00", image: AllInOneBottle },
    { name: "Amazon Alexa", price: "$49.00 - $69.00", image: AmazonAlexa },
    { name: "Headset Gamer Legion", price: "$22.00 - $55.00", image: HeadsetGamerLegion },
    { name: "Headset Gamer Legion Plus", price: "$22.00 - $55.00", image: headset2},
    { name: "JDoie's Styling Watch", price: "$22.00 - $33.00", image: watch2 },
    { name: "Jessl Cam Recorder", price: "$22.00 - $55.00", image: camrecorder },
    { name: "John Sport Shoes", price: "$22.00 - $55.00", image: shoes },
    { name: "Mouse Razer 3000DR", price: "$22.00 - $55.00", image: mouse },
    { name: "Santa Monica Facial Cream", price: "$22.00 - $55.00", image: skincream }
  ];
 

function Shop() 
{
  const [price, setPrice] = useState([0, 79]);
  const [sortOption, setSortOption] = useState("Default sorting");
  const [view, setView] = useState("grid");
  return (
    <div className="shop-here">
        <div className="shop-header">
            <img src= {shopheader} />
            <div>
                <h1>Shop</h1>
            </div>
        </div>
        <div className="shop-sides">
        <div className="shop-leftside">
            <div className="categories">
                <h3>Categories</h3>
                   <ul>
                    {categories.map((category) => (
                        <li key={category.name}>
                            {category.name} ({category.count})
                        </li>
                    ))}
                    </ul>
            </div>
            <div className="colors">
                <h3>Color</h3>
                <div className="colors-1">
                    {colors.map((color,index) => (
                        <button key={index} style={{ backgroundColor: color.hex }}/> 
                    
                    ))}
                </div>
            </div>            
            <div className="ratings">
                <h3>Rating</h3>
                <div className="rating-1">
                    {ratings.map((rating) => (
                        <div key={rating.stars}>
                            <span className="text-yellow">{"★".repeat(rating.stars)}</span>
                            <span className="text-gray">{"★".repeat(5 - rating.stars)}</span>
                            <span>({rating.count})</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="prices">
                <h3>Price</h3>
                <input type="range" min="0"  max="79"  value={price[1]}  onChange={(e) => setPrice([0, e.target.value])} />
                    <div className="prices-1">
                        <span>${price[0]}</span>
                        <span>${price[1]}</span>
                    </div>
            </div>
        </div> 
        <div className="shop-rightside">
            <div className="up-rightside">
                <span>Showing 1–9 of 13 results</span>
                <div className="up-rightside-1">
                    <div className="up-rightside-1-1">
                        <button> {sortOption}  <span>&#9662;</span>  </button>
                    </div>
                    <div className="up-rightside-2">
                        <button onClick={() => setView("list")}  className={`p-2 rounded ${view === "list" ? "bg-gray-200" : ""}`}><span>&#9776;</span> </button>
                        <button onClick={() => setView("grid")}   className={`p-2 rounded ${view === "grid" ? "bg-gray-200" : ""}`}><span>&#9638;</span> </button>
                    </div>
                </div>
            </div>
            <div className="shop-product">
                {products.map((product, index) => (
                    <div key={index}>
                        <img src={product.image} alt={product.name}   />
                        <h2>{product.name}</h2>
                        <p>{product.price}</p>
                    </div>
                ))}
            </div>
            <div className="shop-bottom">
                <button>1</button>
                <button>2</button>
            </div>
        </div>
        </div>
    </div>
        
        
        
  );
}

export default Shop