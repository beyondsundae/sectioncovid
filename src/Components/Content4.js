import React, { useState, useEffect } from 'react'

import { useInView } from "react-intersection-observer";

import SoapHand from './SVG/soap_flatline.svg'
import Washhand from './SVG/washing_hands_flatline (1).svg'
import WearMask from './SVG/wearing_a_mask__flatline copy.svg'


function Content4() {

    const Style = ({ 
        PaddingForMenu:{ 
            height: "10vh",
        },
        AreaHeightContent:{
            paddingTop: "15vh",
            height: "82vh",
        },
        Font:{
            fontSize: "5rem", 
            fontWeight: "bold"
        }
    })

    const [ref, inView] = useInView({
        threshold: 0.5,
        triggerOnce: true
        });

    const [ref2, inView2] = useInView({
        threshold: 0.5,
        triggerOnce: true
        });
    
    const [ref3, inView3] = useInView({
        threshold: 0.5,
        triggerOnce: true
        });

    const [ref4, inView4] = useInView({
        threshold: 0.5,
        triggerOnce: true
        });

    

    return (
        <div className='content4' id="content4">

            <div className="container-fluid" style={ Style.PaddingForMenu }/>

                <div className="container-fluid" style={ Style.AreaHeightContent }>
                    <div className="row justify-content-center">

                        <div className="col-12 " style={ Style.Font } ref={ref4}>
                            <div className={inView ? "animate__animated animate__fadeIn animate__infinite	infinite" : "d-none"} >
                                  Be safe!
                            </div>
                        </div>

                        <div ref={ref} className=" IconSafe col col-lg-4">
                            <img 
                                className={inView ? "animate__animated animate__bounceIn" : "d-none"} 
                                src={ SoapHand } />
                        </div>
                        

                        <div ref={ref2} className=" IconSafe col col-lg-4">
                            <img 
                                className={inView2 ? "animate__animated animate__bounceIn animate__slow" : "d-none"} 
                                src={ Washhand } />
                        </div>
                        

                        <div ref={ref3} className=" IconSafe col col-lg-4">
                            <img 
                                className={inView3 ? "animate__animated animate__bounceIn animate__slower " : "d-none"} 
                                src={ WearMask } />
                        </div>
                    </div>
                </div>
            
        </div>
    )
}

export default Content4
