import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Container from '@material-ui/core/Container';

function Main() {
    const Style = ({ 
        PaddingTop:{ 
            height: "5vh" 
        },
        AreaContent:{
            height: "94vh"
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
        <div className='main' id='main'>
            <div className='container-fluid' style={ Style.PaddingTop }/>
               
            <div className='container-fluid' style={ Style.AreaContent }>
                <div className='row mt-5'>
                    <div className='p-5 col text-center border border-success'>
                        <div className="display-3" id="ValueCovid">
                            { Infected }
                        </div>
                    </div>
                    <div className='col text-center border border-success '>
                        xx
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
