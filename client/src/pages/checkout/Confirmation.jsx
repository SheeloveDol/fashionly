import React from 'react'
import { Alert, AlertTitle } from '@mui/material';


const Confirmation = () => {
  return (
    <div className='py-24 relative top-[60px] mx-auto w-4/5 h-100vh border-2 border-red-500 '>
      <Alert severity='success'>
        <AlertTitle>Success</AlertTitle>
        Your order was successfully processed - {" "}
        <strong>Congratulations! please check your email for tracking number</strong>
      </Alert>
    </div>
  )
}

export default Confirmation
