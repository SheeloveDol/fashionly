import React from 'react'
import AddressForm from './AddressForm';

const Shipping = ({values, errors, touched, handleBlur, handleChange, setFieldValue}) => {
  return (
    <div className='my-8 mx-auto'>
      {/* BILLING FORM */}
      <p className='mb-4 text-sm font-bold'>Billing Information</p>
      <AddressForm 
        type="billingAddress"
        value={values.billingAddress}
        errors={errors}
        touched={touched}
        handleBlur={handleBlur}
        handleChange={handleChange}
      />

      <div className='mb-5'>
        <input 
            type="checkbox" 
            className='checkbox'
            checked
            onChange={() => setFieldValue("shippingAddress.isSameAddress", !values.shippingAddress.isSameAddress)}
        />
      </div>

      {/* SHIPPING FORM */}
      {!values.shippingAddress.isSameAddress && (
        <div>
            <p className='mb-4 text-sm font-bold'>Shipping Information</p>
            <AddressForm 
                type="shippingAddress"
                value={values.shippingAddress}
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
