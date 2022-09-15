import React from 'react';
import Image from "next/image";
import {instagram__data} from "../../data/data";
import Marquee from "react-fast-marquee";

function Instagram() {
    return (
        <div className='my-32'>
            <h1 className='text-4xl text-[#262626] text-center font-bold'>Stay tuned <span className='text-transparent font-semibold bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300'>@feelvibrants</span></h1>
            <div className='flex mt-20'>
                <Marquee
                    gradient={false} speed={10}>
                {instagram__data.map((instagram) => (
                    <div className='h-72 w-72 relative rounded-xl mx-2' key={instagram.image}>
                        <Image className='rounded-xl ' objectFit='cover' layout='fill' src={instagram.image} alt=""/>
                    </div>

                ))}
                </Marquee>
            </div>
        </div>
    );
}

export default Instagram;