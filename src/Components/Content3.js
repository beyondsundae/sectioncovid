import React, { useEffect, useState } from 'react'

const Content3 = () => {
    const [ Provinces, setProvinces ] = useState([])

    const GetProvinces = async () => {
        await axios.get( 'https://covid19.th-stat.com/api/open/cases/sum' )
        .then( ( response ) => {
            const data = response.data
            setProvinces( data.Province )
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
        <div>
            
        </div>
    )
}

export default Content3
