import React from 'react';

function Transform() {
    return (
        <div className='mx-6 my-28 flex flex-col items-center'>
            <div className='flex flex-col items-center'>
                <h5 className='text-sm tracking-wide font-bold'>TRANSFORMING WELLNESS</h5>
                <h1 className='my-6 text-[#262626] text-3xl md:text-4xl font-bold'>We’re different and <br/>it makes a difference.</h1>
            </div>

            <div className='flex flex-col md:flex-row space-y-12 md:space-y-0 justify-between mt-12 items-center w-[80%]'>
                <div className='flex flex-col text-center items-center space-y-2'>
                    <div className='flex items-center justify-center p-4 rounded-full bg-[#F6FAFF] text-xs font-bold h-4 w-4'>01</div>
                    <h3 className='text-lg md:text-[22px] font-bold'>Natural Alternatives</h3>
                    <p className='text-md font-medium w-[80%]'>We believe nature is the key to unlocking better wellness.</p>
                </div>

                <div className='flex flex-col text-center items-center space-y-2'>
                    <div className='flex items-center justify-center p-4 rounded-full bg-[#F6FAFF] text-xs font-bold h-4 w-4'>02</div>
                    <h3 className='text-lg md:text-[22px] font-bold'>Innovative Technology</h3>
                    <p className='text-md font-medium w-[80%]'>Our passion for developing better products is driven by innovation.</p>
                </div>

                <div className='flex flex-col text-center items-center space-y-2'>
                    <div className='flex items-center justify-center p-4 rounded-full bg-[#F6FAFF] text-xs font-bold h-4 w-4'>03</div>
                    <h3 className='text-lg md:text-[22px] font-bold'>Sustainable Wellness</h3>
                    <p className='text-md font-medium w-[80%]'>We believe in making a positive impact on you and the planet.</p>
                </div>
            </div>
        </div>
    );
}

export default Transform;