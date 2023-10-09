import React, { useState } from 'react';
import { logodark } from '../assets'
import cartImg from '../assets/cartImg.png'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }
  
  const scrollDown = () => {
    window.scrollBy({
      top: 990,
      behavior: 'smooth',
    });
  };

  
  const productData = useSelector((state) => state.am.productData);
  const UserInfo =useSelector ((state)=> state.am.userInfo);
  return (
    <>
     <div className="w-full bg-white border-b-[1px] border-b-gray-800 font-titleFont sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        <Link to="/">
          <div>
            <img className="w-20" src={logodark} alt="logo" />
          </div>
        </Link>

        <div className="flex items-center gap-8 ">
          {/* Hamburger Menu Icon for Mobile */}
          <div className="md:hidden cursor-pointer " onClick={toggleMenu}>
            <svg
              className="w-6 h-6 text-black "
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </div>

          
          {showMenu ? (
            // Dropdown Menu for Mobile with Animation
            <div
              className="md:hidden absolute top-full left-0 w-full bg-white py-2 transition-opacity duration-300 opacity-100"
              style={{
                opacity: 1,
                visibility: 'visible',
              }}
            >
                         <ul className="flex flex-col items-center gap-4">
                        <Link to="/">
                  <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                    Home
                  </li>
                </Link>
                <a >
          <li onClick={scrollDown} className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
            Shop
          </li>
        </a>
        <Link to="/About">
          <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
            About
          </li>
        </Link>
        <Link to="/Contact">
          <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
            Help
          </li>
        </Link>
        
             
                {/* Add other menu items here */}
              </ul>
            </div>
          ) : (
            // Desktop Menu
            <ul className="hidden md:flex items-center gap-8">
              <Link to="/">
                <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                  Home
                </li>
              </Link>
              <a >
          <li onClick={scrollDown} className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
            Shop
          </li>
        </a>
        <Link to="/About">
          <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
            About
          </li>
        </Link>
        <Link to="/Contact">
          <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
            Help
          </li>
        </Link>
        <Link to="/cart">
        <div className="relative">
          <img className="w-8 h-9" src={cartImg} alt="cartImg" />
          <span className="absolute w-6 top-4 left-1 text-sm flex items-center justify-center font-semibold">
            {productData.length}
          </span>
        </div>
      </Link>
        <Link to="/Login">
        <img
          className="w-8 h-8 rounded-full"
          src={
            UserInfo
              ? UserInfo.image
              : "https://images.unsplash.com/photo-1530510004231-720218d936da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBob3RvfGVufDB8fDB8fHww&w=1000&q=80"
          }
          alt="ul"
        />
      </Link>
      
              {/* Add other menu items here */}
            </ul>
            
          )}
       
      {UserInfo && (
        <Link to="/Login">
          <p className="hidden md:block text-base font-titleFont font-semibold border-[2px] border-gray-800 p-1 underline-offset-2">
            {UserInfo.name}
          </p>
        </Link>
      )}
      
          {/* ...Your other menu items... */}
        </div>
      </div>
    </div>
  

    </>
   
  )
}

export default Header 