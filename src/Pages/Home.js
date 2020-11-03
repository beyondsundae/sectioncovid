import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { SectionsContainer, Section } from 'react-fullpage';

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
            <SectionsContainer  {...options}>
                <Section><Hommie updateDate ={ Data }/></Section>
                <Section><Main /></Section>
                <Section><Content /></Section>
                <Section><Content2 /></Section>
                <Section><Content3 /></Section>
                <Section><Content4 /></Section>
            </SectionsContainer>
            <Navbar/>
        </div>
    )
    //beyondsundae
}

export default Home
