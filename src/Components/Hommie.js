import React from 'react'
import virus from "./SVG/virus.svg"
import virusMain from "./SVG/virus-main.svg"

import zIndex from '@material-ui/core/styles/zIndex'

function Hommie( props ) {
    const Style =({
        Background:{
            
            backgroundImage: `url(${virus})`, 
            backgroundRepeat: "no-repeat",
            zIndex: -5,
            backgroundPosition: "50vh -20vh",
            backgroundSize: "50vh 50vh",
            border: "5px solid red"
         
        },

        Paddingtop:{
            paddingTop: "5vh"
        },
        
        AreaContent:{
            height: "95vh"
        }
        
    })
    // position: "relative", zIndex: "2", top:"0px", right:"0px"
    return (
        <div className="hommie" id="hommie">
            <div className="container-fluid " style={ Style.Paddingtop }/>

            <div className='container-fluid' style={ Style.AreaContent }>
                <div className="row mt-5" style={{paddingTop: "20vh"}}>
                    {/* <div className="row border border-danger"> */}
                    <div className="col-7">
                        <img style={{width: "50%"}} src={virusMain}/>
                    </div>
                    {/* </div> */}

                    <div style={{border: "solid 5px black", height:"40vh"}}/>

                    <div className="col  pt-5" id="shit">
                        <div className="pt-5">
                            <div className="display-1" style={{textAlign: "left"}}>Covid-19</div>
                            <div className="display-4" style={{textAlign: "left"}}>Thailand Situation</div>
                            <p style={{textAlign: "left"}}>Last update: { props.updateDate }</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Hommie
