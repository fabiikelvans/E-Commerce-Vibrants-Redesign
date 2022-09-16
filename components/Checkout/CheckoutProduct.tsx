import React from 'react';
import Image from "next/image";
import {urlFor} from "../../sanity";
import {RefreshIcon, MinusCircleIcon, PlusCircleIcon, TrashIcon } from "@heroicons/react/outline";
import Currency from 'react-currency-formatter';
import {useDispatch} from "react-redux";
import {removeFromBasket, addToBasket, removeAllFromBasket} from "../../redux/features/basketSlice";
import toast from "react-hot-toast";
import { Product } from '../../types/typings';


interface Props {
    items: Product[];
    id: string;
}


function CheckoutProduct({ items, id } : Props) {

    const dispatch = useDispatch()

    const product = items[0];

    // Add Item to Basket
    const addItemToBasket = () => {
        dispatch(addToBasket(product));

        toast.success(`${product.title} added to basket`, {
            position: "bottom-center",
        })
    }

    // Remove Item from Basket
    const removeItemFromBasket = () => {
        dispatch(removeFromBasket({ id }));

        toast.error(`${items[0].title} removed from basket`, {
            position: "bottom-center",
        })
    }

    // Remove Items from Basket
    const removeAllItemsFromBasket = () => {
        dispatch(removeAllFromBasket({ id }));

        toast.error(`Items removed from basket`, {
            position: "bottom-center",
        })
    }

    return (
        <div className='flex flex-col border-b space-x-4 border-gray-300 pb-2 lg:flex-row
        lg:items-center py-4'>
            <div className='relative h-24 w-24 rounded-xl'>
                <Image
                    src={urlFor(items[0].image[0]).url()}
                    layout='fill'
                    alt={items[0].title}
                    objectFit='cover'
                />
            </div>

            <div className='flex flex-1 items-end lg:items-center'>
                <div className='flex-1 space-y-4'>
                    <div className='flex flex-col gap-x-8 text-md'>
                        <h4 className='font-semibold'>{items[0].title}</h4>
                        <p className='mb-1 text-[12px]'>Bio-Frequency Patches</p>
                        <p className='flex items-center text-[12px] text-gray-600 space-x-1'>
                            <RefreshIcon className='h-4 w-4'/>
                            <div>ONE-TIME</div>
                        </p>
                        <p className='flex items-center mt-3 space-x-2 font-semibold text-gray-700 '>
                            <MinusCircleIcon className='h-5 w-5 cursor-pointer '
                                             onClick={removeItemFromBasket}
                            />
                            <div>{items.length}</div>
                            <PlusCircleIcon className='h-5 w-5 cursor-pointer'
                                            onClick={addItemToBasket}
                            />
                        </p>
                    </div>
                </div>

                <div className='flex flex-col items-end space-y-4'>

                    {/*Remove Item from Basket*/}
                    <TrashIcon className='h-4 w-4 cursor-pointer' onClick={removeAllItemsFromBasket}/>

                    <h4 className='text-sm font-bold'>
                        <Currency
                            quantity={items.reduce((total, item) => total + item.price, 0)}
                            currency="USD"
                        />
                    </h4>


                </div>
            </div>
        </div>
    );
}

export default CheckoutProduct;