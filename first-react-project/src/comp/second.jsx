import { useState } from "react";

function Navbar() {
    const products = [
        {
            name: "mobile",
            price: 365
        },
        {
            name: "car",
            price: 3650
        },
        {
            name: "laptop",
            price: 36500
        },
        {
            name: "bike",
            price: 36660
        }
    ];

    return (
        <>
            <div>
                {products.map((product, index) => (
                    <div key={index}>
                        <h3>{product.name}</h3> 
                        <p>{product.price}</p>
                    </div>
                ))}
            </div>
        </>
    );
}

export { Navbar };
