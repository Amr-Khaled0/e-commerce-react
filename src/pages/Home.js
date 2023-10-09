import React, { useEffect, useState } from 'react'
import Banners from '../components/Banners'
import Products from '../components/Products'
import { useLoaderData } from 'react-router-dom'

const Home = () => {
 
  const data = useLoaderData()
  const [products,setProducts] = useState([])
  useEffect(()=>{
    setProducts(data.data)
    
  },[data]);
    return (
    <div>
      <Banners />
      <Products products={products}  />
    </div>
  )
}

export default Home