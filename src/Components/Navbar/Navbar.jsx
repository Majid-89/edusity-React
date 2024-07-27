import React, { useEffect, useState } from 'react'
import "../Navbar/Navbar.css"
import Logo from "../../assets/logo.png"
import { Link } from 'react-scroll'
import menu_icon from "../../assets/menu-icon.png"

const Navbar = () => {
    const [sticky, setSticky] = useState(false)
    const [toggleMenu, setToggleMenu] = useState(false)

    // const toggleNavbar = () => {
    //     if (toggleMenu === true) {
    //         setToggleMenu(false)
    //     } else {
    //         setToggleMenu(true)
    //     }
    // }
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
            <ul className={`${toggleMenu ? "" : "hide-mobile-nav"}`}>
                <li ><Link activeClass="active" to="hero" smooth={true} offset={0} duration={500} onClick={() => setToggleMenu(!toggleMenu)}
                > Home</Link></li>
                <li><Link to="program" smooth={true} offset={-260} duration={500} onClick={() => setToggleMenu(!toggleMenu)}
                > Program</Link></li>
                <li><Link to="about" smooth={true} offset={-150} duration={500} onClick={() => setToggleMenu(!toggleMenu)}
                > About us</Link></li>
                <li><Link to="campus" smooth={true} offset={-260} duration={500} onClick={() => setToggleMenu(!toggleMenu)}
                > Campus</Link></li>
                <li><Link to="testimonials" smooth={true} offset={-260} duration={500} onClick={() => setToggleMenu(!toggleMenu)}
                > Testimonials</Link></li>
                <li><Link to="contact" smooth={true} offset={-260} duration={500} onClick={() => setToggleMenu(!toggleMenu)}
                > Contact us</Link></li>
                <li><Link className="btn" to="contact" smooth={true} offset={-260} duration={500} onClick={() => setToggleMenu(!toggleMenu)}
                > Contact us</Link></li>
            </ul>
            <img src={menu_icon} alt="" className='menu-icon' onClick={() => setToggleMenu(!toggleMenu)}
            />
        </nav >
    )
}

export default Navbar