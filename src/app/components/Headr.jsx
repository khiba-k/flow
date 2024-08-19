import React from 'react'
import "../styles/Header.css"

const header = () => {
  return (
    <header className='flex flex-row px-12 border bottomShadow header-tag '> 
      <div className='h-16 w-[52%] justify-center flex flex-col  left-row'>
        <h1 className='recycler-h font-bold'>Flow Food Recycler</h1>
        <ul className='flex flex-row'>
          <li className='mr-6 text-xs font-medium'>90 day free trial</li>
          <li className='mr-6 list-disc text-xs font-medium'>Free Delivery & Returns</li>
          <li className='list-disc text-xs font-medium'>1 year warranty</li>
        </ul>
      </div>
      <div className='h-16 w-[48%]  right-row'>
        <ul className='flex flex-row items-center justify-between h-full'>
          <li className='font-bold options'>What goes in</li>
          <li className='font-bold options'>Food grounds</li>
          <li className='font-bold hide-options2 options'>Pathways</li>
          <li className='font-bold hide-options options'>Tech specs</li>
          <li className='font-bold hide-options options'>Customers</li>
          <li className='font-bold hide-options options'>FAQ</li>
          <li className='border border-black px-5 py-4 rounded-full buy-button'>Buy Now</li>
          <li className='more-options'>Menu</li>
        </ul>
      </div>

    </header>
  )
}

export default header
