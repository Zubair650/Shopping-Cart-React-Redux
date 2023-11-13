// import React from 'react';

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import './AllProducts.css'

const AllProducts = () => {
    const p = useSelector((state) => state.pSlice.products)
    console.log(p)
    return (
        <div style={{ marginTop: '65px' }}>
            <h2>All Products</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, auto)', gap: '20px' }}>
                {p && p.map((pr) => {
                    const { id, type, name, price, img } = pr;
                    return (
                        <div key={pr.type} >
                            <div className="card">
                                <figure><img src={img} alt="Card Image" ></img></figure>
                                <div className="card-content">
                                    <div className="card-title"><b>{name}</b></div>
                                    <div className="card-text"><b>{type}</b></div>
                                    <p className="card-text">Price: <b>{price}</b> BDT</p>
                                </div>
                                <Link to='/AddProducts'
                                    state={{ id, type, name, img, price }}> <button className="transition-button">
                                        Order Now</button></Link>
                            </div>
                        </div>
                    )
                }
                )}
            </div>
        </div>
    );
};

export default AllProducts;