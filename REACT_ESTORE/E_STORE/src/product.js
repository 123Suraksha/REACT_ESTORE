import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BsEye } from 'react-icons/bs';
import { AiOutlineHeart, AiOutlineCloseCircle } from 'react-icons/ai';
import { useAuth0 } from "@auth0/auth0-react";
import Productdetail from './productdetail'
import './product.css'
const Product = ({product, setProduct, detail, view, close, setClose, addtocart}) => {


    const { loginWithRedirect,isAuthenticated} = useAuth0();
    const filtterproduct = (product) =>
    {
        const update = Productdetail.filter((x) => 
        {
           return x.Cat === product;
        })
        setProduct(update);
    }
    const AllProducts = () => 
    {
        setProduct(Productdetail)
    }
  return (
    <>
    {
        close ?
        <div className='product_detail'>
        <div className='container'>
            <button onClick={() => setClose(false)} className='closebtn'><AiOutlineCloseCircle /></button>
            {
                detail.map((curElm) => 
                {
                    return(
                        <div className='productbox'>
                            <div className='img-box'>
                                <img src={curElm.Img} alt={curElm.Title}></img>
                            </div>
                            <div className='detail'>
                                <h4>{curElm.Cat}</h4>
                                <h2>{curElm.Title}</h2>
                                <h3>₹{curElm.Price}</h3>
                                <h3>Rating:{curElm.Rating}</h3>
                            </div>
                        </div>
                    )
                })
            }
            <div className='productbox'></div>
        </div>
    </div> : null
    }
    <div className='products'>
        <h2>Products</h2>
        <p>Home . products</p>
        <div className='container'>
            <div className='filter'>
                <div className='categories'>
                    <h3>categories</h3>
                    <ul>
                    <li onClick={() => AllProducts ()}>All Products</li>
                        <li onClick={() => filtterproduct ("Sensors & Modules")}>Sensors & Modules</li>
                        <li onClick={() => filtterproduct ("Boards & Programmers")}>Boards & Programmers</li>
                        <li onClick={() => filtterproduct ("Robotics")}>Robotics</li>
                        <li onClick={() => filtterproduct ("Power Supply")}>Power Supply</li>
                        <li onClick={() => filtterproduct ("Tools & Connectors")}>Tools & Connectors</li>
                    </ul>
                </div>
            </div>
            <div className='productbox'>
                <div className='contant'>
                    {
                        product.map((curElm) => 
                        {
                            return(
                                <>
                                    <div className='box' key={curElm.id}>
                                        <div className='img_box'>
                                          <img src={curElm.Img} alt={curElm.Title}></img>
                                          <div className='icon'>
                                            {
                                                isAuthenticated ? 
                                                <li onClick={() => addtocart (curElm)}><AiOutlineShoppingCart /></li>
                                                :
                                                <li onClick={() => loginWithRedirect()}><AiOutlineShoppingCart /></li>
                                            }
                                            <li onClick={() => view (curElm)}><BsEye /></li>
                                                                           
                                          </div>
                                        </div>
                                        <div className='detail'>
                                          <p>{curElm.Cat}</p>
                                          <h3>{curElm.Title}</h3>
                                          <h4>₹{curElm.Price}</h4>
                                        </div>
                                      </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Product