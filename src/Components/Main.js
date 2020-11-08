import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Hostpital from '../Components/SVG/hero.svg'

import styled from "styled-components";
import { Controller, Scene } from "react-scrollmagic";

import Fever from '../Components/SVG/Fever.svg'
import Strong from '../Components/SVG/Strong.svg'
import Doctor from '../Components/SVG/Doctor.svg'
import Dead from '../Components/SVG/Dead.svg'



const Main = () => {
    const Style = ({ 
        PaddingForMenu:{ 
            height: "5vh",
        },
        AreaHeightContent:{
            height: "92vh",
        }
    })

    const ClassToggleStyled = styled.div`
        .Content {
            position: relative;
            transition: bottom 1s ease-out, opacity 1s ease-out;
            opacity: 0;
            bottom: 100px;
            /* width: 100px;*/
            // height: 100px; 
            // font-size: 20px;
            /* background-color: red; */
            margin: 0 !important;

            &.yellow {
            background-color: yellow;
            }
        }
        .started {
            position: relative;
            bottom: 0px;
            opacity: 1;
            /* width: 100%; */
            // height: 300px; 
            // font-size: 50px;
        }
        `;
    
    const [ Infected, setInfected ] = useState()
    const [ NewInfected, setNewInfected ] = useState()
    const [ Recovered, setRecovered ] = useState()
    const [ NewRecovered, setNewRecovered ] = useState()
    const [ NewHospitalized, setNewHospitalized ] = useState()
    const [ Hospitalized, setHospitalized ] = useState()
    const [ Deaths, setDeaths ] = useState()
    const [ NewDeaths, setNewDeaths ] = useState()

    const [ Animation, setAnimation ] = useState({}) 
    const [ AnimationSituation, setAnimationSituation ] = useState({}) 

    // const hrefArray = window.location.href.split('/')
    // const href = hrefArray[hrefArray.length - 1]

    const ChectURL = window.location.href

    const GetDataCovid = async ()=>{
        await axios.get( 'https://covid19.th-stat.com/api/open/today' )
        .then ( (res) =>{
            const Result = res.data
            // console.table( Result )
            setInfected( Result.Confirmed )
            setNewInfected( Result.NewConfirmed )
            setRecovered( Result.Recovered )
            setNewRecovered( Result.NewRecovered )
            setHospitalized( Result.Hospitalized )
            setNewHospitalized( Result.NewHospitalized )
            setDeaths( Result.Deaths )
            setNewDeaths( Result.NewDeaths )
        })
        .catch ( (err) =>{
            console.log( err.message ) 
        } )
    }//Beyondsundae

    useEffect(() => {
        GetDataCovid()
    }, [])

    useEffect(() =>{
        if(ChectURL.includes("#sectionTwo")){
            setAnimation({animation: "Fade 1.5s ease-in-out"})
            setAnimationSituation({animation: "MovingBott 1.5s ease"})
        }
        else{
            setAnimation({ })
            setAnimationSituation({})
        }
 
    }, [ChectURL])

    return (
        <div className='main' id='main' >
            <div className='container-fluid' style={ Style.PaddingForMenu }/>

            {/* <div style={{height:"2vh", border: '1px red solid'}} /> */}

               <ClassToggleStyled>

            <div id="trigger" />
            {/* point start trig */}

            <Controller>
              <Scene
                duration={1200}
                // line of start to end
                classToggle="started"
                triggerElement="#trigger"
                reverse={true} 
                indicators={false}
              >
                <div className='container-fluid Content' style={ Style.AreaHeightContent }>
                    {/* wow */}
                <div className='row ' style={{paddingTop: "10vh", height: "82vh"}}>
                    <div className='p-5 col-4 d-none d-md-block text-center' >
                        <img className="hospital " src={ Hostpital } />
                    </div>

                    <div className='col justify-content-center'>

                        <div className="row" >
                            <div className="col col-lg-6 col-md-12 " style={AnimationSituation}>
                                <img className="imgStatus" src={ Fever } />

                                    <div className="Status"  >
                                        INFECTED <br/> { Infected }
                                    </div>

                                    <div className="BorderStatus">
                                            <div className="NewValueStatus">
                                                New Infected :{ NewInfected }
                                            </div>
                                    </div>   
                            </div>

                            <div className="col col-lg-6 col-md-12 " style={AnimationSituation}>
                                <img className="imgStatus" src={ Strong }/>
                                
                                    <div className="Status">
                                        RECOVERED <br/> { Recovered }
                                    </div>

                                    <div className="BorderStatus">
                                            <div className="NewValueStatus">
                                                New Recovered :{ NewRecovered }
                                            </div>
                                    </div>   
                            </div>
                        </div>

                        <div className="row" >
                            <div className="col col-lg-6 col-md-12" style={AnimationSituation}>
                                <img className="imgStatus" src={ Doctor }/>

                                    <div className="Status">
                                        HOSPITALIZED <br/> { Hospitalized }
                                    </div>

                                    <div className="BorderStatus">
                                                <div className="NewValueStatus">
                                                    New Hospitalized :{ NewHospitalized }
                                                </div>
                                    </div>   
                            </div>

                            <div className="col col-lg-6 col-md-12 " style={AnimationSituation}>
                                <img className="imgStatus" src={ Dead }/>

                                    <div className="Status">
                                        DEATHS <br/> { Deaths }
                                    </div>

                                    <div className="BorderStatus">
                                                <div className="NewValueStatus">
                                                    New Deaths :{ NewDeaths }
                                                </div>
                                    </div>   
                            </div>
                        </div>
                        
                        
                    </div>
                </div>
            </div>
              </Scene>

              {/* <Scene
                classToggle={[".test", "yellow"]}
                reverse={true}
                indicators={true}
              >
                <div>Toggle other class</div>
              </Scene> */}
            </Controller>

            <div className="section" />
          </ClassToggleStyled>

            {/* <div className='container-fluid ' style={ Style.AreaHeightContent }>
                <div className='row ' style={{paddingTop: "10vh", height: "82vh"}}>
                    <div className='p-5 col-4 d-none d-md-block text-center' >
                        <img className="hospital " src={ Hostpital } />
                    </div>

                    <div className='col justify-content-center'>

                        <div className="row" >
                            <div className="col col-lg-6 col-md-12 " style={AnimationSituation}>
                                <img className="imgStatus" src={ Fever } />

                                    <div className="Status"  >
                                        INFECTED <br/> { Infected }
                                    </div>

                                    <div className="BorderStatus">
                                            <div className="NewValueStatus">
                                                New Infected :{ NewInfected }
                                            </div>
                                    </div>   
                            </div>

                            <div className="col col-lg-6 col-md-12 " style={AnimationSituation}>
                                <img className="imgStatus" src={ Strong }/>
                                
                                    <div className="Status">
                                        RECOVERED <br/> { Recovered }
                                    </div>

                                    <div className="BorderStatus">
                                            <div className="NewValueStatus">
                                                New Recovered :{ NewRecovered }
                                            </div>
                                    </div>   
                            </div>
                        </div>

                        <div className="row" >
                            <div className="col col-lg-6 col-md-12" style={AnimationSituation}>
                                <img className="imgStatus" src={ Doctor }/>

                                    <div className="Status">
                                        HOSPITALIZED <br/> { Hospitalized }
                                    </div>

                                    <div className="BorderStatus">
                                                <div className="NewValueStatus">
                                                    New Hospitalized :{ NewHospitalized }
                                                </div>
                                    </div>   
                            </div>

                            <div className="col col-lg-6 col-md-12 " style={AnimationSituation}>
                                <img className="imgStatus" src={ Dead }/>

                                    <div className="Status">
                                        DEATHS <br/> { Deaths }
                                    </div>

                                    <div className="BorderStatus">
                                                <div className="NewValueStatus">
                                                    New Deaths :{ NewDeaths }
                                                </div>
                                    </div>   
                            </div>
                        </div>
                        
                        
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default Main
