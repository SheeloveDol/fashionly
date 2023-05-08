import React from 'react'
import MainCarousel from "./MainCarousel";
import ShoppingList from "./ShoppingList"
import Subscribe from './Subscribe';


const Home = () => {
  return (
    <div className='w-full absolute top-[60px] bg-white'>
      <MainCarousel  />
      <ShoppingList />
      <Subscribe />
    </div>
  )
}

export default Home
