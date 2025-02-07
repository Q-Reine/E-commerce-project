import React from "react";
import { useNavigate } from "react-router-dom";
import '../styles/homepage.css'
import bodylotion from '../assets/bodylotion.jpg'
import sports from '../assets/sports.jpg'


export const productlist = [
    {
        id: 1, image: bodylotion, cardTitle: 'oil'
    },
    {
        id: 2, image: sports, cardTitle: 'sugar'
    },
]
function Homepage () {
    const navigation = useNavigate();
    const handleNavigate = (id) => {
        navigation(`/singlecard/${id}`)
    }
    return (
        <div className="nav-container">
            {productlist.map((item) => (
                <div className="container">
                    <div key={item.id}> <img src = {item.image}/> </div>
                    <div>{item.cardTitle}</div>
                    <button type = "button" className="button-1" onClick={() =>handleNavigate(item.id)}>View</button>
                </div>
                
            ))}

        </div>
    )
}
export default Homepage;