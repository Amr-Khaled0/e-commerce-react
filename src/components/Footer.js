import React from 'react'
import  Logolight  from '../assets/logolight.png'
import PaymentLogo from '../assets/PaymentLogo.png'
import { FaFacebookF, FaYoutube,FaTwitter,FaInstagram,FaGithub,FaHome } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { BsPersonFill, BsPaypal } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="bg-black text-[#949494] py-10 px-8 md:px-24 font-titleFont">
  <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
    {/* start logoicon */}
    <div className="flex flex-col gap-2">
      <img className="w-32" src={Logolight} alt="" />
      <p className="text-white text-sm tracking-wide">© a&mShop.com </p>
      <img className="w-56" src={PaymentLogo} alt="" />
      <div className="flex gap-5 text-lg text-gray-400">
        <FaGithub className="hover:text-white duration-300 cursor-pointer" />
        <FaYoutube className="hover:text-white duration-300 cursor-pointer" />
        <FaFacebookF className="hover:text-white duration-300 cursor-pointer" />
        <FaTwitter className="hover:text-white duration-300 cursor-pointer" />
        <FaInstagram className="hover:text-white duration-300 cursor-pointer" />
      </div>
    </div>
    {/* end logoicon */}
    {/* start loacateus */}
    <div className="py-10">
      <h2 className="text-2xl font-semibold text-white mb-4 py-0">locate us</h2>
      <div className="flex flex-col gap-2">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d441642.68175900547!2d31.927282726562492!3d30.14188120000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14581510f9e1addd%3A0xada78945ec0d9b63!2sBrand%20A%26M!5e0!3m2!1sar!2seg!4v1691141828375!5m2!1sar!2seg"
          width="100%"
          height="120"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
    {/* end loacateus */}
    {/* start profile */}
    <div className="py-10">
      <h2 className="text-2xl font-semibold text-white mb-4 py-0">profile</h2>
      <div className="flex flex-col gap-2 text-base">
        <Link to="/Login">
          <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
            <span><BsPersonFill /></span>
            my account
          </p>
        </Link>
        <Link to="/Cart">
          <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
            <span><BsPaypal /></span>
            checkout
          </p>
        </Link>
        <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
          <span><FaHome /></span>
          order tracking
        </p>
        <Link to="/Contact"> <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
          <span><MdLocationOn /></span>
          help & support
        </p></Link>
      </div>
    </div>
    {/* end profile */}
    {/* start sub */}
    <div className="flex flex-col justify-center">
      <input
        className="bg-transparent border px-4 py-2 text-sm"
        placeholder="e-mail"
        type="text"
      />
      <button className="text-sm border text-white border-t-0 hover:bg-gray-900 active:bg-white active:text-black">
        Subscribe
      </button>
    </div>
    {/* end sub */}
  </div>
</div>
  )
}

export default Footer