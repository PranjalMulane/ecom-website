import React, { useState, useEffect } from "react";
import Base from "./Base";
import { getProducts } from "./helper/Coreapicalls";
import "../styles.css";
import Card from "./Card";




export default function Home() {

    const [products, setProducts] = useState([]);
    const [error, setError] = useState(false);

    const loadAllProducts = () => {
        getProducts()
        .then((data) => {
            if(data.error) {
                setError(data.error);
                console.log(error);
            } else {
                setProducts(data);
            }
        });
    };

    useEffect(() => {
        loadAllProducts();
    }, []);

    return ( 
        <Base title="Home Page" description="Welcome to my store">
            <h1>Home</h1>
            <div className="row">
                {products.map((product, index)=>{
                    return(
                        <div key={index} className="col-4 mb-4">
                            <Card product={product}/>
                        </div>
                    );
                } )}
            </div>
            </Base>
    );
}