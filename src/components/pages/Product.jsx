import React, { useContext, useState } from 'react'
import SideBarFilter from '../productcomponent/SideBarFilter'
import ProductLayout from '../productcomponent/ProductLayout'
import { ProductContext } from '../../context/MainContext'

export default function Product() {
    let { setSortFilterState} = useContext(ProductContext)
    return (
        <>
            <section class="px-2 pb-3    border-b-1 border-bg-gray-300">
                <div class=" w-full p-5 ">
                    <div class="flex">
                        <p class="text-[14px]">Home / Clothing / </p>
                        <span class="font-bold text-[14px]">Men T-Shirts</span>
                    </div>
                    <p class="text-[16px] py-3"><span class="font-bold text-[14px]">Men T-Shirts</span>-157339 items</p>
                </div>
                <div class=" grid grid-cols-[20%_30%_auto] px-5 ">
                    <div class=""><span>FILTERS</span> <span>CLEAR ALL</span></div>
                    <div class="flex lg:gap-x-6  md:gap-x-2 gap-2 ">

                    </div>
                    <div class=" flex justify-end ">
                        <select onChange={(event)=>setSortFilterState(event.target.value)} name="cars" id="cars" class="lg:w- [40%] md:py-1 md:w-[30%] rounded-none px-2 border border-gray-500" fdprocessedid="ypnfe">
                            <option value="1">Name : A to Z</option>
                            <option value="2">Name : Z to A</option>
                            <option value="3">Price : Low to High</option>
                            <option value="4">Price : High to Low</option>
                            <option value="5">Discounted Price : Low to High</option>
                            <option value="6">Discounted Price : High to Low</option>
                            <option value="7">Rating : Low to High</option>
                            <option value="8">Rating : High to Low</option>
                        </select>
                    </div>
                </div>
            </section>
            <div className='grid grid-cols-[20%_auto] gap-8'>
                <SideBarFilter />
                <ProductLayout />

            </div>
            
        </>

    )
}
