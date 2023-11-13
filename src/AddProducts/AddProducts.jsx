// import React from 'react';

import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProducts } from "../ProductSlice";
import { useLocation, useNavigate } from "react-router-dom";
import './AddProducts.css'

const AddProducts = () => {
    const location = useLocation();
    const { id, img, name, type, price } = location.state;
    const [quantity, setQuantity] = useState()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const HandleSubmit = e => {
        e.preventDefault();
        const book = { id, type,name, img, price, quantity }
        dispatch(addProducts(book))
        navigate("/Ordered_Products")
    }
    return (
        <div className="form-container" style={{ marginTop: '55px' }}>
            <div><img className="image-container" src={img}></img></div>
            <form onSubmit={HandleSubmit} className="form">
                <h2>Confirm Order</h2>
                <h3>{name}</h3>
                <h4>Type: {type}</h4>
                <h4>Price: {price} BDT </h4>
                <table style={{ marginTop: '25px', marginLeft: '0px', textAlign: 'right' }}>
                    <tr>
                        <td><b>Select Quantity:</b></td>
                        <td>&nbsp;<input type='number' style={{ width: '50px', height: '20px' }} onChange={e => setQuantity(e.target.value)} required></input></td>
                    </tr>
                    <br></br>
                </table>
                <button className="transition-button2">Order Now</button>
            </form>
        </div>
    );
};

export default AddProducts;