import React from 'react'

const Footer = () => {

    //TODO: Make it easier to edit by creating components for pTags
  return (
    <div className='py-10 px-0 mt-16 bg-neutral-200 '>
      <div className='md:flex w-4/5 m-auto justify-between md:gap-y-7  md:gap-x-7  '
      >
        <div className='md:w-1/5 md:w-3/10 lg:w-2/5 '>
            <h4 className='mb-3 sm:mb-7 font-bold text-secondary-content'>Fashionly</h4>
            <div>
                Uspendisse vel mi ac augue commodo ultricies a sed risus. Vestibulum eu elit pulvinar, convallis ligula id, lobortis nibh. Praesent varius id nulla a hendrerit. 
            </div>
        </div>
        <div className='mt-7 md:mt-0'>
            <h4 className='font-bold mb-3 md:mb-7'>About Us</h4>
            <p className='md:mb-7'>Our Stores</p>
            <p className='md:mb-7'>Careers</p>
            <p className='md:mb-7'>Terms & Conditions</p>
            <p className='md:mb-7'>Privacy Policy</p>
        </div>
        <div className='mt-7 md:mt-0 '>
            <h4 className='font-bold mb-3 md:mb-7'>Customer Care</h4>
            <p className='md:mb-7'>Track Your Orders</p>
            <p className='md:mb-7'>Return & refunds</p>
            <p className='md:mb-7'>Help Center</p>
            <p className='md:mb-7'>Corporate & Bulk Purchasing</p>
        </div>
        <div className='md:w-1/5 :w-3/10 lg:w-2/5 mt-7 md:mt-0'>
            <h4 className='font-bold mb-3 md:mb-7'>Contact us</h4>
            <p className='md:mb-7'>1922 Clark Avenue, Toronto, ON T3T9V8</p>
            <p className='md:mb-7'>Email: fashionlyrandom@gmail.com</p>
            <p className='md:mb-7'>Phone: (999) 888-7766</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
