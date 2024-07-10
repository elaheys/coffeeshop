import React, { useEffect, useState } from 'react';
//icons
import  { ShoppingCartIcon,MoonIcon,SunIcon,
    ArrowRightEndOnRectangleIcon,ChevronLeftIcon}  from '@heroicons/react/24/outline'
//logos
import logo from "../../assets/images/app-logo.png"
import product1 from "../../assets/products/p1.png"
import MobileHeader from '../modules/MobileHeader';
import ShoppingBag from '../modules/ShoppingBag';
import MainPage from '../modules/MainPage';

const Header = () => {

    const [dark, setDark] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const darkModeHandler = () => {
        setDark(!dark);
        document.documentElement.classList.toggle("dark");

        if (localStorage.theme === "dark"){
            document.documentElement.classList.remove("dark");
            localStorage.theme = "light";
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme" , "dark");
        }
    }

    //on first load the dark or light mode set from ls
    useEffect(() => {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
            setDark(!dark);
          } else {
            document.documentElement.classList.remove('dark')
            setDark(dark);
          }
    },[])

    return (
        <>
        <header className='fixed top-9 right-0 z-30
        left-0 hidden md:flex items-center w-[98%] lg:w-[90%] h-24 rounded-3xl px-5 lg:px-10 py-5 mx-auto bg-black/50 backdrop-blur-[6px]'>
           <div className='flex items-center w-full justify-between'>
             {/* Logo & Menu */}
             <nav className='flex items-center gap-x-6 lg:gap-x-9 h-14'>
                {/* logo */}
                <div className='shrink-0'>
                    <img src={logo} alt='Golden Coffee'/>
                </div>
                {/* menu */}
                <ul className='flex gap-x-4 lg:gap-x-5 lx:gap-x-9 h-full text-xl text-gray-300 tracking-tightest child:leading-[56px]'>
                    <li className='font-DanaMedium text-orange-200'>
                        <a href='#'>صفحه اصلی</a>
                    </li>
                    <li className='relative group '>
                        <a href='#' className='group-hover:text-orange-300 transition-colors '>فروشگاه</a>
                        {/* submenu */}
                        <div className='absolute top-full opacity-0 invisible group-hover:visible 
                        group-hover:opacity-100 transition-all text-base space-y-4 w-52 p-6 bg-white dark:bg-zinc-700 text-zinc-700 dark:text-white
                        border-t-[3px] border-orange-300 rounded-2xl flex-col child:inline-block tracking-normal 
                        shadow-normal child-hover:text-orange-300 child:transition-colors delay-75'>
                            <a href='#'>قهوه ویژه</a>
                            <a href='#'>ویژه در سطح جهانی</a>
                            <a href='#'>قهوه درجه یک</a>
                            <a href='#'>ترکیبات تجاری</a>
                            <a href='#'>کپسول قهوه</a>
                            <a href='#'>قهوه زینو برزیلی</a>
                        </div>
                    </li>
                    <li>
                        <a href='#'>دیکشنری</a>
                    </li>
                    <li>
                        <a href='#'>بلاگ</a>
                    </li>
                    <li>
                        <a href='#'>درباره ما</a>
                    </li>
                    <li>
                        <a href='#'>تماس با ما</a>
                    </li>
                </ul>
            </nav>

            {/* Card & Theme toggle,Login Link */}
            <div className='flex text-xl text-orange-200 gap-x-5 xl:gap-x-10'>
                {/* cart icon & theme switch */}
                <div className='flex gap-x-4 lg:gap-x-5 items-center'>
                    <div className='relative group '>
                        <div className='py-3 '>
                            <svg className='w-8 h-8 cursor-pointer'>
                                <ShoppingCartIcon/>
                            </svg>
                        </div>
                        {/* cart box */}
                        <div className='absolute opacity-0 invisible top-full left-0 w-[400px] p-5 group-hover:visible 
                        group-hover:opacity-100 transition-all text-base bg-white dark:bg-zinc-700 
                        border-t-[3px] border-orange-300 rounded-2xl tracking-normal 
                        shadow-normal delay-75'>
                           <div className='flex items-center justify-between font-DanaMedium text-xs tracking-tighter'>
                            <span className='text-gray-300'>1 مورد</span>
                            
                            <a href='#' className='flex items-center text-orange-300'>
                                مشاهده سبد خرید 
                                <svg className='w-4 h-4'>
                                    <ChevronLeftIcon/>
                                </svg>
                            </a>

                           </div>

                           <div className='flex gap-x-2.5 mt-5 pb-6 border-b border-b-gray-300 dark:border-b-white/10'>
                            <img src={product1} alt='product' className='w-[120px] h-[120px]'/>
                            <div className='flex flex-col justify-between'>
                                <h4 className='font-DanaMedium text-zinc-700 dark:text-white text-base line-clamp-2'>قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی</h4>
                                <div>
                                    <span className='text-teal-600 dark:text-emerald-500 text-xs tracking-tighter'>14.500 تومان تخفیف</span>
                                    <div className='text-zinc-700 dark:text-white font-DanaDemiBold'>
                                        175,000 
                                    <span className='font-Dana text-sm'>تومان</span>
                                    </div>
                                </div>
                            </div>
                           </div>

                           <div className='flex justify-between mt-5'>
                            <div>
                                <span className='font-DanaMedium text-gray-300 text-xs tracking-tighter'>مبلغ قابل پرداخت</span>
                                <div className='text-zinc-700 dark:text-white font-DanaDemiBold text-xl'>
                                    350,000 
                                    <span className='font-Dana text-sm'>تومان</span>
                                </div>
                            </div>

                            <a href='#' className='flex items-center justify-center w-36 h-14 bg-teal-600 rounded-xl
                            hover:bg-teal-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 transition-all text-white 
                            tracking-tightest '>ثبت سفارش</a>
                           
                           </div>
                        </div>
                    </div>
                    {/* theme switch btn */}
                    <span onClick={darkModeHandler}>
                        <svg className='w-8 h-8 cursor-pointer'>
                            {!dark && <MoonIcon/>}
                            {dark && <SunIcon/>}
                        </svg>
                    </span>
                </div>
                {/* Divide Border */}
                <span className='block w-px h-14 bg-white/20'></span>
                {/* login link */}
                    <a href='#' className='flex items-center gap-x-2.5 tracking-tightest'>
                        <svg className='w-8 h-8'>
                            <ArrowRightEndOnRectangleIcon/>
                        </svg>
                        <span className='hidden xl:inline-block'>ورود | ثبت‌نام</span>
                    </a>
            </div>
           </div>
        </header>


        <div>
            <MobileHeader darkModeHandler={darkModeHandler} 
            setIsOpen={setIsOpen} isOpen={isOpen} dark={dark}/>
        </div>

        <div>
            <ShoppingBag setIsOpen={setIsOpen} isOpen={isOpen}/>
        </div>

        <div>
            <MainPage/>
        </div>

        </>
    );
};

export default Header;