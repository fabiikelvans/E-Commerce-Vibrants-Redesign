import React from 'react';
import {ShoppingCartIcon} from "@heroicons/react/outline";
import Image from "next/image";
import {urlFor} from "../../sanity";
import Button from "../Button/Button";
import {StarIcon} from "@heroicons/react/solid";

// Redux
import {modalOpen, toggleAffinityModal} from "../../redux/features/modalSlice";
import {useSelector, useDispatch} from "react-redux";
import {addToBasket} from "../../redux/features/basketSlice";
import toast from "react-hot-toast";

interface Props {
    product: Product
}

function Product({ product } : Props) {

    const dispatch = useDispatch();

    // Toggle Modal
    const toggleBasketModal = () => {
        dispatch(toggleAffinityModal())
    }

    // Add Item to Basket
    const addItemToBasket = () => {
        dispatch(addToBasket(product));

        toast.success(`${product.title} added to basket`, {
            position: "bottom-center",
        })
    }

    return (
        <div className='space-y-6 md:space-y-0'>
            <div className='flex h-fit min-w-[320px] select-none flex-col space-y-3 rounded-xl
        p-4 md:h-[500px] md:w-[400px] md:p-10'>
                <div className='relative h-64 w-full md:h-72'>
                    <Image
                        src={urlFor(product.image[0]).url()}
                        layout='fill'
                        objectFit='contain' />
                </div>

                <div className='flex flex-col '>
                    <div className='space-y-4 md:text-xl'>
                        <h1 className='text-[20px] font-bold'>{product.title} <span className='bg-[#262626] hover:bg-gray-600 font-semibold text-white  text-sm p-2 rounded-md'>Save 10%</span></h1>
                        <p className='text-sm'>Natural Bio-Frequency Stress Relief Patch</p>
                        <div className='flex items-center space-x-[2px]'>
                            <StarIcon className='h-4 w-4 text-orange-400'/>
                            <StarIcon className='h-4 w-4 text-orange-400'/>
                            <StarIcon className='h-4 w-4 text-orange-400'/>
                            <StarIcon className='h-4 w-4 text-orange-400'/>
                            <StarIcon className='h-4 w-4 text-orange-400'/>
                            <p className='text-[12px] font-bold'>({product.price})</p>
                        </div>
                    </div>

                    <div className='mt-6' onClick={
                        (ev) => {
                            ev.stopPropagation();
                            toggleBasketModal();
                            addItemToBasket();
                        }} >
                        <Button  title={`$${product.price} | Add To Bag`} bordered={true} />
                    </div>

                </div>

            </div>
        </div>
    );
}

export default Product;