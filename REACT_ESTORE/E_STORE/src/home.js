import React from 'react'
import {Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs';
import { FiTruck } from 'react-icons/fi';
import { CiPercent } from 'react-icons/ci';
import { BiHeadphone } from 'react-icons/bi';
import { AiOutlineShoppingCart, AiOutlineCloseCircle } from 'react-icons/ai';

import './home.css'
const Home = ({detail, view, close, setClose, addtocart}) => {
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
                                <h3>{curElm.Price}</h3>
                                <button>Add To Cart</button>
                            </div>
                        </div>
                    )
                })
            }
            <div className='productbox'></div>
        </div>
    </div> : null
    }
    <div className='top_banner'>
        <div className='container'>
            <div className='detail'>
            </div>  
            <div className='img_box'>
            <img
            className="card-img img-fluid"
            src="./img/img.jpeg"
            alt="Card"
            height={700}
            width={1400}
          />
          <br></br>
                <Link to='/product' className='link'><b>Shop Now </b><BsArrowRight /></Link>

            </div>
        </div>
    </div>
    <div className='product_type'>
      <div className='container'>
        <div className='box'>
          <div className='img_box'>
            <img src='./img/ECG_sensor.jpg' alt='Sensors & module'></img>
          </div>
          <div className='detail'>
            <h4>Sensors & Modules</h4>
            <p>4 products</p>
          </div>
        </div>
        <div className='box'>
          <div className='img_box'>
            <img src='./img/rasberrypi_board.jpg' alt='Boards & Programmers'></img>
          </div>
          <div className='detail'>
          <h4>Boards & Programmers</h4>
            <p>2 products</p>
          </div>
        </div>
        <div className='box'>
          <div className='img_box'>
            <img src='./img/solar_robotics.webp' alt='Robotics'></img>
          </div>
          <div className='detail'>
            <h4>Robotics</h4>
            <p>2 products</p>
          </div>
        </div>
        <div className='box'>
          <div className='img_box'>
            <img src='./img/adapter_power.jpg' alt='Adapter'></img>
          </div>
          <div className='detail'>
            <h4>Power Supply</h4>
            <p>2 products</p>
          </div>
        </div>
      </div>
    </div>
    <div className='about'>
      <div className='container'>
        <div className='box'>
          <div className='icon'>
            <FiTruck />
          </div>
          <div className='detail'>
            <h3>Free Shipping</h3>
            <p>Order above ₹1000</p>
          </div>
        </div>
        
        <div className='box'>
          <div className='icon'>
            <CiPercent />
          </div>
          <div className='detail'>
            <h3>Member Discount</h3>
            <p>On every Order</p>
          </div>
        </div>
        <div className='box'>
          <div className='icon'>
            <BiHeadphone />
          </div>
          <div className='detail'>
            <h3>Customer Support</h3>
            <p>Every Time Call Support</p>
          </div>
        </div>
      </div>
    </div>
    
    
    <div className='banner'>
      <div className='container'>
      <div className='detail'>
        <h1>LATEST EQUIPMENTS ADDED</h1>
       
        <br></br>
        <br></br>
        <br></br>
        <Link to='/product' className='link'>Shop Now  <BsArrowRight /></Link>
      </div>
      <div className='img_box'>
        <img src='./img/led_home.png' alt='sliderimg'></img>
      </div>
      </div>
    </div>
    </>
  )
}

export default Home