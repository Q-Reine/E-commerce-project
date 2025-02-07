import React from 'react';
import { useParams } from 'react-router-dom';
import { Products } from "./Home";

function Quickviewpage(){
    const { id } = useParams ();
    console.log("Products", id);

    const productcard=Products.find((product)=>product.id==id)
    return (
        <div>
            <div><img src = {productcard.image}/></div>
            <div>{productcard.name}</div>
            <div>{productcard.price}</div>
        </div>
    )
}
export default Quickviewpage;