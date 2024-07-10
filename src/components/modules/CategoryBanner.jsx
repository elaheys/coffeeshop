import React from 'react';

const CategoryBanner = () => {
    return (
        <div className='mt-8 mb-10 md:my-20'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 text-white'>
                <a href='#' className='category-banner1 flex flex-col justify-center pr-7 md:pr-12 rounded-2xl h-[142px] md:h-[248px]'>
                    <h5 className='font-DanaDemiBold text-2xl/6 md:text-4xl/6 mb-4 md:mb-7'>انواع قهوه</h5>
                    <p className='md:font-DanaMedium md:text-xl/6'>ترکیبی و تک خاستگاه</p>
                </a>
                <a href='#' className='category-banner2 flex flex-col justify-center pr-7 md:pr-12 rounded-2xl h-[142px] md:h-[248px]'>
                    <h5 className='font-DanaDemiBold text-2xl/6 md:text-4xl/6 mb-4 md:mb-7'>پودر های فوری</h5>
                    <p className='md:font-DanaMedium md:text-xl/6'>نسکافه ، هات چاکلت ، ماسالا</p>
                </a>
            </div>
        </div>
    );
};

export default CategoryBanner;