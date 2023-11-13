import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateProducts } from "../ProductSlice";
import { useLocation, useNavigate } from "react-router-dom";

const EditProducts = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { id, name, img, type, price, quantity: initialQuantity } = location.state;

    const [quantity, setQuantity] = useState(initialQuantity);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateProducts({ id, type, price, quantity }));
        navigate('/Ordered_Products', { replace: true });
    };

    return (
        <div className="form-container" style={{ marginTop: '55px' }}>
            <div><img className="image-container" src={img}></img></div>
            <form onSubmit={handleSubmit} className="form">
                <h2>Edit Order</h2>
                <h3>{name}</h3>
                <h4>Type: {type}</h4>
                <h4>Price: {price} BDT </h4>
                <table style={{ marginTop: '25px', marginLeft: '0px', textAlign: 'right' }}>
                    <tr>
                        <td><b>Select Quantity:</b></td>
                        <td>&nbsp;<input type='number' style={{ width: '50px', height: '20px' }} onChange={e => setQuantity(e.target.value)} value={quantity} required></input></td>
                    </tr>
                    <br></br>
                </table>
                <button className="transition-button2">Save</button>
            </form>
        </div>

    );
};

export default EditProducts;
