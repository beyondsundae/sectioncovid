import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { PieChart, Pie,ResponsiveContainer, 
    ComposedChart, Area, CartesianGrid, Bar, XAxis, 
    YAxis, Tooltip, Legend, Cell } from 'recharts';

import DocChart from './SVG/doctor_flatline(2).svg'
import DocMed from './SVG/health__flatline.svg'

const Content2 = () => {
    const [DailyData, setDailyData] = useState([]);

    const Style = ({ 
        PaddingForMenu:{ 
            height: "10vh",
        },
        AreaHeightContent:{
            height: "82vh",
        },
        // FontGender:{
        //     fontSize: "2rem", 
        //     fontWeight: "bold"
        // },
        // FontAmount:{
        //     fontSize: "2.8rem",
        //     fontWeight: "bold"
        // }
    })

    const Get7Days = async () => {
        await axios.get('https://covid19.th-stat.com/api/open/timeline') 
        .then( ( response )  => {
            const Original = response.data;
            const QueryData = Original.Data 
            setDailyData(QueryData)
        })

        .catch( ( err ) => {
            console.log ( err.message )
            alert("error Message"+ err.message)
        })
        } 
    

    const ChartNConfirmedandNRecoverd = () => {
        const Selected7Days = DailyData.slice(-7)
        // console.log(Selected7Days)
        return(
            // old 600 350
            <ResponsiveContainer height={320}>
                <ComposedChart data={Selected7Days}>
                    <XAxis dataKey="Date" stroke="#8884d8" />
                    <YAxis/>
                    <Tooltip wrapperStyle={{ width: 200, backgroundColor: '#ccc' }} />
                    <Legend/>
                    <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
                    <Bar name="New Infected" dataKey="NewConfirmed" fill="#5B8BEB" barSize={30} />
                    <Bar name="New Recovered" dataKey="NewRecovered" fill="#AEED76" barSize={30} />
                </ComposedChart>
            </ResponsiveContainer>
        )
    }

    function ChartConfirmedandRecovered (){
        return(
            <ResponsiveContainer width={"95%"} height={320}>
                <ComposedChart data={DailyData}>
                    <XAxis dataKey="Date" stroke="#8884d8"  />
                    <YAxis/>
                    <Tooltip wrapperStyle={{ width: 200, backgroundColor: '#ccc' }} />
                    <Legend verticalAlign="bottom" height={36}/>
                    <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
                    <Area dataKey="Confirmed" fill="#5B8BEB" barSize={30} stroke="#5B8BEB"/>
                    <Area dataKey="Recovered" fill="#AEED76" barSize={30} stroke="#AEED76"/>
                </ComposedChart>
            </ResponsiveContainer>
        )
    }

    useEffect(()=>{
        Get7Days()
        
    }, [])

    useEffect(() => {
        console.log(DailyData)
    }, [DailyData])

    return (
        <div className='content2' id='content2'>
            <div className="container-fluid" style={ Style.PaddingForMenu }/>

            <div className="container-fluid" style={ Style.AreaHeightContent }>
                
                <div className="row" style={{paddingTop: "3vh", height: "89vh"}}>
                
                <div className="col-12 col-md-12 col-lg-12 col-xl-6 ">
                    <div className="row">
                        <div className="col-8 col-md-7 col-lg-7 col-xl-12 ">
                            {ChartNConfirmedandNRecoverd()}
                        </div>
                        <div className="col-4 col-md-5 col-lg-5 col-xl-12 text-center" style={{height: "auto"}}>
                            <img className="DocPic " src={ DocMed }/>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-12 col-lg-12 col-xl-6 ">
                    <div className="row">
                        <div className="col-4 col-md-5 col-lg-5 col-xl-12 " style={{height: "auto"}}>
                            <img className="DocPic" src={ DocChart }/>
                        </div>
                        <div className="col-8 col-md-7 col-lg-7 col-xl-12 ">
                            {ChartConfirmedandRecovered()}
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Content2
