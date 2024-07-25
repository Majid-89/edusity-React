import React from 'react'
import "./Contact.css"
import Msg_icon from "../../assets/msg-icon.png"
import Mail_icon from "../../assets/mail-icon.png"
import Phone_icon from "../../assets/phone-icon.png"
import Location_icon from "../../assets/location-icon.png"
import White_arrow from "../../assets/white-arrow.png"

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "73fa2a2c-cdfd-4312-a874-db27a979ba78");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();
        console.log(data)

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);

        }
    };


    return (
        <div className="contact" id='contact'>
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
                <form onSubmit={onSubmit}>
                    <label htmlFor="">Your Name</label>
                    <input type="text" name='name' placeholder='Enter your name' required />
                    <label htmlFor="">Phone Number</label>
                    <input type="tel" name='phone' placeholder='Enter your mobile number' required />
                    <label htmlFor="">Enter Your Message</label>
                    <textarea name='message' rows={6} placeholder='Enter your message' required></textarea>
                    <button className='btn dark-btn' type='submit'>Submit Now <img src={White_arrow} alt="" /></button>
                </form>
                <span>{result}</span>
            </div>
        </div>
    )
}

export default Contact