import React from 'react';
import Button from "../Button/Button";

function FeelBetter() {
    return (
        <div className='mx-6'>
            <div className='ctaImg rounded-xl w-full  mx-auto'>
                <div className='pt-[20vh] md:pt-[30vh] pl-10 md:pl-32'>
                    <h1 className='my-6 text-[#262626] text-3xl md:text-5xl font-bold'>Start feeling <br/> better.</h1>
                    <p className='mb-6 w-[60%] md:w-[40%] font-medium'>
                        (without drugs or side effects)
                    </p>

                    <Button title='Shop Now' />
                </div>
            </div>
        </div>
    );
}

export default FeelBetter;