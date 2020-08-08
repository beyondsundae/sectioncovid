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
    const [ NewHospitalized, setNewHospitalized ] = useState()
    const [ Hospitalized, setHospitalized ] = useState()
    const [ Deaths, setDeaths ] = useState()
    const [ NewDeaths, setNewDeaths ] = useState()
    const [ UpdateDate, setUpdateDate] = useState()
  


    const GetDataCovid = async ()=>{
        await axios.get( 'https://covid19.th-stat.com/api/open/today' )
        .then ( (res) =>{
            const Result = res.data
            console.table( Result )
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

                    <div className='col pt-0  justify-content-center border' style={{color: "black"}}>

                        <div className="row border border-primary" >
                            <div className="col border border-danger" >
                                <img src={Fever} style={{
                                    width: "25%", 
                                    // marginRight: "200px", 
                                    // paddingTop: "0%", 
                                    top:"120px", 
                                    right:"140px", 
                                    position: "relative"}}/>

                                    <div style={{ 
                                        fontSize: "2rem",
                                        paddingLeft: "70px"}}>INFECTED <br/> { Infected }
                                    </div>

                                    <div style={{
                                        width: "90%", 
                                        border: "5px solid black", 
                                        borderRadius: "30px", 
                                        paddingTop: "5%",
                                        paddingBottom: "3%", 
                                        paddingRight: "100px"}}>
                                            <div style={{
                                                fontSize: "2rem",
                                                width: "120%",
                                                textAlign: "left",
                                                paddingLeft: "20%"}}>New Infected :{ NewInfected }
                                            </div>
                                    </div>   
                            </div>

                            <div className="col border border-secondary">
                                <img src={ Strong } style={{
                                    width: "25%", 
                                    // marginRight: "200px", 
                                    // paddingTop: "0%", 
                                    top:"120px", 
                                    right:"140px", 
                                    position: "relative"}}/>
                                
                                    <div style={{ 
                                            fontSize: "2rem",
                                            paddingLeft: "70px"}}>RECOVERED <br/> { Recovered }
                                    </div>

                                    <div style={{
                                        width: "90%", 
                                        border: "5px solid black", 
                                        borderRadius: "30px", 
                                        paddingTop: "5%",
                                        paddingBottom: "3%", 
                                        paddingRight: "100px"}}>
                                            <div style={{
                                                fontSize: "2rem",
                                                width: "120%",
                                                textAlign: "left",
                                                paddingLeft: "20%"}}>New Recovered :{ NewRecovered }
                                            </div>
                                    </div>   
                            </div>
                        </div>

                        <div className="row border border-danger" >
                            <div className="col border border-secondary">
                                <img src={Doctor} style={{
                                    width: "25%", 
                                    // marginRight: "200px", 
                                    // paddingTop: "0%", 
                                    top:"120px", 
                                    right:"140px", 
                                    position: "relative"}}/>

                                    <div style={{ 
                                            fontSize: "2rem",
                                            paddingLeft: "70px"}}>HOSPITALIZED <br/> { Hospitalized }
                                    </div>

                                    <div style={{
                                            width: "90%", 
                                            border: "5px solid black", 
                                            borderRadius: "30px", 
                                            paddingTop: "5%",
                                            paddingBottom: "3%", 
                                            paddingRight: "100px"}}>
                                                <div style={{
                                                    fontSize: "2rem",
                                                    width: "120%",
                                                    textAlign: "left",
                                                    paddingLeft: "20%"}}>New Hospitalized :{ NewHospitalized }
                                                </div>
                                        </div>   
                            </div>

                            <div className="col border border-secondary">
                                <img src={Dead} style={{
                                    width: "25%", 
                                    // marginRight: "200px", 
                                    // paddingTop: "0%", 
                                    top:"120px", 
                                    right:"140px", 
                                    position: "relative"}}/>

                                    <div style={{ 
                                            fontSize: "2rem",
                                            paddingLeft: "70px"}}>DEATHS <br/> { Deaths }
                                    </div>

                                    <div style={{
                                            width: "90%", 
                                            border: "5px solid black", 
                                            borderRadius: "30px", 
                                            paddingTop: "5%",
                                            paddingBottom: "3%", 
                                            paddingRight: "100px"}}>
                                                <div style={{
                                                    fontSize: "2rem",
                                                    width: "120%",
                                                    textAlign: "left",
                                                    paddingLeft: "20%"}}>New Deaths :{ NewDeaths }
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
