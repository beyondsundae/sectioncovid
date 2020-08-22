import React, { useState, useEffect } from 'react'
import virusW from "./SVG/virus iconW.svg"
import virusB from "./SVG/virus iconB.svg"

import MenuW from "./SVG/MenuWh.svg"
import MenuB from "./SVG/MenuB.svg"


function Navbar() {
    const [VirusIcon, setVirusIcon] = useState(virusW)
    const [ColorNav, setColorNav] = useState({color: "white ", textDecoration: "none"})
    const [Menubar , setMenubar ] = useState(MenuW)

    const hrefArray = window.location.href.split('/')
    const href = hrefArray[hrefArray.length - 1]

    const NavWhite =()=>{
        setColorNav({color: "white ", textDecoration: "none"})
        setMenubar(MenuW)
        setVirusIcon(virusW)
    }
    const NavBlack =()=>{
        setColorNav({color: "rgba(0,0,0,0.85)", textDecoration: "none"})
        setMenubar(MenuB)
        setVirusIcon(virusB)
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
        else if (href == '#sectionFive'){
            NavBlack()
        }
        else if (href == '#sectionSix'){
            NavWhite()
        }
    }
    
    useEffect(() => {
        console.log(href)
        checkhref()
    },[href])

    return (
        <div className=" " >
            
            <nav className="navbar pt-4" >
                <ul >
                    <a href="/">
                        <img href="/" 
                        class="logoS"
                        style={
                            {width: "65px",
                            filter: "drop-shadow(2px 1px 2px rgba(0,0,0,1))", 
                            border: "1px solid white",
                            borderRadius: "50%",
                            padding: "5px"}} src={VirusIcon}/>
                    </a>
                </ul>

                <ul className="nav-items mb-5 d-none d-md-inline d-xs-none " >
                    <li className="nav-item ">
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
                    <li className="nav-item">
                        <a
                            className="ex4"
                            activeClass="active"
                            href="#sectionFive"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration= {500}
                            style={ColorNav}
                        >Provinces</a>
                    </li>
                    
                    {/* <li className="btn btn-primary" onClick={()=>{scroll.scrollToTop()}}>to top</li> */}
                </ul>

                <div class="dropdown ml-5 mb-3 d-md-none d-xs-inline">
                    <a class="dropdown-toggle " 
                            type="button" 
                            id="dropdownMenuButton" 
                            data-toggle="dropdown">
                        
                        <img 
                            src={ Menubar } 
                            style={{ 
                                marginLeft: "165px",
                                height: "5vh",}}/>
                    </a>

                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a class="dropdown-item active" href="#sectionOne">Home</a>
                        <a class="dropdown-item" href="#sectionTwo">Situation action</a>
                        <a class="dropdown-item" href="#sectionThree">Gender</a>
                        <a class="dropdown-item" href="#sectionFour">Chart</a>
                        <a class="dropdown-item" href="#sectionFive">Provinces</a>
                    </div>
                </div>
        </nav>
        
       
        </div>
    )
}

export default Navbar
