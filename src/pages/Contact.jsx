import React, { useState } from 'react'

const Contact = () => {
    const [contact, setContact]= useState({
        username:"",
        email:"",
        message:"",
    });

    const handleInput =(e)=>{
    let name=e.target.name;
    let value = e.target.value;

    setContact({
        ...contact,
        [name]:value,
    });

    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(contact);
    }
  return (
   
   <>
   <section className='section-contact'>
    <div className="contact-content container">
        <h1 className="main-heading">contact us</h1>
    </div>
    <div className="container grid grid-two-cols">
        <div className="contact-img">
            <img src="/images/contact.png" alt="contact image" />
        </div>

        <section className="section-form">
           <form  onClick={handleSubmit}>
            <div>
                <label htmlFor="username">username</label>
                <input type="text" name='username' id='username' autoComplete='off' required value={contact.username} onChange={handleInput} />
            </div>
            <div>
                <label htmlFor="email">email</label>
                <input type="email" name='email' id='email' autoComplete='off' required  value={contact.email} onChange={handleInput}/>
            </div>
            <div>
                <label htmlFor="message">message</label>
                <textarea name="message" id="message" cols="30" rows="5" value={contact.message} onChange={handleInput}></textarea>
            </div>
            <div>
                <button type='submit'>submit</button>
            </div>
            </form> 
        </section>
       
    </div>
    <section className='mb-3'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59696.75388791228!2d78.57148596088606!3d20.748884242571858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd47f04f15aa69d%3A0xe76e35b13382a66c!2sWardha%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1742976455203!5m2!1sen!2sin" width="100%" height="450"  allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </section>
   </section>

   </>
  )
}

export default Contact;
