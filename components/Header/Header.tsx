import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import ShippingSticker from "./ShippingSticker";
import {ShoppingBagIcon, UserIcon} from "@heroicons/react/outline";

// Auth
import { signIn, signOut, useSession } from "next-auth/react";
import { GoogleLogin } from '@react-oauth/google';

// Redux Modal
import {modalOpen, toggleAffinityModal} from "../../redux/features/modalSlice";
import {useSelector, useDispatch} from "react-redux";
import {selectBasketItems} from "../../redux/features/basketSlice";
import Image from "next/image";

function Header() {

    // Show Basket Modal
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();

    // Selected Items
    const items = useSelector(selectBasketItems);

    const { data: session } = useSession();


    return (
        <div>
            <ShippingSticker/>

            <header className='relative'>
                <nav className="bg-white z-40">
                    <div className="px-4 sm:px-6 lg:px-2">
                        <div className="py-6 ">

                            <div className="sticky top-0 backdrop-blur-2xl">
                                    <div className=" md:mx-32 flex items-center justify-between ">

                                        <div className="-mr-2 flex md:hidden">
                                            <button
                                                onClick={() => setIsOpen(!isOpen)}
                                                type="button"
                                                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                                aria-controls="mobile-menu"
                                                aria-expanded="false"
                                            >
                                                <span className="sr-only">Open main menu</span>
                                                {!isOpen ? (
                                                    <svg
                                                        className="block h-6 w-6"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                        aria-hidden="true"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            d="M4 6h16M4 12h16M4 18h16"
                                                        />
                                                    </svg>
                                                ) : (
                                                    <svg
                                                        className="block h-6 w-6"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                        aria-hidden="true"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            d="M6 18L18 6M6 6l12 12"
                                                        />
                                                    </svg>
                                                )}
                                            </button>
                                        </div>

                                        <div className='hidden md:block space-x-4'>
                                            <a href="#" className="navLink">
                                                Shop
                                            </a>

                                            <a href="#" className="navLink">
                                                Our Patch
                                            </a>

                                            <a href="#" className="navLink">
                                                About Us
                                            </a>
                                        </div>

                                        <div className=''>
                                            <a href="#">
                                                <img
                                                    className="h-8 w-8"
                                                    src="/../logo.svg"
                                                    alt="Workflow"
                                                />
                                            </a>
                                        </div>

                                        <div className='hidden md:block space-x-4'>
                                            <a href="#" className="navLink">
                                                Subscription
                                            </a>

                                        </div>

                                        <div className="navLink relative">
                                            <ShoppingBagIcon
                                                className='h-8 w-8 cursor-pointer'
                                                onClick={() => dispatch(toggleAffinityModal())}
                                            />
                                            {items.length > 0 && (
                                            <div className='absolute top-2 right-2 bg-black h-5 w-5 flex items-center justify-center rounded-full'>
                                                <p className='text-[12px] font-semibold text-white'>
                                                    {items.length}
                                                </p>
                                            </div>
                                            )}
                                        </div>

                                        <div>
                                            {session ? (
                                                <Image
                                                    src={
                                                        session.user?.image ||
                                                        "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
                                                    }
                                                    alt=""
                                                    className='cursor-pointer rounded-full'
                                                    width={34}
                                                    height={34}
                                                    onClick={() => signOut()}
                                                />
                                            ) : (
                                                <UserIcon className='w-8 h-8 text-red-400 cursor-pointer'
                                                          onClick={() => signIn()}
                                                />
                                            )}
                                        </div>

                                    </div>
                                </div>

                        </div>
                    </div>

                    <Transition
                        show={isOpen}
                        enter="transition ease-out duration-100 transform"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="transition ease-in duration-75 transform"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        {(ref) => (
                            <div className="md:hidden backdrop-blur-xl absolute h-[70vh] top-0 z-30 w-full" id="mobile-menu">
                                <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex items-center pt-12 space-y-6 flex-col">
                                    <a
                                        href="#"
                                        className="text-[#262626] font-bold hover:text-black transition hover:underline block px-3 py-2 rounded-md text-base font-medium"
                                    >
                                        Shop
                                    </a>

                                    <a
                                        href="#"
                                        className="text-[#262626] font-bold  hover:text-black block px-3 py-2 rounded-md text-base font-medium"
                                    >
                                        Our Patch
                                    </a>

                                    <a
                                        href="#"
                                        className="text-[#262626] font-bold  hover:text-black block px-3 py-2 rounded-md text-base font-medium"
                                    >
                                        About Us
                                    </a>

                                    <a
                                        href="#"
                                        className="text-[#262626] font-bold  hover:text-black block px-3 py-2 rounded-md text-base font-medium"
                                    >
                                        Subscription
                                    </a>

                                    <a
                                        href="#"
                                        className="text-[#262626] font-bold  hover:text-black block px-3 py-2 rounded-md text-base font-medium"
                                    >
                                        Sign In
                                    </a>


                                </div>
                            </div>
                        )}
                    </Transition>
                </nav>
            </header>

        </div>
    );
}

export default Header;