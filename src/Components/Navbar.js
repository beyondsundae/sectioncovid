import React from 'react'
import { Link, animateScroll as scroll } from "react-scroll";

function Navbar() {
    return (
        <div>
            <nav className="navbar">
                <ul className="nav-items">
                    <li className="nav-item">
                        <Link
                            activeClass="active"
                            to="main"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration= {500}
                            isDynamic={true}
                        >Main</Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            activeClass="active"
                            to="content"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration= {500}
                        >Content</Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            activeClass="active"
                            to="content2"
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
