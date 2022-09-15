import React from 'react';
import Image from "next/image";
import Button from "../Button/Button";

function Slideshow() {
    return (
        <div className='relative overflow-hidden -z-10'>
        <div className='flex mx-auto items-center justify-between rounded-2xl headerImg '>
            <div className='ml-10 md:ml-32'>
                <h1 className='text-4xl font-bold md:text-6xl text-[#262626]'>Your wellness,<br/> reinvented.</h1>
                <p className='py-6 text-[#262626] md:text-[17px] font-medium'>Wellness without drugs or side effects.</p>
                <Button title={'Shop Now'} bordered={false} />
            </div>
        </div>
        </div>
    );
}

export default Slideshow;