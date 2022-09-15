import React from 'react';
import Button from "../Button/Button";

function Approach() {
    return (
        <div className='approachImg rounded-xl w-full'>
            <div className="flex items-center">
                <div className="md:w-[50%]"></div>
                <div className="ml-[32%] md:ml-0 w-full md:w-[50%]">
                    <h5 className='mt-[30vh] text-sm tracking-wide font-bold'>A NATURAL APPROACH</h5>
                    <h1 className='my-6 text-2xl md:text-4xl font-bold'>Bio-frequencies, <br/>Made to Stick.</h1>
                    <p className='mb-6 w-[60%] font-medium'>Vibrants revolutionizes traditional bioresonance therapy with a simple and portable patch.</p>

                    <Button title='Our Patch' bordered={true} />
                </div>
            </div>
        </div>
    );
}

export default Approach;