import React from 'react';

function CallToAction() {
    return (
        <div className='bg-gradient-to-r from-gray-100 to-blue-50 flex flex-col space-y-10 md:space-y-0 md:flex-row justify-between items-center py-20 px-10 md:px-48 '>
            <div className='flex flex-col items-center text-center'>
                <img className='h-20 w-20 md:h-14 md:w-14' src='/../images/G1.webp' />
                <h4 className='text-xl md:text-md font-bold my-2'>FREE SHIPPING</h4>
                <p className='w-[60%] text-md md:text-[13px] text-gray-500'>Orders over $20 include free US shipping.</p>
            </div>

            <div className='flex flex-col items-center text-center'>
                <img className='h-20 w-20 md:h-14 md:w-14' src='/../images/G2.webp' />
                <h4 className='text-xl md:text-md font-bold my-2'>100% RISK-FREE</h4>
                <p className='w-[60%] text-md md:text-[13px] text-gray-500'>Get a full refund if you’re not feeling the love.</p>
            </div>

            <div className='flex flex-col items-center text-center'>
                <img className='h-20 w-20 md:h-14 md:w-14' src='/../images/G3.webp' />
                <h4 className='text-xl md:text-md font-bold my-2'>LOVING SUPPORT</h4>
                <p className='w-[60%] text-md md:text-[13px] text-gray-500'>We’re sticking with you every step of the way.</p>
            </div>
        </div>
    );
}

export default CallToAction;