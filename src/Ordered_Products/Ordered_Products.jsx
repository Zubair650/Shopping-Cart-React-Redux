import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProducts } from '../ProductSlice';
import { Link } from 'react-router-dom';
import './Ordered_Products.css'

const Ordered_Products = () => {
    const p = useSelector((state) => state.pSlice.products2);
    const [overallTotal, setOverallTotal] = useState(0);
    const dispatch = useDispatch()
    const handleDelete = (id) => {
        dispatch(deleteProducts(id))
    }
    useEffect(() => {
        let total = 0;
        p.forEach((book) => {
            const { price, quantity } = book;
            total += price * quantity;
        });
        setOverallTotal(total);
    }, [p]);

    return (
        <div style={{ marginTop: '65px' }}>
            <h2>Ordered Products</h2>
            <div style={{ margin: '20px 0' }}>
                <strong>Overall Total Cost: {overallTotal}</strong>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, auto)', gap: '20px' }}>
                {p &&
                    p.map((pr) => {
                        const { id, type, name, img, price, quantity } = pr;
                        const totalCost = price * quantity;

                        return (
                            <div key={pr.type} >
                                <div className="card">
                                    <figure><img src={img} alt="Card Image" ></img></figure>
                                    <div className="card-content">
                                        <div className="card-title"><b>{name}</b></div>
                                        <p className="card-text"> <b>{type}</b></p>
                                        <p className="card-text"> Total Price: <b>{totalCost}</b> BDT</p>
                                        <p className="card-text">  Quantity: <b>{quantity}</b></p>
                                    </div>
                                    <Link to='/EditProducts'
                                        state={{ id, img, type, name, price, quantity }}>
                                        <button className='transition-button3' >Update</button> &nbsp;</Link>
                                    <button className='transition-button4' onClick={() => handleDelete(id)}>Delete</button>
                                </div>

                            </div>
                        );
                    })}
            </div>
        </div>
    );
};

export default Ordered_Products;
