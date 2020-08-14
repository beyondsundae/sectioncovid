import React from 'react'

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

    return (
        <div className='content4' id="content4">

            <div className="container-fluid" style={ Style.PaddingForMenu }/>

                <div className="container-fluid" style={ Style.AreaHeightContent }>
                    <div className="row justify-content-center">

                        <div className="col-12 " style={ Style.Font }>
                            Be safe!
                        </div>

                        <img className="IconSafe col col-lg-4" src={ SoapHand }/>
                        <img className="IconSafe col col-lg-4" src={ Washhand }/>
                        <img className="IconSafe col col-lg-4" src={ WearMask }/>

                    </div>
                </div>
            
        </div>
    )
}

export default Content4
