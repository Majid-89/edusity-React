import React from 'react'
import "./Contact.css"
import Msg_icon from "../../assets/msg-icon.png"
import Mail_icon from "../../assets/mail-icon.png"
import Phone_icon from "../../assets/phone-icon.png"
import Location_icon from "../../assets/location-icon.png"
import White_arrow from "../../assets/white-arrow.png"

const Contact = () => {
    return (
        <div className="contact">
            <div className="contact-col">
                <h3>Send us a message <img src={Msg_icon} alt="" /></h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quibusdam sint dignissimos, deserunt rerum fugiat facere nesciunt quidem distinctio numquam ipsa quam eaque maxime quisquam necessitatibus.</p>
                <ul>
                    <li> <img src={Mail_icon} alt="" />XYZ@gmail.com</li>
                    <li> <img src={Phone_icon} alt="" />0321-90****3</li>
                    <li><img src={Location_icon} alt="" /> Peshawar , Pakisatn</li>
                </ul>
            </div>
            <div className="contact-col">
                <form >
                    <label htmlFor="">Your Name</label>
                    <input type="text" name='name' placeholder='Enter your name' required />
                    <label htmlFor="">Phone Number</label>
                    <input type="tel" name='phone' placeholder='Enter your mobile number' required />
                    <label htmlFor="">Enter Your Message</label>
                    <textarea name='message' rows={6} placeholder='Enter your message' required></textarea>
                    <button className='btn dark-btn' type='submit'>Submit Now <img src={White_arrow} alt="" /></button>
                </form>
            </div>
        </div>
    )
}

export default Contact