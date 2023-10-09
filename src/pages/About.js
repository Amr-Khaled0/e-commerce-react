import React from 'react'
import im1 from '../assets/im1.avif'
import im2 from '../assets/im2.avif'
import im3 from '../assets/im3.avif'


const About = () => {
  return (
    <>
    <div className="about-section font-bodyFont">
        <h1 className='text-4xl mb-3'>About Us Page</h1>
        <p>A website for selling iPhones, iPads, and MacBooks is an online platform that specializes in offering Apple products for sale. <br/>  The website typically features a wide range of Apple devices, including the latest models, along with detailed product descriptions, <br/>  photos, and customer reviews. Customers can also compare prices and features, as well as read about the latest Apple technology. <br/> The website may offer various payment and shipping options, as well as customer service support. Overall, a website for selling <br/>  Apple products  provides a convenient and reliable way for customers to purchase high-quality devices from the comfort of their own homes.</p>
      </div>
    
      <div className="n font-bodyFont">
        <h2 className="flex justify-center items-center text-3xl text-gray-800 mb-3 ">Our Team</h2>
        <div className="row">
          <div className="column">
            <div className="card">
              <img src={im2} alt="Jane" className="w-full" /> 
              <div className="container ">
                <h2 className='flex items-center justify-center text-3xl mt-14 text-gray-700'>Jane Doe</h2>
                <p className="title flex items-center justify-center mt-2">CEO & Founder</p>
                <p className='text-gray-700 mt-4 indent-3'>Some text that describes me lorem ipsum <p className='indent-[45%]'>lorem.</p></p>
                <p className='text-gray-700 mt-4 flex items-center justify-center'>jane@example.com</p>
                <p><button className="button text-base bg-black text-white w-full py-3 mt-6 hover:bg-gray-800 active:bg-gray-900 duration-300">Contact</button></p>
              </div>
            </div>
          </div>
        
          <div className="column">
            <div className="card">
              <img src={im1} alt="Mike" className="w-full" /> 
              <div className="container">
                <h2 className='flex items-center justify-center text-3xl mt-14 text-gray-700'>Mike Ross</h2>
                <p className="title flex items-center justify-center mt-2">Art Director</p>
                <p className='text-gray-700 mt-4 indent-3'>Some text that describes me lorem ipsum <p className='indent-[45%]'>lorem.</p></p>
                <p className='text-gray-700 mt-4 flex items-center justify-center'>mike@example.com</p>
                <p><button className="button text-base bg-black text-white w-full py-3 mt-6 hover:bg-gray-800 active:bg-gray-900 duration-300">Contact</button></p>
              </div>
            </div>
          </div>
          
          <div className="column">
            <div className="card">
              <img src={im3} alt="John" className="w-full" /> 
              <div className="container">
                <h2 className='flex items-center justify-center text-3xl mt-14 text-gray-700'>John Doe</h2>
                <p className="title flex items-center justify-center mt-2">Designer</p>
                <p className='text-gray-700 mt-4 indent-3'>Some text that describes me lorem ipsum <p className='indent-[45%]'>lorem.</p></p>
                <p className='text-gray-700 mt-4 flex items-center justify-center'>john@example.com</p>
                <p><button className="button text-base bg-black text-white w-full py-3 mt-6 hover:bg-gray-800 active:bg-gray-900 duration-300">Contact</button></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
    
  )
}

export default About