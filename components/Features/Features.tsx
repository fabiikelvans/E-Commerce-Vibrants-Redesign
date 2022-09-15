import React from 'react';
import {CheckCircleIcon} from "@heroicons/react/outline";
import Marquee from "react-fast-marquee";


function Features() {
    return (
        <div className='my-4'>
            <Marquee
                gradient={false} speed={80}
                className='flex flex-nowrap justify-between bg-gradient-to-r from-blue-100 to-pink-100 font-medium text-[15px] px-6 py-4 rounded-xl'>
                <li className='flex items-center space-x-2 mx-12'><CheckCircleIcon className='h-6 w-6'/> <span>NO INGREDIENTS</span> </li>
                <li className='flex items-center space-x-2 mx-12'><CheckCircleIcon className='h-6 w-6'/> <span>SAFE ON ALL AGES</span></li>
                <li className='flex items-center space-x-2 mx-12'><CheckCircleIcon className='h-6 w-6'/> <span>MONEY-BACK GUARANTEE</span></li>
                <li className='flex items-center space-x-2 mx-12'><CheckCircleIcon className='h-6 w-6'/> <span>DRUG FREE</span></li>
                <li className='flex items-center space-x-2 mx-12'><CheckCircleIcon className='h-6 w-6'/> <span>NO SIDE EFFECTS</span></li>
            </Marquee>
        </div>
    );
}

export default Features;