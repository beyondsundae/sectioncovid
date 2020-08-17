import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Hostpital from '../Components/SVG/hero.svg'

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
    
    const [ Infected, setInfected ] = useState()
    const [ NewInfected, setNewInfected ] = useState()
    const [ Recovered, setRecovered ] = useState()
    const [ NewRecovered, setNewRecovered ] = useState()
    const [ NewHospitalized, setNewHospitalized ] = useState()
    const [ Hospitalized, setHospitalized ] = useState()
    const [ Deaths, setDeaths ] = useState()
    const [ NewDeaths, setNewDeaths ] = useState()

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

    return (
        <div className='main' id='main' >
            <div className='container-fluid' style={ Style.PaddingForMenu }/>
               
            <div className='container-fluid ' style={ Style.AreaHeightContent }>
                <div className='row ' style={{paddingTop: "10vh", height: "82vh"}}>
                    <div className='p-5 col-4 d-none d-md-block text-center' >
                        <img className="hospital" src={ Hostpital } />
                    </div>

                    <div className='col justify-content-center'>

                        <div className="row">
                            <div className="col col-lg-6 col-md-12 " >
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

                            <div className="col col-lg-6 col-md-12 ">
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
                            <div className="col col-lg-6 col-md-12">
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

                            <div className="col col-lg-6 col-md-12 ">
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
        </div>
    )
}

export default Main
