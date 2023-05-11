import React from 'react'
import TextField  from '@mui/material/TextField'

const Payment = ({ values, touched, errors, handleBlur, handleChange}) => {
  return (
    <div className='my-8 mx-0 '>
        <div className='mb-4'>
            <p>Contact Info</p>
        </div>
        <TextField
        fullWidth
        type="text"
        label="Email"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.email}
        name="email"
        error={!!touched.email && !!errors.email}
        helperText={touched.email && errors.email}
        className='col-span-4 mb-4'
        />
        <TextField
        fullWidth
        type="text"
        label="Phone Number"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.phoneNumber}
        name="phoneNumber"
        error={!!touched.phoneNumber && !!errors.phoneNumber}
        helperText={touched.phoneNumber && errors.phoneNumber}
        className='col-span-4 mb-4'
        />
      
    </div>
  )
}

export default Payment
