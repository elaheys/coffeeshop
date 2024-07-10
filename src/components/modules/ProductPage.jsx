import React from 'react';
//icon
import { ChevronLeftIcon } from '@heroicons/react/24/outline';
//components
import ProductBody from './ProductBody';
import CategoryBanner from './CategoryBanner';
import ProductsCategory from './ProductsCategory';
import BestSelling from './BestSelling';
import CoffeeClubPage from './CoffeeClubPage';
import Blogs from './Blogs';
import Contacts from './Contacts';
import Services from './Services';

const ProductPage = () => {
    return (
        <div className='products'>
            {/* product head */}
            <div className='container flex items-end justify-between pt-8 md:pt-24 lg:pt-48 mb-5 md:mb-12'>
            <div>
                <h3 className='text-xl md:text-5xl font-MorabbaMedium text-zinc-700 dark:text-white'>جدیدترین محصولات</h3>
                <span className='inline-block text-lg md:text-3xl font-MorabbaLight mt-0.5 md:mt-1.5 text-zinc-700 dark:text-white'>فرآوری شده از دانه قهوه</span>
            </div>
            <a href='#' className='flex items-center text-base md:text-xl tracking-tighter md:gap-x-1 h-10 pr-3 pl-1 rounded-md
            font-MorabbaLight text-orange-300 md:hover:bg-orange-300/20 transition-colors'>
                <span className='hidden md:inline-block'>مشاهده همه محصولات</span>
                <span className='inline-block md:hidden'> مشاهده همه</span>
            <svg className='w-3 h-3'>
                <ChevronLeftIcon/>
            </svg>
            </a>

            </div>
            {/* product body */}
            <div className='container'>
                <ProductBody/>
            </div>
            {/* category banner */}
            <div className='container'>
                <CategoryBanner/>
            </div>

            <div className='container'>
                <ProductsCategory/>
            </div>

            {/* best selling */}
            <div className='container'>
                <BestSelling/>
            </div>

            {/* coffee club */}
            <div className='container'>
                <CoffeeClubPage/>
            </div>
            {/* blugs */}
            <div className='container'>
                <Blogs/>
            </div>
            {/* contacts */}
            <div className='container'>
                <Contacts/>
            </div>

            {/* services */}
            <div className='container'>
                <Services/>
            </div>
        </div>
    );
};

export default ProductPage;