import React, { useEffect, useState } from 'react'
import axios from "axios"
import thai from './SVG/TH_flatline.svg'

import { useInView } from "react-intersection-observer";

import MaterialTable from "material-table";

import TableIcons from './Parts/TableIcons'

const Content3 = () => {
    const [ Province, setProvince ] = useState([])

    const Style = ({ 
        PaddingForMenu:{ 
            height: "10vh",
        },
        AreaHeightContent:{
            height: "82vh",
        },
        FontGender:{
            fontSize: "2rem", 
            fontWeight: "bold"
        },
        FontAmount:{
            fontSize: "2.8rem",
            fontWeight: "bold"
        }
    })

    const [ref, inView] = useInView({
        threshold: 0.5,
        triggerOnce: true
      });

    const dataProvince = {
        columns : [
            {label: 'name', field: 'Name', width: 10 },
            {label: 'amount', field: 'Amount', width: 15 }
        ],

        rows : [
            {name: 'Bangkok', amount: Province.Bangkok}, {name: 'Phuket', amount: Province.Phuket},{name: 'Nonthaburi', amount: Province.Nonthaburi},
            {name: 'Samut Prakan', amount: Province["Samut Prakan"]}, {name: 'Yala', amount: Province.Yala},{name: 'Songkhla', amount: Province.Songkhla},
            {name: 'Chonburi', amount: Province["Chonburi"]}, {name: 'Pattani', amount: Province.Pattani},{name: 'Narathiwat', amount: Province.Narathiwat},
            {name: 'Chiang Mai', amount: Province["Chiang Mai"]}, {name: 'Pathum Thani', amount: Province["Pathum Thani"]},{name: 'Nakhon Pathom', amount: Province["Nakhon Pathom"]},
            {name: 'Chumphon', amount: Province.Chumphon}, {name: 'Chachoengsao', amount: Province.Chachoengsao},{name: 'Krabi', amount: Province.Krabi},
            {name: 'Nakhon Ratchasima', amount: Province["Nakhon Ratchasima"]}, {name: 'Satun', amount: Province.Satun},{name: 'Surat Thani', amount: Province["Surat Thani"]},
            {name: 'Prachuap Khiri Khan', amount: Province["Prachuap Khiri Khan"]}, {name: 'Ubon Ratchathani', amount: Province["Ubon Ratchathani"]},{name: 'Phatthalung', amount: Province.Phatthalung},
            {name: 'Samut Sakhon', amount: Province["Samut Sakhon"]}, {name: 'Buriram', amount: Province.Buriram},{name: 'Nakhon Si Thammarat', amount: Province["Nakhon Si Thammarat"]},
            {name: 'Udon Thani', amount: Province["Udon Thani"]}, {name: 'Sa Kaeo', amount: Province["Sa Kaeo"]},{name: 'Surin', amount: Province.Surin},
            {name: 'Kanchanaburi', amount: Province.Kanchanaburi}, {name: 'Nakhon Sawan', amount: Province["Nakhon Sawan"]},{name: 'Prachinburi', amount: Province.Prachinburi},
            {name: 'Chiang Rai', amount: Province["Chiang Rai"]}, {name: 'Sisaket', amount: Province.Sisaket},{name: 'Trang', amount: Province.Trang},
            {name: 'Ratchaburi', amount: Province.Ratchaburi}, {name: 'Suphan Buri', amount: Province["Suphan Buri"]},{name: 'Rayong', amount: Province.Rayong},
            {name: 'Phitsanulok', amount: Province.Phitsanulok}, {name: 'Khon Kaen', amount: Province["Khon Kaen"]},{name: 'Mae Hong Son', amount: Province["Mae Hong Son"]},
            {name: 'Saraburi', amount: Province.Saraburi}, {name: 'Loei', amount: Province.Loei},{name: 'Phra Nakhon Si Ayutthaya', amount: Province["Phra Nakhon Si Ayutthaya"]},
            {name: 'Lampang', amount: Province.Lampang}, {name: 'Lamphun', amount: Province.Lamphun},{name: 'Mukdahan', amount: Province.Mukdahan},
            {name: 'Phetchabun', amount: Province.Phetchabun}, {name: 'Phayao', amount: Province.Phayao},{name: 'Sukhothai', amount: Province.Sukhothai},
            {name: 'Tak', amount: Province.Tak}, {name: 'Nong Bua Lamphu', amount: Province["Nong Bua Lamphu"]},{name: 'Chanthaburi', amount: Province.Chanthaburi},
            {name: 'Roi Et', amount: Province["Roi Et"]}, {name: 'Uttaradit', amount: Province.Uttaradit},{name: 'Kalasin', amount: Province.Kalasin},
            {name: 'Chaiyaphum', amount: Province.Chaiyaphum}, {name: 'Nong Khai', amount: Province["Nong Khai"]},{name: 'Phetchaburi', amount: Province.Phetchaburi},
            {name: 'Nakhon Phanom', amount: Province["Nakhon Phanom"]}, {name: 'Phang Nga', amount: Province["Phang Nga"]},{name: 'Lopburi', amount: Province.Lopburi},
            {name: 'Amnat Charoen', amount: Province["Amnat Charoen"]}, {name: 'Nakhon Nayok', amount: Province["Nakhon Nayok"]},{name: 'Phrae', amount: Province.Phrae},
            {name: 'Uthai Thani', amount: Province["Uthai Thani"]}, {name: 'Yasothon', amount: Province.Yasothon},{name: 'Sakon Nakhon', amount: Province["Sakon Nakhon"]},   
            {name: 'Samut Songkhram', amount: Province["Samut Songkhram"]}, {name: 'Maha Sarakham', amount: Province["Maha Sarakham"]}
        ]
    }

    const GetProvinces = async () => {
        await axios.get( 'https://covid19.th-stat.com/api/open/cases/sum' )
        .then( ( response ) => {
            const data = response.data
            setProvince( data.Province )
            // console.log (data.Province)
             
        } )

        .catch( ( err ) => {
            console.log ( err.message )
            alert("API Status: "+err.message)
        } )
    }

    useEffect(() => {
        GetProvinces()
    }, [])

    return (
        <div className='content3' id='content3'>
            <div className="container-fluid " style={ Style.PaddingForMenu }/>

                <div className="container-fluid " style={ Style.AreaHeightContent }>
                    <div className="row " style={{paddingTop: "3vh", height: "89vh"}}>

                        <div className="Flag col col-md-12 col-lg-6" ref={ref}>
                            <img src={thai} className={inView ? "animate__animated animate__slideInUp  ThPic " : "d-none"}/>
                        </div>

                        <div className="col col-md-12 col-lg-6 pt-5 ">
                            <MaterialTable
                                title="Cases by province"
                                icons={TableIcons}
                                columns={[
                                    {title: 'Province', field: 'name'},
                                    {title: 'Case(s)', field: 'amount'}
                                ]}
                                data={
                                    dataProvince.rows
                                }
                                options={{
                                    // exportButton: true,

                                    headerStyle: {
                                        backgroundColor: 'gray',
                                        fontSize: 20,
                                        borderRadius: '2%',
                                        color: '#FFF'
                                        },
                                    }}
                                />

                            
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Content3
