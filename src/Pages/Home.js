import React, {useEffect, useState} from 'react'
import axios from 'axios'
import ReactPageScroller from "react-page-scroller";
import ReactFullpage from '@fullpage/react-fullpage';
import {ScrollToTopOnMount, SectionsContainer, Section, Header, Footer} from 'react-fullpage';

import Navbar from '../Components/Navbar';
import Main from '../Components/Main';
import Content from '../Components/Content'
import Content2 from '../Components/Content2'
import Hommie from '../Components/Hommie';
import { Link } from 'react-router-dom';

function Home() {

    const [ Data, setData ] = useState();
    const anchors = ["firstPage", "secondPage"];
   
    let options = {
        activeClass:          'active',
        sectionClassName:     'section',
        anchors:              ['sectionOne', 'sectionTwo', 'sectionThree'],
        delay:                500,
        navigation:           true,
        verticalAlign:        false,
        // scrollBar:            true,
      };

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
            
            {/* <ReactPageScroller
            animationTimer={600}>
                <Hommie updateDate ={ Data }/>
                <Main/>
                <Content/>
                <Content2/>
            </ReactPageScroller>
            <Navbar/> */}

        {/* <ReactFullpage
        anchors={anchors}
        navigationTooltips={anchors}
        navigation
        // fullpage options
        scrollingSpeed = {700} 
        sectionsColor={["#282c34", "#ff5f45", "#0798ec"]}
        render={({ state, fullpageApi }) => {
        return (
            <ReactFullpage.Wrapper>
            <div className="section">
                <p>Section 1 (welcome to fullpage.js)</p>
                <button><a href="#secondPage">xxxx</a></button>
                
            </div>
            <div className="section">
                <p>Section 2</p>
            </div>
            </ReactFullpage.Wrapper>
        );
        }}
    /> */}
            
            {/* <Header className='test'>
                <a href="#sectionOne" >Section One</a>
                <a href="#sectionTwo" >Section Two</a>
                <a href="/" >Section Three</a>
            </Header> */}
            {/* <Footer >
                <a href="">Dcoumentation</a>
                <a href="">Example Source</a>
                <a href="">About</a>
            </Footer> */}

           
            
            <SectionsContainer  {...options}>
                <Section><Hommie updateDate ={ Data }/></Section>
                <Section><Main/></Section>
                <Section><Content/></Section>
            </SectionsContainer>
            <Navbar/>
            

            {/* <Header>
            <a href="#sectionOne">Section One</a>
            <a href="#sectionTwo">Section Two</a>
            <a href="/">Section Three</a>
            </Header>
            <Footer>
            <a href="">Dcoumentation</a>
            <a href="">Example Source</a>
            <a href="">About</a>
            </Footer>
            <SectionsContainer className="container" {...options}>
            <Section color="#69D2E7">Page 1</Section>
            <Section color="#A7DBD8">Page 2</Section>
            <Section color="#E0E4CC">Page 3</Section>
            </SectionsContainer> */}
        </div>
    )
}

export default Home
