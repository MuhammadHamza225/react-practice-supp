import React from 'react'
import PaymentInfoForm from './PaymentInfoForm'
import SummarySection from './SummarySection'
import CartItemsList from './CartItemsList'

const CheckoutPage = () => {
  return (
    <div className='flex flex-col md:flex-row justify-between p-6 gap-8 '>
      <div className='flex-1'>
        <h2 className='text-2xl font-semibold mb-4"'>Shopping Cart.</h2>
        <CartItemsList/>
      </div>
      <div className='w-full md:w-1/3 bg-gray-50 p-6 rounded-lg shadow-md'>
      <PaymentInfoForm/>
      <SummarySection/>
      </div>
    </div>
  )
}

export default CheckoutPage
