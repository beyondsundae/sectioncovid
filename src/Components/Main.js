import React from 'react'
import Container from '@material-ui/core/Container';

function Main() {
    const PaddingNav = 
        { paddingTop: "5vh" }

    return (
        <div className='main' id='main'>
            <div className='container-fluid' style={PaddingNav}/>
               
            <div className='container-fluid border border-primary'>
                    <div className='col text-center'>xx</div>
                    {/* <Container fixed></Container> */}
                </div>
        </div>
    )
}

export default Main
