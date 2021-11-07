import React from 'react';
import Navbar from './Navbar'
import Maincontent from './Maincontent'
import Footer from './Footer'
import jokesData from './jokesData'
import todosData from './todosData'
import contact from './contact.png'


function MyInfo(){
    return(
        <div>       
            <Navbar/>
            <Footer/>
        </div>
     
    )
}

export default MyInfo;