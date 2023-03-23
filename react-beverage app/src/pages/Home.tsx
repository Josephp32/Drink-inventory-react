import React from 'react'
import Background from '../assets/images/drink1.jpg'

function Home() {
  return (
    <div 
      style={{ backgroundImage: `url(${ Background })`}} 
      className='flex flex-row justify-center mx-auto bg-cover bg-fixed'
      >
        <div className='flex place-items-center h-screen'>
          <h3 className='p-5 bg-black bg-opacity-75 text-white rounded'>Welcome to your Beverage Inventory! To view, add, update your beverages, click the Drinks Tab!</h3>
        </div>
    </div>
  )
}

export default Home