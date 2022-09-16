import React from 'react';
import Image from "next/image";

function Guarantee() {
    return (
        <div className='bg-gradient-to-r from-purple-50 to-pink-50 flex text-center flex-col items-center py-20 mt-6 '>

            <img className='h-28 w-28 md:h-20 md:w-20' alt='guarantee' src='/../images/G0.webp' />

            <h1 className='text-3xl mt-6 text-[#2D5470] md:text-3xl font-bold'>Good vibes, guaranteed.</h1>
            <p className='text-[18px] w-[80%] md:w-full md:text-sm text-gray-500 mt-5'>No fluff, no fear, all feels. Our safe & effective patches are backed by an upfront promise (and science!).</p>
        </div>
    );
}

export default Guarantee;