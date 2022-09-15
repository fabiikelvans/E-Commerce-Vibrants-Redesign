import React from 'react';
import Button from "../Button/Button";

function Mission() {
    return (
        <div className='missionImg rounded-xl w-full'>
            <div className='pt-[20vh] md:pt-[30vh] ml-10 md:ml-32'>
                <h5 className=' text-sm tracking-wide font-bold'>OUR MISSION</h5>
                <h1 className='my-6 text-2xl md:text-4xl font-bold'>Helping you feel <br/> better.</h1>
                <p className='mb-6 w-[60%] md:w-[40%] font-medium'>At the heart of Vibrants, our success is your wellness and we’re constantly
                    innovating to develop products that help you feel better and live a more vibrant life.</p>

                <Button title='About Us' bordered={true} />
            </div>
        </div>
    );
}

export default Mission;