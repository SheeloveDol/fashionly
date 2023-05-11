import React from 'react'
import { getIn } from 'formik';
import TextField from '@mui/material/TextField';
// import { values } from 'lodash';

const AddressForm = ({
    type, 
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
}) => {
    // Functions to help with readibility
    const formattedName = (field) => `${type}.${field}`;

    const formattedError = (field) => Boolean(
        getIn(touched, formattedName(field)) && getIn(errors, formattedName(field))
    );
    
    const formattedHelper = (field) => getIn(touched, formattedName(field)) && getIn(errors, formattedName(field));

  return (
    <div className='grid grid-cols-forms gap-3.5'>
        <TextField
        fullWidth
        type="text"
        label="First Name"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.firstName}
        name={formattedName("firstName")}
        error={formattedError("firstName")}
        helperText={formattedHelper("firstName")}
        className='col-span-4 sm:col-span-2'
        />
        <TextField
        fullWidth
        type="text"
        label="Last Name"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.lastName}
        name={formattedName("lastName")}
        error={formattedError("lastName")}
        helperText={formattedHelper("lastName")}
        className='col-span-4 sm:col-span-2'
      />
      <TextField
        fullWidth
        type="text"
        label="Country"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.country}
        name={formattedName("country")}
        error={formattedError("country")}
        helperText={formattedHelper("country")}
        className='col-span-4'
      />
      <TextField
        fullWidth
        type="text"
        label="Street Address"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.street1}
        name={formattedName("street1")}
        error={formattedError("street1")}
        helperText={formattedHelper("street1")}
        className='col-span-4 sm:col-span-2'
      />
      <TextField
        fullWidth
        type="text"
        label="Street Address 2 (optional)"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.street2}
        name={formattedName("street2")}
        error={formattedError("street2")}
        helperText={formattedHelper("street2")}
        className='col-span-4 sm:col-span-2'
      />
      <TextField
        fullWidth
        type="text"
        label="City"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.city}
        name={formattedName("city")}
        error={formattedError("city")}
        helperText={formattedHelper("city")}
        className='col-span-4 sm:col-span-2'
      />
      <TextField
        fullWidth
        type="text"
        label="State"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.state}
        name={formattedName("state")}
        error={formattedError("state")}
        helperText={formattedHelper("state")}
        className='col-span-2 sm:col-span-1'
      />
      <TextField
        fullWidth
        type="text"
        label="Zip Code"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.zipCode}
        name={formattedName("zipCode")}
        error={formattedError("zipCode")}
        helperText={formattedHelper("zipCode")}
        className='col-span-2 sm:col-span-1'
      />
    </div>
  )
}

export default AddressForm


/* 
// className='input w-full input-bordered rounded-none col-span-4 sm:col-span-2'
        // type="text"
        // placeholder={formattedHelper("firstName")}
        // label="First Name"
        // onBlur={handleBlur}
        // onChange={handleChange}
        // value={values.firstName}
        // name={formattedName("fisrtName")}
        // error={formattedError("firstName")}
        // helperText={formattedHelper("firstName")}
*/