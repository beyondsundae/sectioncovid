import React,{ useEffect, useState } from 'react'
import axios from 'axios'
import { PieChart, Pie, ResponsiveContainer, 
    ComposedChart, Area, CartesianGrid, Bar, XAxis, 
    YAxis, Tooltip, Legend, Cell, LineChart, Line } from 'recharts';
import Cough from './SVG/coughing.svg'
import CoughF from './SVG/coughingF.svg'
import MaskF from './SVG/wearing_a_mask_F.svg'
import MaskM from './SVG/wearing_a_mask_M.svg'

    const Content = () => {
    const [ Gender, setGender ] = useState([]);
    const [ Provinces, setProvinces ] = useState([]);

    const Style = ({ 
        PaddingForMenu:{ 
            height: "0vh",
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

    const GetGenderandProvinces = async () => {
        await axios.get( 'https://covid19.th-stat.com/api/open/cases/sum' )
        .then ( ( res ) => {
            const data = res.data
            // console.log(data.Gender)
            setGender(data.Gender)
        } )

        .catch ( (err) => {
            console.log( err.message )
            alert("API Status: "+err.message)
        } )
    }

    const PieGender = () => {
        const data = [{name: 'Male', value: Gender.Male}, {name: 'Female', value: Gender.Female}]
        const COLORS = ['#0088FE', '#FFB6C1'];

        return(
            <ResponsiveContainer height={600}>
                <PieChart>
                    <Pie
                        data={data} 
                        innerRadius="0%"
                        outerRadius="80%"
                        fill="#8884d8"
                        paddingAngle={0}
                        labelLine={true}
                        isAnimationActive={false}
                        label ={(entry) => entry.name + ": " + entry.value }>
                        {
                            data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
                        }
                    </Pie>
                    <Legend />
                    <Tooltip/>
                </PieChart>
            </ResponsiveContainer>
        )
    }


    useEffect (() => {
        GetGenderandProvinces()
    }, []) 

    useEffect(() => {
        console.log(Gender)
    },[Gender])

    

    return (
        <div className='content' id='content'>
            <div className=" container-fluid " style={ Style.PaddingForMenu }/>

            <div className=" container-fluid " style={ Style.AreaHeightContent }>
                <div className="row justify-content-center " style={{paddingTop: "10vh", height: "82vh"}}>
                    <div className="col ">
                        <div className="row  ">
                            <div className="col col-12 col-lg-12  py-5 d-none d-md-block">
                                <div style={ Style.FontAmount }>
                                    Gender and COVID-19
                                </div>
                            </div>

                            <div className="col col-lg-6 col-md-10">
                                <img src={Cough}/>
                                <div style={ Style.FontGender }>Male <div style={ Style.FontAmount }>{Gender.Male}</div></div>
                            </div>
                            
                            <div className="col col-lg-6 col-md-10">
                                <img src={CoughF}/>
                                <div style={ Style.FontGender }>Female <div style={ Style.FontAmount }>{Gender.Female}</div></div>
                            </div>
                        </div>
                    </div>

                    <div className="col ">
                        { PieGender() }
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Content
