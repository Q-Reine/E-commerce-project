import React from "react";
import { useParams } from "react-router-dom";
import { productlist } from "./Homepage";
import '../styles/homepage.css';

function Singlepage() {
    const { id } = useParams();
    console.log("productlist", id);

    const card = productlist.find((card) => card.id === Number(id));

    if (!card) {
        return <div>Product not found</div>;
    }

    return (
        <div>
            <div><img src={card.image} alt={card.cardTitle} /></div>
            <div>{card.cardTitle}</div>
        </div>
    );
}

export default Singlepage;
