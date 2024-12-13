import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'
export let ProductContext=createContext()
export default function MainContext({ children }) {
    let [product, setProduct] = useState([])
    let [category, setCategory] = useState([])
    let [brand, setBrand] = useState([])
    let [loader,setLoader]=useState(false)
    let [totalPage,setTotalPage]=useState(0)
    
    let [categoryFilterState, setCategoryFilterState] = useState('')
    let [brandFilterState, setBrandFilterState]= useState('')
    let [sortFilterState,setSortFilterState]=useState(null)
    let [rateFilterState,setRateFilterState]=useState(null)
    let [pagenumberFilterState,setPagenumberFilterState]=useState(1)

    let getProduct = () => {
      setLoader(true)
        axios.get(`https://wscubetech.co/ecommerce-api/products.php`, {
            params: {
                page: pagenumberFilterState,
                limit: 12,
                categories:categoryFilterState,
                brands: brandFilterState,
                price_from: '',
                price_to: '',
                discount_from: '',
                discount_to: '',
                rating: rateFilterState,
                sorting: sortFilterState,
            }
        })
            .then((res) => res.data)
            .then((finalRes) => {
              setTotalPage(finalRes.toal_pages)
                setProduct(finalRes.data)
                setLoader(false)
                window.scrollTo({
                  top:0,
                  behavior:"smooth"
                })
            })
    }

    let getCategory=() => {
        axios.get(`https://wscubetech.co/ecommerce-api/categories.php`)
        .then((res)=>res.data)
        .then((finalres)=>{
            setCategory(finalres.data)
        })
      }
    
    let getBrand=() => {
        axios.get(`https://wscubetech.co/ecommerce-api/brands.php`)
        .then((res)=>res.data)
        .then((finalres)=>{
            setBrand(finalres.data)
        })
      }

    useEffect(() => {
        getCategory();
        getBrand()
      },[])  

    useEffect(() => {
        getProduct();
    }, [categoryFilterState,brandFilterState,sortFilterState,rateFilterState,pagenumberFilterState])

    let obj={loader,product,category,brand,categoryFilterState,setCategoryFilterState,brandFilterState,setBrandFilterState,setSortFilterState,totalPage,setPagenumberFilterState,pagenumberFilterState,setRateFilterState}
  return (
    <ProductContext.Provider value={obj}>
        {children}
    </ProductContext.Provider>
  )
}
