import React from 'react'

const Footer = () => {

  // Component to make text styling more dynamic
  const FooterText = ({ children }) => {
    return <p className="md:mb-7 text-xs">{children}</p>;
  };
  

  return (
    <div className='py-10 px-0 mt-16 bg-neutral-200 '>
      <div className='md:flex w-4/5 m-auto justify-between md:gap-y-7  md:gap-x-7  '
      >
        <div className='md:w-1/5 md:w-3/10 lg:w-2/5 '>
            <h4 className='mb-3 sm:mb-7 font-bold text-secondary'>Fashionly</h4>
            <FooterText>
                Uspendisse vel mi ac augue commodo ultricies a sed risus. Vestibulum eu elit pulvinar, convallis ligula id, lobortis nibh. Praesent varius id nulla a hendrerit. 
            </FooterText>
        </div>
        <div className='mt-7 md:mt-0'>
            <h4 className='font-bold mb-3 md:mb-7'>About Us</h4>
            <FooterText >Our Stores</FooterText>
            <FooterText >Careers</FooterText>
            <FooterText >Terms & Conditions</FooterText>
            <FooterText>Privacy Policy</FooterText>
        </div>
        <div className='mt-7 md:mt-0 '>
            <h4 className='font-bold mb-3 md:mb-7'>Customer Care</h4>
            <FooterText>Track Your Orders</FooterText>
            <FooterText>Return & refunds</FooterText>
            <FooterText>Help Center</FooterText>
            <FooterText>Corporate & Bulk Purchasing</FooterText>
        </div>
        <div className='md:w-1/5 :w-3/10 lg:w-2/5 mt-7 md:mt-0'>
            <h4 className='font-bold mb-3 md:mb-7'>Contact us</h4>
            <FooterText>1922 Clark Avenue, Toronto, ON T3T9V8</FooterText>
            <FooterText>Email: fashionlyrandom@gmail.com</FooterText>
            <FooterText>Phone: (999) 888-7766</FooterText>
        </div>
      </div>
    </div>
  )
}

export default Footer
