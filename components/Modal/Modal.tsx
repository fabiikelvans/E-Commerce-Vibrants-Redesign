import React, {useEffect, useState} from "react";
import {modalOpen, toggleAffinityModal} from "../../redux/features/modalSlice";
import {useSelector, useDispatch} from "react-redux";
import {ArrowLeftIcon, LockClosedIcon, ShoppingBagIcon} from "@heroicons/react/outline";
import Button from "../Button/Button";
import Stripe from "stripe";
import getStripe from "../../utils/functions/get-stripejs";

// Redux
import {selectBasketItems} from "../../redux/features/basketSlice";
import CheckoutProduct from "../Checkout/CheckoutProduct";
import {selectBasketTotal} from "../../redux/features/basketSlice";
import Currency from "react-currency-formatter";
import {useRouter} from "next/router";
import {fetchPostJSON} from "../../utils/functions/api-helper";

const Modal = () => {

    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();

    // Show Cart Modal
    const showModal = useSelector(modalOpen)

    // Items added to the cart
    const items = useSelector(selectBasketItems);

    // Grouped Items
    const [groupedItemsInBasket, setGroupedItemsInBasket] = useState(
        {} as { [key: string] : Product[] }
    );

    // Basket Total
    const basketTotal = useSelector(selectBasketTotal);

    useEffect(() => {
        const groupedItems = items.reduce((results, item) => {
            (results[item._id] = results[item._id] || []).push(item)
            return results;
        }, {} as { [key: string] : Product[] });

        setGroupedItemsInBasket(groupedItems);
    }, [items]);

    // Create Checkout Session
    const createCheckoutSession = async () => {
        setLoading(true);

        const checkoutSession: Stripe.Checkout.Session =  await fetchPostJSON(
            "/api/checkout_sessions",
            {
                items: items,
            }
        );

        // Internal Server Error
        if((checkoutSession as any).statusCode === 500) {
            console.error((checkoutSession as any).message);
            return;
        }

        // Redirect to checkout
        const stripe = await getStripe()
        const { error } = await stripe!.redirectToCheckout({
            sessionId: checkoutSession.id,
        });
        console.warn(error.message);
        setLoading(false);
    }

    return (
        <>
            {showModal ? (
                    <div className="fixed flex top-0 right-0 h-screen w-screen z-30">
                        <div className='bg-[#2D5470] w-[10%] sm:w-[30%] md:w-[50%] lg:w-[65%] opacity-60 backdrop-blur-2xl'
                             onClick={() => dispatch(toggleAffinityModal())}
                        ></div>
                        <div className='bg-white w-[90%] sm:w-[70%] md:w-[50%] lg:w-[35%]'>
                            <div className='flex items-center px-6 py-4'>
                                <ArrowLeftIcon className='h-6 cursor-pointer' onClick={() => dispatch(toggleAffinityModal())} />
                                <h4 className='uppercase text-[15px] ml-[28%] font-bold'>My Shopping Bag</h4>
                            </div>

                            {items.length > 0 ? (
                                <div>
                                    {/*---- Items -----*/}
                                    <div className='px-6 overflow-y-scroll max-h-64 scrollbar-hide'>
                                        {Object.entries(groupedItemsInBasket).map(([key, items]) => (
                                            <CheckoutProduct key={key} items={items} id={key}/>
                                        ))}
                                    </div>

                                    {/*---- Trust -----*/}
                                    <div className='flex justify-between bg-gradient-to-r from-gray-100 to-blue-50 px-6 py-4'>
                                        <div className='flex items-center space-x-2 font-medium text-gray-600 tracking-wide'>
                                            <img src='/../images/trust-1.webp' className='h-10 w-10'/>
                                            <p className='text-[11px]'>FREE
                                                <br/>SHIPPING</p>
                                        </div>

                                        <div className='flex items-center space-x-2 font-medium text-gray-600 tracking-wide'>
                                            <img src='/../images/trust-2.webp' className='h-10 w-10'/>
                                            <p className='text-[11px]'>30 DAY MONEY-BACK
                                                <br/>GUARANTEE</p>
                                        </div>

                                        <div className='flex items-center space-x-2 font-medium text-gray-600 tracking-wide'>
                                            <img src='/../images/trust-3.webp' className='h-10 w-10'/>
                                            <p className='text-[11px]'>SECURE
                                                <br/>CHECKOUT</p>
                                        </div>
                                    </div>

                                    {/*---- Subtotal -----*/}
                                    <div className='px-6 py-4 flex items-center justify-between'>
                                        <h1 className='text-[22px] font-bold'>Subtotal</h1>
                                        <h1 className='text-[22px] font-bold'>
                                            <Currency quantity={basketTotal} currency='USD'/>
                                        </h1>
                                    </div>

                                    {/*---- Checkout Button & Payment Services -----*/}
                                    <div className={'px-6 flex flex-col items-center'}>
                                        <div>
                                            <Button title='Proceed to Checkout'
                                                    icon={loading ? null : <LockClosedIcon/>}
                                                    loading={loading}
                                                    onClick={createCheckoutSession}
                                            />
                                        </div>

                                        <p className='text-[13px] py-4 font-medium text-gray-600'>Shipping, taxes, and discounts added at checkout.</p>
                                        <div className='flex pb-4 justify-between w-[70%]'>
                                            <img src="/../../images/payments/amazon.svg" alt=""/>
                                            <img src="/../../images/payments/apple.svg" alt=""/>
                                            <img src="/../../images/payments/discover.svg" alt=""/>
                                            <img src="/../../images/payments/master.svg" alt=""/>
                                            <img src="/../../images/payments/paypal.svg" alt=""/>
                                            <img src="/../../images/payments/visa.svg" alt=""/>
                                        </div>
                                    </div>
                                </div>
                                )
                            : (
                                <div>

                                    {/*---- Empty Basket -----*/}
                                    <div className='flex flex-col items-center text-[#262626] text-center px-6 space-y-2 my-20 '>
                                        <ShoppingBagIcon className='h-12 w-12'/>
                                        <h1 className='text-[22px] font-bold'>Your bag is empty!</h1>
                                        <p className='font-medium text-[17px] w-[80%]'>Looks like your shopping bag is empty, give it some love!</p>
                                    </div>

                                    {/*---- Trust -----*/}
                                    <div className='flex justify-between bg-gradient-to-r from-gray-100 to-blue-50 px-6 py-4'>
                                        <div className='flex items-center space-x-2 font-medium text-gray-600 tracking-wide'>
                                            <img src='/../images/trust-1.webp' className='h-10 w-10'/>
                                            <p className='text-[11px]'>FREE
                                                <br/>SHIPPING</p>
                                        </div>

                                        <div className='flex items-center space-x-2 font-medium text-gray-600 tracking-wide'>
                                            <img src='/../images/trust-2.webp' className='h-10 w-10'/>
                                            <p className='text-[11px]'>30 DAY MONEY-BACK
                                                <br/>GUARANTEE</p>
                                        </div>

                                        <div className='flex items-center space-x-2 font-medium text-gray-600 tracking-wide'>
                                            <img src='/../images/trust-3.webp' className='h-10 w-10'/>
                                            <p className='text-[11px]'>SECURE
                                                <br/>CHECKOUT</p>
                                        </div>
                                    </div>
                                </div>
                            )}

                        </div>
                    </div>

            ) : null}
        </>
    );
};

export default Modal;