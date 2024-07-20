import React, { useEffect, useState } from 'react'
import "../Navbar/Navbar.css"
import Logo from "../../assets/logo.png"

const Navbar = () => {
    const [sticky, setSticky] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                setSticky(true)
            } else {
                setSticky(false)
            }
        })
    }
        , [])
    return (
        <nav className={`container ${sticky ? "dark-nav" : ""}`}>
            <img src={Logo} alt="" className='logo' />
            <ul>
                <li>Home</li>
                <li>Program</li>
                <li>About us</li>
                <li>Campus</li>
                <li>Testimonials</li>
                <li>Contact us</li>
                <li><button className='btn'>Contact us</button></li>
            </ul>
        </nav >
    )
}

export default Navbar