import React, {useEffect, useState} from 'react'
import axios from 'axios'

// import Scrollbar from 'react-smooth-scrollbar';
import Scrollbar from 'smooth-scrollbar-react';

import Navbar from '../Components/Navbar';
import Main from '../Components/Main';
import Content from '../Components/Content'
import Content2 from '../Components/Content2'
import Content3 from '../Components/Content3'
import Content4 from '../Components/Content4'
import Hommie from '../Components/Hommie';

function Home() {

    const [ Data, setData ] = useState();
   
    const GetdataToday = async () => {
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
        GetdataToday()
    }, [])
    
    return (
        <div>
            <Scrollbar
            //   style={{ height: "100vh" }}
              damping={0.3}
            //   renderByPixels={true}
            //   plugins={{
            //     overscroll: { damping: 0.1 }
            //   }}
            >
                <div style={{height: "100vh"}}>
                    <Hommie updateDate ={ Data }/>
                <Main /> 
                <Content />
                <Content2 />
                <Content3 />
                <Content4 />
                </div>
            </Scrollbar>
                
            {/* <Navbar/> */}
        </div>
    )
    //beyondsundae
}

export default Home
