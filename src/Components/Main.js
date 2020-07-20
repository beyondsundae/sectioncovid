import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Container from '@material-ui/core/Container';

function Main() {
    const Style = ({ 
        PaddingTop:{ 
            paddingTop: "5vh" 
        },
        AreaContent:{
            height: "95vh"
        }
    })
    
    const GetDataCovid =()=>{
        axios.get( 'https://covid19.th-stat.com/api/open/today' )
        .then ( (res) =>{
            console.table( res.data )
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
               
            <div className='container-fluid border border-danger' style={ Style.AreaContent }>
                <div className='row mt-5'>
                    <div className='p-5 col text-center border border-success'>
                        xx
                    </div>
                    <div className='col text-center border border-success'>
                        xx
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
