import React, { useState, useEffect } from 'react'
import { Link, animateScroll as scroll } from "react-scroll";
import virus from "./SVG/virus icon.svg"


function Navbar() {
    const [ColorNav, setColorNav] = useState({color: "white ", textDecoration: "none"})
    const hrefArray = window.location.href.split('/')
    const href = hrefArray[hrefArray.length - 1]

    const NavWhite =()=>{
        setColorNav({color: "white ", textDecoration: "none"})
    }
    const NavBlack =()=>{
        setColorNav({color: "rgba(0,0,0,0.85)", textDecoration: "none"})
    }

    const checkhref =()=>{
        if (href == '#sectionOne') {
            NavWhite()
        }
        else if (href == '#sectionTwo'){
            NavWhite()
        }
        else if (href == '#sectionThree'){
            NavBlack()
        }
        else if (href == '#sectionFour'){
            NavWhite()
        }
    }
    
    useEffect(() => {
        console.log(href)
        checkhref()
    },[href])

    return (
        <div className="all" >
            
            <nav className="navbar pt-4 " >
                <ul className="" >
                    <a href="/">
                        <img href="/" 
                        style={
                            {width: "65px",
                            filter: "drop-shadow(2px 1px 2px rgba(0,0,0,1))", 
                            border: "1px solid white",
                            borderRadius: "50%",
                            padding: "5px"}} src={virus}/>
                    </a>
                </ul>

                <ul className="nav-items " >
                    <li className="nav-item">
                        <a
                            className="ex0"
                            activeClass="active"
                            class="active"
                            href="#sectionOne"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration= {500}
                            isDynamic={true}
                            style={ColorNav}
                        >Home</a>
                    </li>
                    <li className="nav-item">
                        <a
                            className="ex1"
                            activeClass="active"
                            href="#sectionTwo"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration= {500}
                            isDynamic={true}
                            style={ColorNav}
                        >Situation</a>
                    </li>
                    <li className="nav-item">
                        <a
                            className="ex2"
                            activeClass="active"
                            href="#sectionThree"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration= {500}
                            style={ColorNav}
                        >Gender</a>
                    </li>
                    <li className="nav-item">
                        <a
                            className="ex3"
                            activeClass="active"
                            href="#sectionFour"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration= {500}
                            style={ColorNav}
                        >Chart</a>
                    </li>
                    
                    {/* <li className="btn btn-primary" onClick={()=>{scroll.scrollToTop()}}>to top</li> */}
                </ul>
        </nav>
        </div>
    )
}

export default Navbar
