import React from 'react'
import { Link, animateScroll as scroll } from "react-scroll";

function Navbar() {
    return (
        <div>
            <nav className="navbar pt-4">
                <ul className="nav-items">
                    <li className="nav-item">
                        <a
                            activeClass="active"
                            class="active"
                            href="#sectionOne"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration= {500}
                            isDynamic={true}
                        >Hommie</a>
                    </li>
                    <li className="nav-item">
                        <a
                            activeClass="active"
                            href="#sectionTwo"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration= {500}
                            isDynamic={true}
                        >Main</a>
                    </li>
                    <li className="nav-item">
                        <a
                            activeClass="active"
                            href="#sectionThree"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration= {500}
                        >Content</a>
                    </li>
                    <li className="nav-item">
                        <Link
                            activeClass="active"
                            href="#sectionFour"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration= {500}
                        >Content2</Link>
                    </li>
                    
                    {/* <li className="btn btn-primary" onClick={()=>{scroll.scrollToTop()}}>to top</li> */}
                </ul>
        </nav>
        </div>
    )
}

export default Navbar
