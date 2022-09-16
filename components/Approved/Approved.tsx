import React from 'react';
import {BadgeCheckIcon} from "@heroicons/react/outline";
import Image from "next/image";

function Approved() {
    return (
        <div className='flex flex-col md:flex-row justify-between md:space-x-6 space-y-6 md:space-y-0 my-6'>
            <div className="flex flex-col rounded-xl items-center w-[100%] md:w-[50%] px-20 py-32 bg-[#F4F1FF]">
                <BadgeCheckIcon className='h-20 w-20 text-red-400'/>
                <h5 className='text-sm tracking-wide font-bold mt-6'>WELLNESS SIMPLIFIED</h5>
                <h1 className='my-6 text-2xl md:text-4xl font-bold text-[#262626]'>Physician Approved</h1>
                <p className='text-center font-medium leading-7'>
                    The proven benefits of traditional bioresonance therapy
                    inspired us to build a new delivery system for targeted
                    bio-frequencies that was intuitive, convenient, accessible & discreet.
                </p>
            </div>
            <div className="w-[100%] md:w-[50%] bg-[#FCE9EB] rounded-xl px-20 py-12">
                <div>
                    <h5 className='font-medium underline text-sm'>OUR BIORESONANCE EXPERT:</h5>
                    <h1 className='text-2xl md:text-3xl mt-6'>“Treating the body with information is the future of medicine.”</h1>
                </div>
                <div className='mt-36'>
                    <img src='/../images/beth.jpg' alt='avatar' className='h-28 w-28 rounded-full'/>
                    <h2 className='font-bold text-md underline my-2' >Beth McDougall, M.D.</h2>
                    <p className='text-[12px] text-gray-400'>FOUNDER & MEDICAL DIRECTOR</p>
                    <p className='text-[12px] text-gray-400'>CLEAR CENTER OF HEALTH</p>
                    <div>
                        <a href="#"></a>
                        <a href="#"></a>
                        <a href="#"></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Approved;