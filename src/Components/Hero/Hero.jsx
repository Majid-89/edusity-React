import React from 'react'
import "../Hero/Hero.css"
import DarkArrow from "../../assets/dark-arrow.png"

const Hero = () => {
    return (
        <div className='hero container'>
            <div className="hero-text">
                <h1>We Ensure better education for a better world</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem voluptatibus illo cupiditate tenetur, neque non corporis ipsam. Ut reprehenderit debitis quod, sit alias corrupti magni illo exercitationem reiciendis. Explicabo, ullam hic? Molestiae minus laudantium, porro, a debitis.</p>
                <button className='btn'>Explore more <img src={DarkArrow} alt="" /></button>
            </div>
        </div>
    )
}

export default Hero