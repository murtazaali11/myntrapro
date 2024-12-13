import React, { useContext, useEffect, useState } from 'react'
import { ProductContext } from '../../context/MainContext'
export default function SideBarFilter() {
  let { brand, brandFilterState, setBrandFilterState } = useContext(ProductContext)
  let { category, categoryFilterState, setCategoryFilterState } = useContext(ProductContext)
  let { setRateFilterState } = useContext(ProductContext)
  let [allCheckCat, setAllCheckCat] = useState([])
  let [allcheckBrad, setAllcheckBrad] = useState([])

  let getChecksValue = (event) => {
    if (event.target.checked) {
      setAllcheckBrad([...allcheckBrad, event.target.value])
    }
    else {
      let filtersData = allcheckBrad.filter((items) => items != event.target.value)
      setAllcheckBrad(filtersData)
    }
  }

  let getCheckValue = (event) => {
    if (event.target.checked) {
      setAllCheckCat([...allCheckCat, event.target.value])
    }
    else {
      let filterData = allCheckCat.filter((items) => items != event.target.value)
      setAllCheckCat(filterData)
    }
  }

  useEffect(() => {
    setCategoryFilterState(allCheckCat.join(","))
  }, [allCheckCat])

  useEffect(() => {
    setBrandFilterState(allcheckBrad.join(","))
  }, [allcheckBrad])

  return (
    <div classNameName='border-2 p-3'>
      <div>
        <div className="mt-4 border-t border-gray-200 p-3 border-2 mb-4 h-[300px] overflow-y-scroll">
          <h3 className='font-medium text-gray-900'>Categories</h3>
          <ul role="list" className="px-2 py-3 font-medium text-gray-900">
            {category.length >= 1 ?
              category.map((categoryItems, index) => {
                return (
                  <li key={index} className="block px-2 py-3">
                    <input onChange={getCheckValue} type="checkbox" value={categoryItems.slug} className='mr-3' />
                    {categoryItems.name}

                  </li>
                )
              })
              :
              <li>No Category Found</li>

            }


          </ul>
        </div>
      </div>
      <div>
        <div className="mt-4 border-t border-gray-200 p-3 border-2 mb-4 h-[300px] overflow-y-scroll">
          <h3 className='font-medium text-gray-900'>Brand</h3>
          <ul role="list" className="px-2 py-3 font-medium text-gray-900">
            {brand.length >= 1 ?
              brand.map((brandItems, index) => {
                return (
                  <li key={index} className="block px-2 py-3">
                    <input onChange={getChecksValue} type="checkbox" value={brandItems.slug} className='mr-3' />
                    {brandItems.name}

                  </li>
                )
              })
              :
              <li>No brand Found</li>

            }


          </ul>
        </div>
      </div>
      <div>
      <div className="mt-4 border-t border-gray-200 p-3 border-2 mb-1 h-[200px] overflow-y-scroll">
          <h3 className='font-medium text-gray-900'>PRICE</h3>
          <ul role="list" className="px-1 py-1 font-medium text-gray-900">

            <li className="block px-1 py-1">
              <label>
                <input type="Radio" className='mr-3' />
                Rs. 10 to Rs. 250
              </label>
            </li>
            <li className="block px-1 py-1">
              <label>
                <input type="Radio" className='mr-3' />
                Rs. 250 to Rs. 500
              </label>
            </li>
            <li  className="block px-1 py-1">
              <label>
                <input type="Radio" className='mr-3' />
                Rs. 500 to Rs. 1000
              </label>
            </li>
            <li  className="block px-1 py-1">
              <label>
                <input type="Radio" className='mr-3' />
                Rs. 1000 to Above
              </label>

            </li>







          </ul>
        </div>
      </div>
      <div>
      <div className="mt-4 border-t border-gray-200 p-3 border-2 mb-1 h-[200px] overflow-y-scroll">
          <h3 className='font-medium text-gray-900'>DISCOUNT RANGE</h3>
          <ul role="list" className="px-1 py-1 font-medium text-gray-900">

            <li className="block px-1 py-1">
              <label>
                <input type="Radio" className='mr-3' />
                5% and above
              </label>
            </li>
            <li className="block px-1 py-1">
              <label>
                <input type="Radio" className='mr-3' />
                10% and above
              </label>
            </li>
            <li  className="block px-1 py-1">
              <label>
                <input type="Radio" className='mr-3' />
                15% and above
              </label>
            </li>
            <li  className="block px-1 py-1">
              <label>
                <input type="Radio" className='mr-3' />
                20% and above
              </label>

            </li>







          </ul>
        </div>
      </div>
      <div>
        <div className="mt-4 border-t border-gray-200 p-3 border-2 mb-1 h-[200px] overflow-y-scroll">
          <h3 className='font-medium text-gray-900'>Rating</h3>
          <ul role="list" className="px-1 py-1 font-medium text-gray-900">
            
            <li className="block px-1 py-1">
              <label>
                <input type="Radio" className='mr-3' />
                4★ & above
              </label>
            </li>
            <li className="block px-1 py-1">
              <label>
                <input type="Radio" className='mr-3' />
                3★ & above
              </label>
            </li>
            <li  className="block px-1 py-1">
              <label>
                <input type="Radio" className='mr-3' />
                2★ & above
              </label>
            </li>
            <li  className="block px-1 py-1">
              <label>
                <input type="Radio" className='mr-3' />
                1★ & above
              </label>

            </li>







          </ul>
        </div>
      </div>
    </div>
  )
}