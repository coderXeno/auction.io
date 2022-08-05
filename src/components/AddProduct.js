import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddProduct(){
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log({
            name,
            price,
            owner: localStorage.getItem('userName')
        });
        navigate('/products');
    }

    return(
        <div>
            <div className="addproduct__container">
                <h2>Add a new product</h2>
                <form className="addProduct__form" onSubmit={handleSubmit}>
                    <label htmlFor="name">Name of the product</label>
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        required
                    />

                    <label htmlFor="price">Starting price</label>
                    <input
                        type="number"
                        name="price"
                        value={price}
                        onChange={(event) => setPrice(event.target.value)}
                        required
                    />

                    <button className="addProduct__cta">SEND</button>
                </form>
            </div>
        </div>
    );
};