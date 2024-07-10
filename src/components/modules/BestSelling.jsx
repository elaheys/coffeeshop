import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';

//icon
import { ArrowsRightLeftIcon, ChevronLeftIcon, ChevronRightIcon, ShoppingCartIcon, StarIcon } from '@heroicons/react/24/outline';
//imges
import product1 from "../../assets/products/p1.png";
import product2 from "../../assets/products/p2.png";
import product3 from "../../assets/products/p3.png";
import product4 from "../../assets/products/p4.png";

const BestSelling = () => {

    const swiperRef = useRef();

    return (
        <div>
            <div className='container flex items-end justify-between pt-8 md:pt-24 lg:pt-48 mb-5 md:mb-12'>
            <div>
                <h3 className='text-xl md:text-5xl font-MorabbaMedium text-zinc-700 dark:text-white'>محصولات پر فروش</h3>
                <span className='inline-block text-lg md:text-3xl font-MorabbaLight mt-0.5 md:mt-1.5 text-zinc-700 dark:text-white'>پیشنهاد قهوه خور ها ...</span>
            </div>
            <div className='flex gap-x-3 md:gap-x-[18px]'>
                <div onClick={() => swiperRef.current?.slideNext()} className='swiper-custom-next '>
                    <svg className='w-5 h-5 md:w-[26px] md:h-[26px]'>
                        <ChevronRightIcon/>
                    </svg>
                </div>
                <div onClick={() => swiperRef.current?.slidePrev()} className='swiper-custom-prev '>
                    <svg className='w-5 h-5 md:w-[26px] md:h-[26px]'>
                        <ChevronLeftIcon/>
                    </svg>
                </div>
            </div>
            </div>

            <div className='container mb-9 md:mb-20'>
            <Swiper
            navigation={{
                nextEl: '.swiper-custom-next',
                prevEl: '.swiper-custom-prev',
              }}
            slidesPerView={2}
            spaceBetween={14}
            onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
            }}
            breakpoints={{
                640: {
                    slidesPerView: 3,
                    spaceBetween:14
                  },
                  768:{
                    slidesPerView: 3,
                    spaceBetween:20
                  },
                  1024: {
                    slidesPerView: 4,
                    spaceBetween:20
                  },
            }}
            >
            <SwiperSlide>
            <div className='p-2 md:p-5 rounded-2xl bg-white dark:bg-zinc-700 shadow-normal'>
                <div className='relative mb-2 md:mb-5'>
                    <img src={product1} alt='product' className='w-32  mx-auto md:w-auto ' loading='lazy'/>
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
            </SwiperSlide>
            <SwiperSlide>
            <div className='p-2 md:p-5 rounded-2xl bg-white dark:bg-zinc-700 shadow-normal'>
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
            </SwiperSlide>
            <SwiperSlide>
            <div className='p-2 md:p-5 rounded-2xl bg-white dark:bg-zinc-700 shadow-normal'>
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
            </SwiperSlide>
            <SwiperSlide>
            <div className='p-2 md:p-5 rounded-2xl bg-white dark:bg-zinc-700 shadow-normal'>
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
            </SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            </Swiper>
            </div>
        </div>
    );
};

export default BestSelling;