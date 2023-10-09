import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';



const Contact = () => {

  const form = useRef();
   
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_qyrrvcb', 'template_o86wkwj', form.current, 'uRV8H-PcdAkWqCkak')
    .then(
      (result) => {
        alert("Your message sent successfully!")
        console.log("SUCCESS!", result.status, result.text);
        // Clears form/inputs after button is Selected
        form.current.reset();
      }, (error) => {
        console.log("FAILED...", error);
      });}
    
  return (
    <>
    <div className="container border mt-0 bg-gray-100 m-4 md:ml-24 md:mr-24 md:mb-24 w-auto">
  <form id="contact-form" ref={form} onSubmit={sendEmail}>
    <div className="flex flex-col md:flex-row">
      <div className="me relative md:right-4 w-full md:w-[45%] py-8 md:py-52 bg-gray-600 text-white">
        <h1 className="text-4xl">Leave a Message</h1>
      </div>
      <div className="te border-l py-3 px-3 relative md:right-4 w-full md:w-auto">
        <h1 className="text-4xl">Contact Form</h1>
        <div>
  <div className="form-group">
    <h5 className="text-lg" htmlFor="name">
      Name
    </h5>
    <input
      type="text"
      id="name"
      className="form-control pr-4 pl-3 py-2 rounded sm:pr-64"
      placeholder="Enter name"
      required
    />
  </div>
  <div className="form-group">
    <h5 className="text-lg">Email</h5>
    <input
      type="email"
      id="email"
      className="form-control pr-4 pl-3 py-2 rounded sm:pr-64"
      placeholder="Enter email"
      required
    />
  </div>
  <div className="form-group">
    <h5 className="text-lg" htmlFor="message">
      Message
    </h5>
    <textarea
      className="form-control pr-4 pl-3 py-2 rounded sm:pr-64"
      placeholder="Leave Your Message"
      id="message"
      rows="3"
      required
    ></textarea>
  </div>
  <button className="bu bg-gray-950 hover:bg-gray-800 active:bg-gray-900 duration-300 text-white py-2 px-6 rounded-md">
    Submit
  </button>
</div>
      </div>
    </div>
  </form>
</div>
    
       
       <hr className="her" />

       <div className="container border mt-0 bg-gray-100 m-4 md:ml-24 md:mr-24 md:mb-24 w-auto">
  <div className="flex flex-col md:flex-row justify-between">
    <div className="me relative md:w-[45%] py-8 md:py-52 bg-gray-600 text-white">
      <h1 className="text-4xl">Find Our Location</h1>
    </div>
    <div className="map border-l  relative md:w-auto">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d441642.68175900547!2d31.927282726562492!3d30.14188120000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14581510f9e1addd%3A0xada78945ec0d9b63!2sBrand%20A%26M!5e0!3m2!1sar!2seg!4v1691141828375!5m2!1sar!2seg"
        width="600px"
        height="450"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
</div>
    </>
  )
}

export default Contact