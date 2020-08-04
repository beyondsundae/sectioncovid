import React from 'react'
import virus from "./SVG/virus.svg"
import virusMain from "./SVG/virus-main.svg"
import zIndex from '@material-ui/core/styles/zIndex'

function Hommie( props ) {
    const Style =({
        

        Paddingtop:{
            height: "5vh"
        },
        
        AreaContent:{
            height: "88vh",
        },

        AreaFooter:{
            height: "5vh",
            color: "white",
            bottom: "0",
            fontWeight: "bold",
            
           
        }
        
    })
    // border border-danger"
    return (
        <div className="hommie" id="hommie" >
            <div className="container-fluid " style={ Style.Paddingtop }/>

            <div className='container-fluid' style={ Style.AreaContent }>
                <div className="row mt-5" style={{paddingTop: "20vh"}}>
                    {/* <div className="row border border-danger"> */}
                    <div className="col-1 text-left ">
                        {/* <img style={{width: "100%%"}} src={virusMain}/> */}
                    </div>
                    {/* </div> */}

                    <div className="VerticalLine"/>

                    <div className="col  pt-5">
                        <div className="pt-5" style={{color:'white'}}>
                            <div className="Textcovid" style={{textAlign: "left"}}>Covid-19</div>
                            <div className="TextSituation" style={{textAlign: "left"}}>Thailand Situation</div>
                            <p className="TextUpdate" style={{textAlign: "left"}}>Last update: { props.updateDate }</p>
                        </div>
                    </div>

                </div>

                <div className="FooterMe row pl-5" >
                    By  <a target="_blank" href="https://github.com/beyondsundae">
                            <img 
                                src="https://avatars2.githubusercontent.com/u/59742129?s=60&v=4" 
                                alt="Beyondsundae"
                                style={{ borderRadius: "50%", width: "60%" }}>

                            </img>
                        </a>
                    and API from <a target="_blank" href="https://covid19.th-stat.com/api/open/today">
                                <img   
                                    src="https://covid19.th-stat.com/img/covid_19/logo_kid.png"
                                    alt="API"
                                    style={{ height: "32px", paddingLeft: "15px"}}>
                                    
                                </img>
                            </a>
                </div>
            </div>
            
        </div>
    )
}

export default Hommie
