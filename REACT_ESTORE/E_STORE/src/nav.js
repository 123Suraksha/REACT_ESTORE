import React, { useState } from 'react'
import { AiOutlineHeart } from 'react-icons/ai';
import { BsBagCheck } from 'react-icons/bs';
import { AiOutlineUser } from 'react-icons/ai';
import { CiLogin } from 'react-icons/ci';
import { CiLogout } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import './nav.css'
const Nav = ({searchbtn}) => {
    const [search, setSearch] = useState()
    const { loginWithRedirect, logout, user, isAuthenticated} = useAuth0();
  return (
    <>
    
    <div className='main_header'>
        <div className='container'>
            <h1>E-store</h1>

            <div className='icon'>
                {
                    isAuthenticated &&
                    (
                        <div className='account'>
                        <div className='user_icon'>
                        <AiOutlineUser />
                        </div>
                        <p>Hello, {user.name}</p>
                    </div>
                    )
                }
                <div className='second_icon'>             
                <Link to="/cart" className='link'><BsBagCheck /></Link>
                </div>
            </div>
        </div>
    </div>
    <div className='header'>
        <div className='container'>
            <div className='nav'>
            <ul>
                <li>
                    <Link to='/' className='link'>Home</Link>
                </li>
                <li>
                    <Link to='/product'className='link'>Product</Link>
                </li>
                <li>
                    <Link to='/about'className='link'>About</Link>
                </li>
                <li>
                    <Link to='/contact'className='link'>contact</Link>
                </li>
            </ul>
           
            </div>
            <div className='auth'>
                {  
                    isAuthenticated ?
                    <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}><CiLogout /><h6>Logout</h6></button>
                    :
                    <button onClick={() => loginWithRedirect()}><CiLogin /><h6>Login</h6></button>
                    
                }
           
            </div>
            
        </div>
    </div>
    </>
  )
}

export default Nav