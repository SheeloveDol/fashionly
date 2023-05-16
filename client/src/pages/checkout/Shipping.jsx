import React from 'react'
import AddressForm from './AddressForm';

const Shipping = ({values, errors, touched, handleBlur, handleChange, setFieldValue}) => {
  return (
    <div className='my-8 mx-auto'>
      {/* BILLING FORM */}
      <p className='mb-4 text-sm font-bold'>Billing Information</p>
      <AddressForm 
        type="billingAddress"
        values={values.billingAddress}
        errors={errors}
        touched={touched}
        handleBlur={handleBlur}
        handleChange={handleChange}
      />

      <div className='my-5'>
        <label className="label cursor-pointer justify-normal">
        
            <input 
                type="checkbox" 
                className='checkbox rounded-none'
                values={values.shippingAddress.isSameAddress}
                checked
                onChange={() => setFieldValue("shippingAddress.isSameAddress", !values.shippingAddress.isSameAddress)}
            />
            <span className='pl-2'>Same for Shipping Address</span>
        </label>
      </div>

      {/* SHIPPING FORM */}
      {!values.shippingAddress.isSameAddress && (
        <div>
            <p className='mb-4 text-sm font-bold'>Shipping Information</p>
            <AddressForm 
                type="shippingAddress"
                values={values.shippingAddress}
                errors={errors}
                touched={touched}
                handleBlur={handleBlur}
                handleChange={handleChange}
            />
        </div>
      )}
    </div>
  )
}

export default Shipping
