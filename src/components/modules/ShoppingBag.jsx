import React from 'react';
//logos
import product1 from "../../assets/products/p1.png"
//icons
import { XMarkIcon } from '@heroicons/react/24/outline';

const ShoppingBag = ({shopIsOpen,setShopIsOpen}) => {


    return (
        <>
        <div className={`${shopIsOpen ? "left-0" : "-left-64"} fixed flex flex-col z-20 top-0 bottom-0 w-64 pt-5 px-4 bg-white dark:bg-zinc-700 overflow-y-auto transition-all`}>
            <div className='flex items-center justify-between pb-5 mb-6 border-b border-b-gray-100 dark:border-b-white/10'>

                <div onClick={() => setShopIsOpen(false)}>
                    <svg className='w-6 h-6 text-zinc-600 dark:text-white'>
                        <XMarkIcon/>
                    </svg>
                </div>

                <div className='flex gap-x-3.5'>
                    <span className='text-zinc-700 dark:text-white font-DanaMedium'>سبد خرید</span>
                </div>

                </div>
                {/* body */}

                <div className='flex gap-x-1 mb-5 pb-5 border-b border-b-gray-100 dark:border-b-white/10'>
                            <img src={product1} alt='product' className='w-[90px] h-[90px]'/>
                            <div className='flex flex-col justify-between gap-y-1.5'>
                                <h4 className='font-DanaMedium text-zinc-700 dark:text-white text-sm line-clamp-2'>قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی</h4>
                                <div>
                                    <span className='text-teal-600 dark:text-emerald-500 font-DanaMedium text-xs tracking-tighter'>14.500 تومان تخفیف</span>
                                    <div className='text-zinc-700 dark:text-white font-DanaDemiBold'>
                                        175,000 
                                    <span className='font-Dana text-xs'>تومان</span>
                                    </div>
                                </div>
                            </div>
                </div>

                {/* footer */}
                <div className='flex items-end gap-x-4 mt-auto mb-8'>

                        <a href='#' className='flex items-center justify-center w-28 h-11 rounded-xl bg-teal-600 
                            dark:bg-emerald-500 dark:hover:bg-emerald-600 transition-all text-white 
                            tracking-tightest '>ثبت سفارش</a>
                    <div>
                        <span className='font-DanaMedium text-gray-300 text-xs tracking-tighter'>مبلغ قابل پرداخت</span>
                        <div className='text-zinc-700 dark:text-white font-DanaDemiBold'>
                                350,000 
                            <span className='font-Dana text-xs'>تومان</span>
                        </div>
                    </div>
                </div>

        </div>

        <div onClick={() => setShopIsOpen(false)} className={`${shopIsOpen ? "" : "hidden"} md:hidden w-full h-full fixed inset-0 bg-black/40 z-10 transition-all`}></div>
        </>
    );
};

export default ShoppingBag;