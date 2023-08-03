import React from 'react';
import BackgroundHeader from "../Global/backgroundHeader";
import Artical from './Artical';
import Footer from '../Global/Footer';
import Contact from "../Global/Contact";
const Newspage = (props) => {
    return (
        <>
            <BackgroundHeader name='News'/>
            <Artical/>
            <Contact/>

        </>
    )
}

export default Newspage;
