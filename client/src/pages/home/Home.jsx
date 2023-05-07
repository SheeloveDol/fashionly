import React from 'react'
import MainCarousel from "./MainCarousel";
import ShoppingList from "./ShoppingList"


const Home = () => {
  return (
    <div className='w-full absolute top-[60px] bg-white'>
      <MainCarousel  />
      <ShoppingList />
    </div>
  )
}

export default Home
