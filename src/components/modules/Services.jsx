import React from 'react';
//svg
import coffee from "../../assets/svgs/services/coffee.svg"
import coffeedark from "../../assets/svgs/services/coffee-dark.svg"
import delivery from "../../assets/svgs/services/express-delivery.svg"
import deliverydark from "../../assets/svgs/services/express-delivery-dark.svg"
import pitcher from "../../assets/svgs/services/pitcher.svg"
import pitcherdark from "../../assets/svgs/services/pitcher-dark.svg"
import support from "../../assets/svgs/services/support.svg"
import supportdark from "../../assets/svgs/services/support-dark.svg"

const Services = () => {
    return (
        <div className='services mb-12 md:mb-36'>
            <div className='flex items-center justify-between gap-y-11 flex-wrap child:w-1/2 lg:child:w-auto child:text-center lg:child:text-right text-zinc-700 dark:text-white'>

                <div className='flex items-center flex-col sm:flex-row gap-x-4 gap-y-5'>
                    
                    <img src={support} alt='support' className='dark:hidden'/> 
                    <img src={supportdark} alt='support' className='hidden dark:inline-block'/> 
                    <div>
                        <h5 className='font-DanaDemiBold text-sm md:text-lg/6 mb-1 md:mb-3.5'>پشتیبانی شبانه روزی</h5>
                        <span className='text-xs md:text-sm/6'>7 روز هفته ، 24 ساعته</span>
                    </div>
                </div>

                <div className='flex items-center flex-col sm:flex-row gap-x-4 gap-y-5'>
                    
                    <img src={delivery} alt='delivery' className='dark:hidden'/> 
                    <img src={deliverydark} alt='delivery' className='hidden dark:inline-block'/> 
                    <div>
                        <h5 className='font-DanaDemiBold text-sm md:text-lg/6 mb-1 md:mb-3.5'>امکان تحویل اکسپرس</h5>
                        <span className='text-xs md:text-sm/6'>ارسال بسته با سرعت باد</span>
                    </div>
                </div>

                <div className='flex items-center flex-col sm:flex-row gap-x-4 gap-y-5'>
                    
                    <img src={coffee} alt='coffee' className='dark:hidden'/> 
                    <img src={coffeedark} alt='coffee' className='hidden dark:inline-block'/> 
                    <div>
                        <h5 className='font-DanaDemiBold text-sm md:text-lg/6 mb-1 md:mb-3.5'>رست تخصصی</h5>
                        <span className='text-xs md:text-sm/6'>تازه برشته شده و با کیفیت</span>
                    </div>
                </div>

                <div className='flex items-center flex-col sm:flex-row gap-x-4 gap-y-5'>
                    
                    <img src={pitcher} alt='pitcher' className='dark:hidden'/> 
                    <img src={pitcherdark} alt='pitcher' className='hidden dark:inline-block'/> 
                    <div>
                        <h5 className='font-DanaDemiBold text-sm md:text-lg/6 mb-1 md:mb-3.5'>اکسسوری قهوه</h5>
                        <span className='text-xs md:text-sm/6'>وسایل و ادوات دم آوری</span>
                    </div>
                </div>

            </div>
            
        </div>
    );
};

export default Services;