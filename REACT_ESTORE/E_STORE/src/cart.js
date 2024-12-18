import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './cart.css';

const Cart = ({ cart, setCart }) => {
    // Increase qty
    const incQty = (product) => {
        const exist = cart.find((x) => x.id === product.id);
        if (exist.qty < 500) {
            setCart(
                cart.map((curElm) =>
                    curElm.id === product.id ? { ...exist, qty: exist.qty + 1 } : curElm
                )
            );
        }
    };

    // Decrease Qty
    const decQty = (product) => {
        const exist = cart.find((x) => x.id === product.id);
        if (exist.qty > 0) {
            setCart(
                cart.map((curElm) =>
                    curElm.id === product.id ? { ...exist, qty: exist.qty - 1 } : curElm
                )
            );
        }
    };

    // Remove cart product
    const removeProduct = (product) => {
        setCart(cart.filter((x) => x.id !== product.id));
    };

    // Total price
    const totalPrice = cart.reduce((price, item) => price + item.qty * item.Price, 0);

    // Buy Now
    const buyNow = () => {
        // Here you can implement the functionality for buying now, such as redirecting to a checkout page or sending the cart data to a backend.
        // For now, let's just console log the message.
        console.log('Buy Now clicked!');
    };

    return (
        <>
            <div className='cartcontainer'>
                {cart.length === 0 && (
                    <div className='emptycart'>
                        <h2 className='empty'>Cart is Empty</h2>
                        <Link to='/product' className='emptycartbtn'>
                            Shop Now
                        </Link>
                    </div>
                )}
                <div className='contant'>
                    {cart.map((curElm) => (
                        <div className='cart_item' key={curElm.id}>
                            <div className='img_box'>
                                <img src={curElm.Img} alt={curElm.Title} />
                            </div>
                            <div className='detail'>
                                <div className='info'>
                                    <h4>{curElm.Cat}</h4>
                                    <h3>{curElm.Title}</h3>
                                    <p>Price: ₹{curElm.Price}</p>
                                    {curElm.qty === 0}
                                    {curElm.qty > 0 && (
                                        <>
                                            <p>In_Stock: {500 - curElm.qty}</p>
                                            <div className='qty'>
                                                <button
                                                    className='incqty'
                                                    onClick={() => incQty(curElm)}
                                                    disabled={curElm.qty === 500}
                                                >
                                                    +
                                                </button>
                                                <input type='text' value={curElm.qty} readOnly />
                                                <button
                                                    className='decqty'
                                                    onClick={() => decQty(curElm)}
                                                >
                                                    -
                                                </button>
                                            </div>
                                        </>
                                    )}
                                    <h4 className='subtotal'>
                                        Subtotal: ₹{curElm.Price * curElm.qty}
                                    </h4>
                                </div>
                                <div className='close'>
                                    <button onClick={() => removeProduct(curElm)}>
                                        <AiOutlineClose />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {cart.length > 0 && (
                    <>
                        <h2 className='totalprice'>Total: ₹ {totalPrice}</h2>
                        <button className='buyNowBtn' onClick={() =>alert("Thank you for your order! Your order is being processed. Please enter your delivery address at order confirmation section.\n\n  If any queries, please feel free to contact us. 😊 \n \n  ")}>
                            Buy Now
                        </button>
                    </>
                )}
                {cart.length > 0 && (
                    <div className='billBox'>
                        <div className='bill'>
                            <h2>Bill</h2>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Item</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Subtotal</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cart.map((item) => (
                                        <tr key={item.id}>
                                            <td>{item.Title}</td>
                                            <td>₹{item.Price}</td>
                                            <td>{item.qty}</td>
                                            <td>₹{item.Price * item.qty}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Cart;