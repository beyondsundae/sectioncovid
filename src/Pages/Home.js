import React, {useEffect, useState} from 'react'
import axios from 'axios'

import Navbar from '../Components/Navbar';
import Main from '../Components/Main';
import Content from '../Components/Content'
import Content2 from '../Components/Content2'
import Hommie from '../Components/Hommie';

function Home() {

    const [ Data, setData ] = useState();

    const Getdata = async () => {
        await axios.get( 'https://covid19.th-stat.com/api/open/today' )
        .then ( ( res ) => {
            const data = res.data
            const LastUpdate =  data.UpdateDate
            setData(LastUpdate)
        })

        .catch ( (err) =>{
            console.log( err.message) 
        } )
    }

    useEffect (()=>{
        Getdata()
    }, [])
    
    return (
        <div>
            <Navbar/>
            <Hommie updateDate ={ Data }/>
            <Main/>
            <Content/>
            <Content2/>
        </div>
    )
}

export default Home
