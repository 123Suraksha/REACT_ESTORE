import React, { useState } from 'react'
import './contact.css'
import { useAuth0 } from "@auth0/auth0-react";
const Contact = () => {
    const { loginWithRedirect, logout, user, isAuthenticated} = useAuth0();
    const [users, setUser] = useState(
        {
            Name: '', Email: '',Phone: '', Address:'', Message: ''
        }
    )
    let name, value
    const data = (e) => 
    {
        name = e.target.name;
        value = e.target.value;
        setUser({...users, [name]: value})
    }
    const senddata = async (e) => 
    {
        const{ Name, Email,Phone,Address, Message} = users
        e.preventDefault();
        const options = {
            method: 'POST',
            headers: {
                'Content-Type' : 'aplication/json'
            },
            body: JSON.stringify({
                Name, Email,Phone,Address, Message
            })
        }
        const res = await fetch('https://e-store-contact-57e83-default-rtdb.firebaseio.com/Message.json',options)
        console.log(res)
        if(res)
        {
            alert("Your Message sent")
        }
        else
        {
            alert("An error occured")
        }
    }
  return (
    <>
    <div className='contact_container'>
        <div className='contant'>
            <div className='contact'>
                <h2>CONTACT</h2>
                <br></br>
                <hr></hr>
                <br></br>
                 <h3>E-store online platform</h3>
                 <br></br>
                 <p>Phone:9876543210</p>
                 <br></br>
                 <p>email-id: estore@gmail.com</p>
                 <br></br>
                 <p>Hosmane</p>
                 <br></br>
                 <p>Shimoga, 577201</p>

            </div>
            
            <h2>ORDER Confirmation</h2>
            <div className='form'>
                <form method='POST'>
                    <input type='text' name='Name' value={users.Name} placeholder=' Full Name' required autoComplete='off' onChange={data}></input>
                    <input type='email' name='Email' value={users.Email} placeholder=' E-mail' required autoComplete='off' onChange={data}></input>
                    <input type='tel' name='Phone' value={users.Phone} placeholder=' Phone number' required autoComplete='off' onChange={data}></input>
                    <textarea name='Address' value={users.Address} placeholder=' Address' required  autoComplete='off' onChange={data}></textarea>
                    <textarea name='Message' value={users.Message} placeholder=' Message' required  autoComplete='off' onChange={data}></textarea>
                    {
                        isAuthenticated ? 
                        <button type='submit' onClick={senddata}>send</button>
                        : <button type='submit' onClick={() => loginWithRedirect()}>Login to Send</button>
                    }
                </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default Contact