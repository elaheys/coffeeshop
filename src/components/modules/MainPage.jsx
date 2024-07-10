import React from 'react';
//icon
import curve from "../../assets/curve.svg"
import { ChevronDownIcon } from '@heroicons/react/24/outline';
//component
import ProductPage from './ProductPage';


const MainPage = () => {
    return (
        <main>
            <section id='footer' className="relative h-[200px] xs:h-auto xs:aspect-[2/1] bg-home-mobile md:bg-home-desktop bg-no-repeat bg-cover bg-[center_top]">
                <div className='container overflow-y-hidden relative h-full md:min-h-screen flex items-center justify-end'>
                    <div className='text-white md:mt-20'>
                        <h2 className='font-MorabbaBold text-2xl md:text-5xl/[62px] mb-0.5 md:mb-1'>قهوه عربیکا تانزانیا</h2>
                        <span className='font-MorabbaLight text-xl md:text-5xl/[64px]'>یک فنجان بالانس !</span>
                        <span className='block w-[100px] h-px md:h-0.5 bg-orange-300 my-3 md:my-6'></span>
                        <p className='max-w-[201px] md:max-w-[460px] text-xs md:text-2xl'>قطعا نام آشنای عربیکا را شنیده اید، 
                            عربیکا یکی از گونه های قهوه است که در نواحی مختلف کمربند قهوه کشت میشود.</p>
                    </div>

                 {/* circle */}
                 <div className='absolute bottom-0 left-0 right-0 mx-auto hidden md:flex translate-y-2/4 circle circle--lg '>
                    <div className='circle circle--md'>
                        <div className='circle circle--sm'></div>
                    </div>
                </div> 

                </div>

                {/* curve */}
                <svg className='absolute -bottom-0.5 left-0 right-0 mx-auto hidden md:inline-block text-gray-100 dark:text-zinc-800 ' width="100" height="22" viewBox="0 0 100 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M50 0C69 0 81 22 100 22L0 22C18.75 22 31 0 50 0Z" fill="currentColor"/>
                </svg>
                

                {/* arrow */}
                <div  className='hidden md:flex items-center justify-center translate-y-2/4 absolute bottom-0 left-0 right-0 mx-auto w-[30px] h-[30px] border-2 border-orange-300 rounded-full'>
                <a href='#header'>
                     <svg className='w-4 h-4 text-zinc-700 dark:text-white'>
                        <ChevronDownIcon/>
                    </svg>
                </a>
                   
                </div>      

            </section>
            {/* product */}
            <section>
                <ProductPage/>
            </section>
        </main>
    );
};

export default MainPage;