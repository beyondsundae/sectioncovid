import React, { useState, useEffect } from 'react'

import SoapHand from './SVG/soap_flatline.svg'
import Washhand from './SVG/washing_hands_flatline (1).svg'
import WearMask from './SVG/wearing_a_mask__flatline copy.svg'


function Content4() {

    const [ AnimationA, setAnimationA ] = useState({ })
    const [ AnimationB, setAnimationB ] = useState({ })
    const [ AnimationC, setAnimationC ] = useState({ })

    const hrefArray = window.location.href.split('/')
    const href = hrefArray[hrefArray.length - 1]

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

    useEffect (() =>{
        if(href == "#sectionSix"){
            setAnimationA({animation: "MovingLeft 1s ease"})
            setAnimationB({animation: "MovingBott 1s ease"})
            setAnimationC({animation: "MovingRight 1s ease"})
        }
        else{
            setAnimationA({})
            setAnimationB({})
            setAnimationC({})
        }
    },[href])

    return (
        <div className='content4' id="content4">

            <div className="container-fluid" style={ Style.PaddingForMenu }/>

                <div className="container-fluid" style={ Style.AreaHeightContent }>
                    <div className="row justify-content-center">

                        <div className="col-12 " style={ Style.Font }>
                            Be safe!
                        </div>

                        <img className="IconSafe col col-lg-4" src={ SoapHand } style={AnimationA}/>
                        <img className="IconSafe col col-lg-4" src={ Washhand } style={AnimationB}/>
                        <img className="IconSafe col col-lg-4" src={ WearMask } style={AnimationC}/>

                    </div>
                </div>
            
        </div>
    )
}

export default Content4
