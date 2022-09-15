import React from 'react';
import Header from "../components/Header/Header";
import Button from "../components/Button/Button";
import Transform from "../components/Transform/Transform";
import Promise from "../components/Promise/Promise";
import Instagram from "../components/Instagram/Instagram";
import FeelBetter from "../components/Feel Better/FeelBetter";
import Guarantee from "../components/Guarantee/Guarantee";
import CallToAction from "../components/Call To Action/CallToAction";

function About() {
    return (
        <div>
            <Header/>

            <div className='aboutImg mx-auto rounded-xl'>
                <div className='pt-[30vh] md:pt-[30vh] pl-10 md:pl-32'>
                    <h5 className='text-sm tracking-wide font-bold'>OUR MISSION</h5>
                    <h1 className='my-6 text-[#262626] text-4xl md:text-5xl font-bold'>To help you <br/> feel better.</h1>
                    <p className='mb-6 w-[60%] md:w-[40%] font-medium'>
                        (without drugs or side effects)
                    </p>
                </div>
            </div>

            <Transform/>
            <Promise/>
            <Instagram/>
]            <Guarantee/>
            <CallToAction/>
        </div>
    );
}

export default About;