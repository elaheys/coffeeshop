import React from 'react';
//images
import product1 from "../../assets/products/p1.png"
import product2 from "../../assets/products/p2.png"
import product3 from "../../assets/products/p3.png"
import product4 from "../../assets/products/p4.png"
import product5 from "../../assets/products/p5.png"
import product6 from "../../assets/products/p6.png"
import product7 from "../../assets/products/p7.png"
import product8 from "../../assets/products/p8.png"
//icon
import { ArrowsRightLeftIcon, ShoppingCartIcon, StarIcon } from '@heroicons/react/24/outline';

const ProductBody = () => {
    return (
        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5 md:gap-5  
        child:rounded-2xl child:bg-white child:dark:bg-zinc-700 child:shadow-normal'>
            <div className='p-2 md:p-5'>
                <div className='relative mb-2 md:mb-5 md:min-h-48'>
                    <img src={product1} alt='product' className='w-32  mx-auto md:w-auto  ' loading='lazy'/>
                    <span className='absolute top-1.5 right-1.5 block md:text-base/[34px] text-xs/[24px] h-5 md:h-[30px] font-DanaDemiBold 
                     text-white dark:text-zinc-700 px-2.5 md:px-3.5 rounded-full bg-orange-300'>12%</span>
                </div>
                <h5 className='font-DanaMedium text-sm md:text-xl text-zinc-700 dark:text-white h-10 md:h-14 line-clamp-2'>
                قهوه ترک بن مانو مقدار 250 گرم
                خط دوم اسم طولانی
                </h5>
                <div className='flex gap-x-2 md:gap-x-2.5 mt-1.5 md:mt-2.5'>
                    <div className='text-teal-600 dark:text-emerald-500'>
                        <span className='font-DanaDemiBold text-base md:text-xl'>154,000 </span>
                        <span className='text-xs md:text-sm tracking-tighter'>تومان</span>
                    </div>
                    <div className='text-gray-400 redLine'>
                        <span className='text-xs md:text-xl'>175,000 </span>
                        <span className='hidden xl:inline text-sm tracking-tighter'>تومان</span>
                    </div>
                </div>

                <div className='mt-2.5 flex items-center justify-between'>
                    <div className='flex items-center gap-x-2.5 md:gap-x-3'>
                        <span className='flex-center w-[26px] h-[26px] md:w-9 md:h-9 rounded-full transition-all cursor-pointer
                        text-gray-400 hover:text-white bg-gray-100 hover:bg-teal-600 dark:bg-zinc-800 dark:hover:bg-emerald-500 '>
                            <svg className='w-4 h-4 md:w-[22px] md:h-[22px]'>
                                <ShoppingCartIcon/>
                            </svg>
                        </span>
                        <span className='block rounded-full transition-all cursor-pointer
                        text-gray-400 hover:text-teal-600 dark:hover:text-emerald-500'>
                            <svg className='w-4 h-4 md:w-6 md:h-6'>
                                <ArrowsRightLeftIcon/>
                            </svg>
                        </span>
                    </div>
                    <div className='flex text-yellow-400'>
                        <svg className='w-4 h-4 md:w-6 md:h-6 text-gray-300 dark:text-gray-400'>
                            <StarIcon/>
                        </svg>
                        <svg className='w-4 h-4 md:w-6 md:h-6'>
                            <StarIcon/>
                        </svg>
                        <svg className='w-4 h-4 md:w-6 md:h-6'>
                            <StarIcon/>
                        </svg>
                        <svg className='w-4 h-4 md:w-6 md:h-6'>
                            <StarIcon/>
                        </svg>
                        <svg className='w-4 h-4 md:w-6 md:h-6'>
                            <StarIcon/>
                        </svg>
                    </div>
                </div>
            </div>
            <div className='p-2 md:p-5'>
                <div className='relative mb-2 md:mb-5'>
                    <img src={product2} alt='product' className='w-32 mx-auto md:w-auto'/>
                    <span className='absolute top-1.5 right-1.5 block md:text-base/[34px] text-xs/[24px] h-5 md:h-[30px] font-DanaDemiBold 
                     text-white dark:text-zinc-700 px-2.5 md:px-3.5 rounded-full bg-orange-300'>12%</span>
                </div>
                <h5 className='font-DanaMedium text-sm md:text-xl text-zinc-700 dark:text-white h-10 md:h-14 line-clamp-2'>
                قهوه ترک بن مانو مقدار 250 گرم
                خط دوم اسم طولانی
                </h5>
                <div className='flex gap-x-2 md:gap-x-2.5 mt-1.5 md:mt-2.5'>
                    <div className='text-teal-600 dark:text-emerald-500'>
                        <span className='font-DanaDemiBold text-base md:text-xl'>154,000 </span>
                        <span className='text-xs md:text-sm tracking-tighter'>تومان</span>
                    </div>
                    <div className='text-gray-400 redLine'>
                        <span className='text-xs md:text-xl'>175,000 </span>
                        <span className='hidden xl:inline text-sm tracking-tighter'>تومان</span>
                    </div>
                </div>

                <div className='mt-2.5 flex items-center justify-between'>
                    <div className='flex items-center gap-x-2.5 md:gap-x-3'>
                        <span className='flex-center w-[26px] h-[26px] md:w-9 md:h-9 rounded-full transition-all cursor-pointer
                        text-gray-400 hover:text-white bg-gray-100 hover:bg-teal-600 dark:bg-zinc-800 dark:hover:bg-emerald-500 '>
                            <svg className='w-4 h-4 md:w-[22px] md:h-[22px]'>
                                <ShoppingCartIcon/>
                            </svg>
                        </span>
                        <span className='block rounded-full transition-all cursor-pointer
                        text-gray-400 hover:text-teal-600 dark:hover:text-emerald-500'>
                            <svg className='w-4 h-4 md:w-6 md:h-6'>
                                <ArrowsRightLeftIcon/>
                            </svg>
                        </span>
                    </div>
                    <div className='flex text-yellow-400'>
                        <svg className='w-4 h-4 md:w-6 md:h-6 text-gray-300 dark:text-gray-400'>
                            <StarIcon/>
                        </svg>
                        <svg className='w-4 h-4 md:w-6 md:h-6'>
                            <StarIcon/>
                        </svg>
                        <svg className='w-4 h-4 md:w-6 md:h-6'>
                            <StarIcon/>
                        </svg>
                        <svg className='w-4 h-4 md:w-6 md:h-6'>
                            <StarIcon/>
                        </svg>
                        <svg className='w-4 h-4 md:w-6 md:h-6'>
                            <StarIcon/>
                        </svg>
                    </div>
                </div>
            </div>
            <div className='p-2 md:p-5'>
                <div className='relative mb-2 md:mb-5'>
                    <img src={product3} alt='product' className='w-32 mx-auto md:w-auto'/>
                    <span className='absolute top-1.5 right-1.5 block md:text-base/[34px] text-xs/[24px] h-5 md:h-[30px] font-DanaDemiBold 
                     text-white dark:text-zinc-700 px-2.5 md:px-3.5 rounded-full bg-orange-300'>12%</span>
                </div>
                <h5 className='font-DanaMedium text-sm md:text-xl text-zinc-700 dark:text-white line-clamp-2'>
                قهوه ترک بن مانو مقدار 250 گرم
                خط دوم اسم طولانی
                </h5>
                <div className='flex gap-x-2 md:gap-x-2.5 mt-1.5 md:mt-2.5'>
                    <div className='text-teal-600 dark:text-emerald-500'>
                        <span className='font-DanaDemiBold text-base md:text-xl'>154,000 </span>
                        <span className='text-xs md:text-sm tracking-tighter'>تومان</span>
                    </div>
                    <div className='text-gray-400 redLine'>
                        <span className='text-xs md:text-xl'>175,000 </span>
                        <span className='hidden xl:inline text-sm tracking-tighter'>تومان</span>
                    </div>
                </div>

                <div className='mt-2.5 flex items-center justify-between'>
                    <div className='flex items-center gap-x-2.5 md:gap-x-3'>
                        <span className='flex-center w-[26px] h-[26px] md:w-9 md:h-9 rounded-full transition-all cursor-pointer
                        text-gray-400 hover:text-white bg-gray-100 hover:bg-teal-600 dark:bg-zinc-800 dark:hover:bg-emerald-500 '>
                            <svg className='w-4 h-4 md:w-[22px] md:h-[22px]'>
                                <ShoppingCartIcon/>
                            </svg>
                        </span>
                        <span className='block rounded-full transition-all cursor-pointer
                        text-gray-400 hover:text-teal-600 dark:hover:text-emerald-500'>
                            <svg className='w-4 h-4 md:w-6 md:h-6'>
                                <ArrowsRightLeftIcon/>
                            </svg>
                        </span>
                    </div>
                    <div className='flex text-yellow-400'>
                        <svg className='w-4 h-4 md:w-6 md:h-6 text-gray-300 dark:text-gray-400'>
                            <StarIcon/>
                        </svg>
                        <svg className='w-4 h-4 md:w-6 md:h-6'>
                            <StarIcon/>
                        </svg>
                        <svg className='w-4 h-4 md:w-6 md:h-6'>
                            <StarIcon/>
                        </svg>
                        <svg className='w-4 h-4 md:w-6 md:h-6'>
                            <StarIcon/>
                        </svg>
                        <svg className='w-4 h-4 md:w-6 md:h-6'>
                            <StarIcon/>
                        </svg>
                    </div>
                </div>
            </div>
            <div className='p-2 md:p-5'>
                <div className='relative mb-2 md:mb-5'>
                    <img src={product4} alt='product' className='w-32 mx-auto md:w-auto'/>
                    <span className='absolute top-1.5 right-1.5 block md:text-base/[34px] text-xs/[24px] h-5 md:h-[30px] font-DanaDemiBold 
                     text-white dark:text-zinc-700 px-2.5 md:px-3.5 rounded-full bg-orange-300'>12%</span>
                </div>
                <h5 className='font-DanaMedium text-sm md:text-xl text-zinc-700 dark:text-white line-clamp-2'>
                قهوه ترک بن مانو مقدار 250 گرم
                خط دوم اسم طولانی
                </h5>
                <div className='flex gap-x-2 md:gap-x-2.5 mt-1.5 md:mt-2.5'>
                    <div className='text-teal-600 dark:text-emerald-500'>
                        <span className='font-DanaDemiBold text-base md:text-xl'>154,000 </span>
                        <span className='text-xs md:text-sm tracking-tighter'>تومان</span>
                    </div>
                    <div className='text-gray-400 redLine'>
                        <span className='text-xs md:text-xl'>175,000 </span>
                        <span className='hidden xl:inline text-sm tracking-tighter'>تومان</span>
                    </div>
                </div>

                <div className='mt-2.5 flex items-center justify-between'>
                    <div className='flex items-center gap-x-2.5 md:gap-x-3'>
                        <span className='flex-center w-[26px] h-[26px] md:w-9 md:h-9 rounded-full transition-all cursor-pointer
                        text-gray-400 hover:text-white bg-gray-100 hover:bg-teal-600 dark:bg-zinc-800 dark:hover:bg-emerald-500 '>
                            <svg className='w-4 h-4 md:w-[22px] md:h-[22px]'>
                                <ShoppingCartIcon/>
                            </svg>
                        </span>
                        <span className='block rounded-full transition-all cursor-pointer
                        text-gray-400 hover:text-teal-600 dark:hover:text-emerald-500'>
                            <svg className='w-4 h-4 md:w-6 md:h-6'>
                                <ArrowsRightLeftIcon/>
                            </svg>
                        </span>
                    </div>
                    <div className='flex text-yellow-400'>
                        <svg className='w-4 h-4 md:w-6 md:h-6 text-gray-300 dark:text-gray-400'>
                            <StarIcon/>
                        </svg>
                        <svg className='w-4 h-4 md:w-6 md:h-6'>
                            <StarIcon/>
                        </svg>
                        <svg className='w-4 h-4 md:w-6 md:h-6'>
                            <StarIcon/>
                        </svg>
                        <svg className='w-4 h-4 md:w-6 md:h-6'>
                            <StarIcon/>
                        </svg>
                        <svg className='w-4 h-4 md:w-6 md:h-6'>
                            <StarIcon/>
                        </svg>
                    </div>
                </div>
            </div>
            <div className='p-2 md:p-5'>
                <div className='relative mb-2 md:mb-5'>
                    <img src={product5} alt='product' className='w-32 mx-auto md:w-auto'/>
                    <span className='absolute top-1.5 right-1.5 block md:text-base/[34px] text-xs/[24px] h-5 md:h-[30px] font-DanaDemiBold 
                     text-white dark:text-zinc-700 px-2.5 md:px-3.5 rounded-full bg-orange-300'>12%</span>
                </div>
                <h5 className='font-DanaMedium text-sm md:text-xl text-zinc-700 dark:text-white line-clamp-2'>
                قهوه ترک بن مانو مقدار 250 گرم
                خط دوم اسم طولانی
                </h5>
                <div className='flex gap-x-2 md:gap-x-2.5 mt-1.5 md:mt-2.5'>
                    <div className='text-teal-600 dark:text-emerald-500'>
                        <span className='font-DanaDemiBold text-base md:text-xl'>154,000 </span>
                        <span className='text-xs md:text-sm tracking-tighter'>تومان</span>
                    </div>
                    <div className='text-gray-400 redLine'>
                        <span className='text-xs md:text-xl'>175,000 </span>
                        <span className='hidden xl:inline text-sm tracking-tighter'>تومان</span>
                    </div>
                </div>

                <div className='mt-2.5 flex items-center justify-between'>
                    <div className='flex items-center gap-x-2.5 md:gap-x-3'>
                        <span className='flex-center w-[26px] h-[26px] md:w-9 md:h-9 rounded-full transition-all cursor-pointer
                        text-gray-400 hover:text-white bg-gray-100 hover:bg-teal-600 dark:bg-zinc-800 dark:hover:bg-emerald-500 '>
                            <svg className='w-4 h-4 md:w-[22px] md:h-[22px]'>
                                <ShoppingCartIcon/>
                            </svg>
                        </span>
                        <span className='block rounded-full transition-all cursor-pointer
                        text-gray-400 hover:text-teal-600 dark:hover:text-emerald-500'>
                            <svg className='w-4 h-4 md:w-6 md:h-6'>
                                <ArrowsRightLeftIcon/>
                            </svg>
                        </span>
                    </div>
                    <div className='flex text-yellow-400'>
                        <svg className='w-4 h-4 md:w-6 md:h-6 text-gray-300 dark:text-gray-400'>
                            <StarIcon/>
                        </svg>
                        <svg className='w-4 h-4 md:w-6 md:h-6'>
                            <StarIcon/>
                        </svg>
                        <svg className='w-4 h-4 md:w-6 md:h-6'>
                            <StarIcon/>
                        </svg>
                        <svg className='w-4 h-4 md:w-6 md:h-6'>
                            <StarIcon/>
                        </svg>
                        <svg className='w-4 h-4 md:w-6 md:h-6'>
                            <StarIcon/>
                        </svg>
                    </div>
                </div>
            </div>
            <div className='p-2 md:p-5'>
                <div className='relative mb-2 md:mb-5'>
                    <img src={product6} alt='product' className='w-32 mx-auto md:w-auto'/>
                    <span className='absolute top-1.5 right-1.5 block md:text-base/[34px] text-xs/[24px] h-5 md:h-[30px] font-DanaDemiBold 
                     text-white dark:text-zinc-700 px-2.5 md:px-3.5 rounded-full bg-orange-300'>12%</span>
                </div>
                <h5 className='font-DanaMedium text-sm md:text-xl text-zinc-700 dark:text-white line-clamp-2'>
                قهوه ترک بن مانو مقدار 250 گرم
                خط دوم اسم طولانی
                </h5>
                <div className='flex gap-x-2 md:gap-x-2.5 mt-1.5 md:mt-2.5'>
                    <div className='text-teal-600 dark:text-emerald-500'>
                        <span className='font-DanaDemiBold text-base md:text-xl'>154,000 </span>
                        <span className='text-xs md:text-sm tracking-tighter'>تومان</span>
                    </div>
                    <div className='text-gray-400 redLine'>
                        <span className='text-xs md:text-xl'>175,000 </span>
                        <span className='hidden xl:inline text-sm tracking-tighter'>تومان</span>
                    </div>
                </div>

                <div className='mt-2.5 flex items-center justify-between'>
                    <div className='flex items-center gap-x-2.5 md:gap-x-3'>
                        <span className='flex-center w-[26px] h-[26px] md:w-9 md:h-9 rounded-full transition-all cursor-pointer
                        text-gray-400 hover:text-white bg-gray-100 hover:bg-teal-600 dark:bg-zinc-800 dark:hover:bg-emerald-500 '>
                            <svg className='w-4 h-4 md:w-[22px] md:h-[22px]'>
                                <ShoppingCartIcon/>
                            </svg>
                        </span>
                        <span className='block rounded-full transition-all cursor-pointer
                        text-gray-400 hover:text-teal-600 dark:hover:text-emerald-500'>
                            <svg className='w-4 h-4 md:w-6 md:h-6'>
                                <ArrowsRightLeftIcon/>
                            </svg>
                        </span>
                    </div>
                    <div className='flex text-yellow-400'>
                        <svg className='w-4 h-4 md:w-6 md:h-6 text-gray-300 dark:text-gray-400'>
                            <StarIcon/>
                        </svg>
                        <svg className='w-4 h-4 md:w-6 md:h-6'>
                            <StarIcon/>
                        </svg>
                        <svg className='w-4 h-4 md:w-6 md:h-6'>
                            <StarIcon/>
                        </svg>
                        <svg className='w-4 h-4 md:w-6 md:h-6'>
                            <StarIcon/>
                        </svg>
                        <svg className='w-4 h-4 md:w-6 md:h-6'>
                            <StarIcon/>
                        </svg>
                    </div>
                </div>
            </div>
            <div className='p-2 md:p-5'>
                <div className='relative mb-2 md:mb-5'>
                    <img src={product7} alt='product' className='w-32 mx-auto md:w-auto'/>
                    <span className='absolute top-1.5 right-1.5 block md:text-base/[34px] text-xs/[24px] h-5 md:h-[30px] font-DanaDemiBold 
                     text-white dark:text-zinc-700 px-2.5 md:px-3.5 rounded-full bg-orange-300'>12%</span>
                </div>
                <h5 className='font-DanaMedium text-sm md:text-xl text-zinc-700 dark:text-white line-clamp-2'>
                قهوه ترک بن مانو مقدار 250 گرم
                خط دوم اسم طولانی
                </h5>
                <div className='flex gap-x-2 md:gap-x-2.5 mt-1.5 md:mt-2.5'>
                    <div className='text-teal-600 dark:text-emerald-500'>
                        <span className='font-DanaDemiBold text-base md:text-xl'>154,000 </span>
                        <span className='text-xs md:text-sm tracking-tighter'>تومان</span>
                    </div>
                    <div className='text-gray-400 redLine'>
                        <span className='text-xs md:text-xl'>175,000 </span>
                        <span className='hidden xl:inline text-sm tracking-tighter'>تومان</span>
                    </div>
                </div>

                <div className='mt-2.5 flex items-center justify-between'>
                    <div className='flex items-center gap-x-2.5 md:gap-x-3'>
                        <span className='flex-center w-[26px] h-[26px] md:w-9 md:h-9 rounded-full transition-all cursor-pointer
                        text-gray-400 hover:text-white bg-gray-100 hover:bg-teal-600 dark:bg-zinc-800 dark:hover:bg-emerald-500 '>
                            <svg className='w-4 h-4 md:w-[22px] md:h-[22px]'>
                                <ShoppingCartIcon/>
                            </svg>
                        </span>
                        <span className='block rounded-full transition-all cursor-pointer
                        text-gray-400 hover:text-teal-600 dark:hover:text-emerald-500'>
                            <svg className='w-4 h-4 md:w-6 md:h-6'>
                                <ArrowsRightLeftIcon/>
                            </svg>
                        </span>
                    </div>
                    <div className='flex text-yellow-400'>
                        <svg className='w-4 h-4 md:w-6 md:h-6 text-gray-300 dark:text-gray-400'>
                            <StarIcon/>
                        </svg>
                        <svg className='w-4 h-4 md:w-6 md:h-6'>
                            <StarIcon/>
                        </svg>
                        <svg className='w-4 h-4 md:w-6 md:h-6'>
                            <StarIcon/>
                        </svg>
                        <svg className='w-4 h-4 md:w-6 md:h-6'>
                            <StarIcon/>
                        </svg>
                        <svg className='w-4 h-4 md:w-6 md:h-6'>
                            <StarIcon/>
                        </svg>
                    </div>
                </div>
            </div>
            <div className='p-2 md:p-5'>
                <div className='relative mb-2 md:mb-5'>
                    <img src={product8} alt='product' className='w-32 mx-auto md:w-auto'/>
                    <span className='absolute top-1.5 right-1.5 block md:text-base/[34px] text-xs/[24px] h-5 md:h-[30px] font-DanaDemiBold 
                     text-white dark:text-zinc-700 px-2.5 md:px-3.5 rounded-full bg-orange-300'>12%</span>
                </div>
                <h5 className='font-DanaMedium text-sm md:text-xl text-zinc-700 dark:text-white line-clamp-2'>
                قهوه ترک بن مانو مقدار 250 گرم
                خط دوم اسم طولانی
                </h5>
                <div className='flex gap-x-2 md:gap-x-2.5 mt-1.5 md:mt-2.5'>
                    <div className='text-teal-600 dark:text-emerald-500'>
                        <span className='font-DanaDemiBold text-base md:text-xl'>154,000 </span>
                        <span className='text-xs md:text-sm tracking-tighter'>تومان</span>
                    </div>
                    <div className='text-gray-400 redLine'>
                        <span className='text-xs md:text-xl'>175,000 </span>
                        <span className='hidden xl:inline text-sm tracking-tighter'>تومان</span>
                    </div>
                </div>

                <div className='mt-2.5 flex items-center justify-between'>
                    <div className='flex items-center gap-x-2.5 md:gap-x-3'>
                        <span className='flex-center w-[26px] h-[26px] md:w-9 md:h-9 rounded-full transition-all cursor-pointer
                        text-gray-400 hover:text-white bg-gray-100 hover:bg-teal-600 dark:bg-zinc-800 dark:hover:bg-emerald-500 '>
                            <svg className='w-4 h-4 md:w-[22px] md:h-[22px]'>
                                <ShoppingCartIcon/>
                            </svg>
                        </span>
                        <span className='block rounded-full transition-all cursor-pointer
                        text-gray-400 hover:text-teal-600 dark:hover:text-emerald-500'>
                            <svg className='w-4 h-4 md:w-6 md:h-6'>
                                <ArrowsRightLeftIcon/>
                            </svg>
                        </span>
                    </div>
                    <div className='flex text-yellow-400'>
                        <svg className='w-4 h-4 md:w-6 md:h-6 text-gray-300 dark:text-gray-400'>
                            <StarIcon/>
                        </svg>
                        <svg className='w-4 h-4 md:w-6 md:h-6'>
                            <StarIcon/>
                        </svg>
                        <svg className='w-4 h-4 md:w-6 md:h-6'>
                            <StarIcon/>
                        </svg>
                        <svg className='w-4 h-4 md:w-6 md:h-6'>
                            <StarIcon/>
                        </svg>
                        <svg className='w-4 h-4 md:w-6 md:h-6'>
                            <StarIcon/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductBody;