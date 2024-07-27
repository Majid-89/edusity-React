import React from 'react'
import "./About.css"
import About_img from "../../assets/about.png"
import Play_icon from "../../assets/play-icon.png"

const About = ({ setPlayicon }) => {
    return (
        <div className="about" id='about'>
            <div className="about-left">
                <img src={About_img} alt="about-img" className='about-img' />
                <img src={Play_icon} alt="Play_icon" className='about-icon' onClick={() => setPlayicon(true)} />
            </div>
            <div className="about-right">
                <h3>ABOUT UNIVERSITY</h3>
                <h2>Nurturing Tomorrow's Leader Today</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore quisquam maiores fuga, quia ea, exercitationem et mollitia similique unde aliquam corrupti iste iusto quidem nemo veritatis. Molestiae voluptate ad repellendus dolorem illum?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae unde praesentium nemo quis quidem labore explicabo ut, numquam iure, ex consequatur. Harum reiciendis aliquid illo?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, officiis possimus. Repellat voluptatum praesentium deserunt, ut veniam,quibusdam sed!</p>
            </div>
        </div>
    )
}

export default About