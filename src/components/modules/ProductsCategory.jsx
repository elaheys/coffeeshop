import React from 'react';

//images
import cat1 from '../../assets/categories/category1.png'
import cat2 from '../../assets/categories/category2.png'
import cat3 from '../../assets/categories/category3.png'
import cat4 from '../../assets/categories/category4.png'
import cat5 from '../../assets/categories/category5.png'

const ProductsCategory = () => {
    return (
        <div className='flex items-center justify-center gap-y-6gap-x[29px] md:gap-[65px] flex-wrap mb-10 md:mb-20'>
            <div className='w-25 md:w-50 text-center'>
                <a href='#'>
                    <img src={cat1} alt='cat' loading='lazy'/>
                </a>
                <span className='inline-block font-DanaDemiBold text-sm text-zinc-700 dark:text-white
                    mt-1.5 md:mt-2.5'>قهوه دمی و اسپرسو</span>
            </div>
            <div className='w-25 md:w-50 text-center'>
                <a href='#'>
                    <img src={cat2} alt='cat' loading='lazy'/>
                </a>
                <span className='inline-block font-DanaDemiBold text-sm text-zinc-700 dark:text-white
                    mt-1.5 md:mt-2.5'>لوازم جانبی و تجهیزات</span>
            </div>
            <div className='w-25 md:w-50 text-center'>
                <a href='#'>
                    <img src={cat3} alt='cat' loading='lazy'/>
                </a>
                <span className='inline-block font-DanaDemiBold text-sm text-zinc-700 dark:text-white
                    mt-1.5 md:mt-2.5'>اسپرسو ساز</span>
            </div>
            <div className='w-25 md:w-50 text-center'>
                <a href='#'>
                    <img src={cat4} alt='cat' loading='lazy'/>
                </a>
                <span className='inline-block font-DanaDemiBold text-sm text-zinc-700 dark:text-white
                    mt-1.5 md:mt-2.5'>پک تستر قهوه</span>
            </div>
            <div className='w-25 md:w-50 text-center'>
                <a href='#'>
                    <img src={cat5} alt='cat' loading='lazy'/>
                </a>
                <span className='inline-block font-DanaDemiBold text-sm text-zinc-700 dark:text-white
                    mt-1.5 md:mt-2.5'>قهوه ترک</span>
            </div>
        </div>
    );
};

export default ProductsCategory;