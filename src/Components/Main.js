import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Container from '@material-ui/core/Container';
import Hostpital from '../Components/SVG/hero.svg'

import Fever from '../Components/SVG/Fever.svg'
import Strong from '../Components/SVG/Strong.svg'
import Doctor from '../Components/SVG/Doctor.svg'
import Dead from '../Components/SVG/Dead.svg'



function Main() {
    const Style = ({ 
        PaddingTop:{ 
            height: "5vh",
            
        },
        AreaContent:{
            height: "92vh",
            // border:"5px solid red"
        }
    })
    
    const [ Infected, setInfected ] = useState()
    const [ NewInfected, setNewInfected ] = useState()
    const [ Recovered, setRecovered ] = useState()
    const [ NewRecovered, setNewRecovered ] = useState()
    const [ Hospitalized, setNewHospitalized ] = useState()
    const [ Deaths, setDeaths ] = useState()
    const [ NewDeaths, setNewDeaths ] = useState()
    const [ UpdateDate, setUpdateDate] = useState()
  


    const GetDataCovid = async ()=>{
        await axios.get( 'https://covid19.th-stat.com/api/open/today' )
        .then ( (res) =>{
            const Result = res.data
            // console.table( Result )
            setInfected( Result.Confirmed )
        })
        .catch ( (err) =>{
            console.log( err.message) 
        } )
    }


    useEffect(()=>{
        GetDataCovid()
    }, [])

    return (
        <div className='main' id='main' >
            <div className='container-fluid' style={ Style.PaddingTop }/>
               
            <div className='container-fluid' style={ Style.AreaContent }>
                <div className='row ' style={{paddingTop: "10vh", height: "82vh"}}>
                    <div className='p-5 col-4 text-center border border-success'>
                        <img src={Hostpital} style={{height: "50vh"}}/>
                    </div>

                    <div className='col pt-5  justify-content-center border border-success' style={{color: "black"}}>

                        <div className="row my-5 py-5 border border-danger" >
                            <div className="col py-5  border border-secondary">
                                <img src={Fever} style={{width: "20%"}}/>
                            </div>
                            <div className="col py-5 border border-secondary">
                                <img src={Strong} style={{width: "20%"}}/>
                            </div>
                            {/* { Infected } */}
                        </div>
                        <div className="row my-5    border border-danger" >
                            <div className="col py-5  border border-secondary">
                                <img src={Doctor} style={{width: "20%"}}/>
                            </div>
                            <div className="col py-5 border border-secondary">
                                <img src={Dead} style={{width: "20%"}}/>
                            </div>
                            {/* { Infected } */}
                        </div>
                        
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
