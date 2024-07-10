import React, { useRef, useState } from 'react';
//icons
import { ArrowRightEndOnRectangleIcon, Bars3Icon, BriefcaseIcon, ChatBubbleLeftEllipsisIcon, 
    ChevronDownIcon, DocumentTextIcon, HomeIcon, MoonIcon, PhoneArrowUpRightIcon, 
    ShoppingBagIcon, ShoppingCartIcon, SunIcon, XMarkIcon } from '@heroicons/react/24/outline';
//logos
import Coffeelogo from "../../assets/svgs/logo.svg"
import LogoType from "../../assets/svgs/logo-type.svg"

//component
import ShoppingBag from './ShoppingBag';

const MobileHeader = ({darkModeHandler,dark,isOpen,setIsOpen}) => {

    const submenuRef = useRef(null)
    const [ shopIsOpen,setShopIsOpen ] = useState(false)

    const openSubMenuHandler = () => {
        submenuRef.current.classList.toggle('submenu');
        submenuRef.current.previousElementSibling.classList.toggle('text-orange-300')
    }

    return (
        <div className='flex md:hidden items-center justify-between bg-white dark:bg-zinc-700 px-4 h-16'>
            <div onClick={() => setIsOpen(true)}>
                <svg className='w-6 h-6 text-zinc-700 dark:text-white'>
                    <Bars3Icon/>
                </svg>
            </div>

            <div className={` ${isOpen ? "right-0 " : "-right-64"} fixed z-20 top-0 bottom-0 w-64 pt-3 px-4 bg-white dark:bg-zinc-700 overflow-y-auto transition-all`}>
                <div className='flex items-center justify-between pb-5 mb-6 border-b border-b-gray-100 dark:border-b-white/10'>
                <div className='flex gap-x-3.5'>
                    <img src={Coffeelogo} alt='logo' className='w-[41px] h-10' />
                
                    <img src={LogoType} alt='logo' className='w-[100px] h-10'/>
                </div>
                <div onClick={() => setIsOpen(false)}>
                    <svg className='w-6 h-6 text-zinc-600 dark:text-white'>
                        <XMarkIcon/>
                    </svg>
                </div>
                
                </div>

                <ul className='child:pr-2.5 text-zinc-600 dark:text-white space-y-6'>
                    <li className='flex items-center bg-orange-200/20 text-orange-300 pr-0 h-10 rounded-md'>
                        <a href='#' className='flex items-center gap-x-2'>
                        <svg className='w-5 h-5'>
                            <HomeIcon/>
                        </svg>
                            صفحه اصلی
                        </a>
                    </li>
                    <li >
                        <div className='flex items-center justify-between transition-all'>
                        <a href='#' className='flex items-center gap-x-2'>
                        <svg className='w-5 h-5 '>
                            <ShoppingBagIcon/>
                        </svg>
                             فروشگاه
                        </a>
                        <span onClick={openSubMenuHandler}>
                        <svg className='w-4 h-4 '>
                            <ChevronDownIcon/>
                        </svg>
                        </span> 
                        </div>
                        
                        <div ref={submenuRef} className='hidden flex-col gap-y-3 pr-7 mt-3 text-sm text-zinc-600 dark:text-white child-hover:text-orange-300 child-hover:transition-colors'>
                            <a href='#'>قهوه ویژه</a>
                            <a href='#'>ویژه در سطح جهانی</a>
                            <a href='#'>قهوه درجه یک</a>
                            <a href='#'>ترکیبات تجاری</a>
                            <a href='#'>کپسول قهوه</a>
                            <a href='#'>قهوه زینو برزیلی</a>
                        </div>
                    </li>
                    <li>
                        
                        <a href='#' className='flex items-center gap-x-2'>
                        <svg className='w-5 h-5 text-zinc-600 dark:text-white'>
                            <ChatBubbleLeftEllipsisIcon/>
                        </svg>
                            دیکشنری
                        </a>
                    </li>
                    <li>
                        <a href='#' className='flex items-center gap-x-2'>
                        <svg className='w-5 h-5 text-zinc-600 dark:text-white'>
                            <BriefcaseIcon/>
                        </svg>
                             درباره ما
                        </a>
                    </li>
                    <li>
                        <a href='#' className='flex items-center gap-x-2'>
                        <svg className='w-5 h-5 text-zinc-600 dark:text-white'>
                            <DocumentTextIcon/>
                        </svg>
                            بلاگ
                        </a>
                    </li>
                    <li>
                        <a href='#' className='flex items-center gap-x-2'>
                        <svg className='w-5 h-5 text-zinc-600 dark:text-white'>
                           <PhoneArrowUpRightIcon/>
                        </svg>
                            تماس با ما
                        </a>
                    </li>
                </ul>


                <div className='flex flex-col items-start gap-y-6 pt-8 px-2.5 my-8 border-t text-orange-300 border-t-gray-100 dark:border-t-white/10'>
                    <a href='#' className='inline-flex items-center gap-x-2 '>
                        <svg className='w-5 h-5'>
                            <ArrowRightEndOnRectangleIcon/>
                        </svg>
                        ورود  |  ثبت‌نام
                    </a>
                    <span onClick={darkModeHandler} className='flex items-center gap-x-2'>
                        <svg className='w-5 h-5 '>
                            {dark && <MoonIcon/>}
                            {!dark && <SunIcon/>}
                        </svg>
                    {dark ? "تم تیره" :  "تم روشن"}
                    </span>
                    <a href='#' className='inline-flex items-center gap-x-2'>
                        <svg className='w-5 h-5'>
                            <ShoppingCartIcon/>
                        </svg>
                    سبد خرید
                    </a>
                </div>
            </div>

            <div className='w-[100px] h-10'>
                <img src={LogoType} alt='logo' />
            </div>

            <div>
                <svg onClick={() => setShopIsOpen(true)} className='w-6 h-6 text-zinc-700 dark:text-white'>
                   <ShoppingCartIcon/>
                </svg>

                <div>
                    <ShoppingBag shopIsOpen={shopIsOpen} setShopIsOpen={setShopIsOpen}/>
                </div>
            </div>


            {/* siah shodane body ba baz shodan menu */}
            <div onClick={() => setIsOpen(false)} className={`${isOpen ? "" : "hidden"} md:hidden w-full h-full fixed inset-0 bg-black/40 z-10 transition-all`}></div>
        </div>
    );
};

export default MobileHeader;