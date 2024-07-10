import React from 'react';
//image
import contact from "../../assets/contact.png"
//icon
import { PhoneIcon } from '@heroicons/react/24/outline';

const Contacts = () => {
    return (
        <div className='mb-16 md:mb-28'>
            <div className='flex flex-col lg:flex-row items-center lg:items-start gap-y-8 lg:gap-x-5'>
                <img src={contact} alt='contact' className='shrink-0 w-[296px]'/>
                <div className='text-zinc-700 dark:text-white'>
                    <h3 className='font-MorabbaMedium text-2xl md:text-5xl mb-0.5 md:mb-1.5'>یکی از بهترین قهوه ها !</h3>
                    <span className='font-MorabbaLight text-lg md:text-3xl/[48px]'>کیفیت قهوه را از ما بخواهید ...</span>
                    <div className='flex gap-x-2.5 my-5 md:my-6'>
                        <span className='dot'></span>
                        <span className='dot'></span>
                        <span className='dot'></span>
                    </div>
                    <p className='text-lg md:text-2xl'>فضای گرم و دنج ما را احساس کنید، جایی که همه می توانند قهوه معطری پیدا کنند
                         و دسرهای خوشمزه ما را که کاملاً با قهوه داغ همراه شده است، امتحان کنند. فضای داخلی شیک و کارکنان خوش برخورد ما روز شما را می سازد!</p>
                    <a href='#' className='inline-flex items-center justify-center px-6 mt-5 md:mt-6 gap-x-2 text-base md:text-xl h-[50px] md:h-[60px] border md:border-2 border-orange-300 rounded-full tracking-tightest text-orange-300'>
                        <svg className='w-5 md:w-8 h-5 md:h-8'>
                            <PhoneIcon/>
                        </svg>
                    ثبت سفارش تلفنی  
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Contacts;