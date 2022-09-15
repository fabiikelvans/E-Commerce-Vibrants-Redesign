import React from 'react';

interface Props {
    title: string;
    bordered? : boolean | undefined;
    icon? : any;
    loading?: boolean;
    onClick?: () => void;

}

function Button({ title, bordered, icon, loading, onClick } : Props) {
    return (
        <button className={`
        ${bordered ? 'bg-none border-2 border-[#262626] transition duration-700 ease-in-out text-[#262626] hover:bg-[#262626] hover:text-white' 
            : 
            'bg-[#262626] border-2 text-white hover:cursor-pointer hover:text-[#262626] hover:bg-white hover:border-[#262626] transition duration-700 ease-in-out' 
        } ${icon && 'flex items-center justify-center space-x-4 w-full'} rounded-md px-8 py-4 md:py-5 uppercase tracking-wide font-bold text-[13px] md:text-[15px]`}
                onClick={onClick}
        >
            <div className={`${icon && 'h-7 w-7'}`}>{icon}</div>
            <span>
                {loading ? "Loading..." : title}
            </span>

        </button>
    );
}

export default Button;