import React, { useEffect, useState } from 'react'
import CartItem from '../components/CartItem'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify';
import StripeCheckout from 'react-stripe-checkout';

const Cart = () => {
  const productData = useSelector((state) => state.am.productData);
  const userInfo = useSelector((state)=> state.am.userInfo)
  const [totalAmt, setTotalAmt] = useState("");
  const [payNow, setPayNow] = useState(false)

  useEffect(()=>{
    let price =0;
    productData.map((item)=>{
      price += item.price * item.quantity;
      return price
    })
    setTotalAmt(price.toFixed(2));
  },[productData])
  const handleCheckout =()=>{
    if(userInfo){
      setPayNow(true)
    }else{
      toast.error("Please sign in to Checkout")
    }
  }
  
  return (
     <>
      <img 
      className='w-full h-60 object-cover'
      src='https://wallpapershome.com/images/wallpapers/ios-11-1920x1080-4k-5k-beach-ocean-13655.jpg' 
      alt='img'
      />
      <div className='flex flex-col md:flex-row'>
      <CartItem />
  <div className="w-full md:w-1/3 bg-[#fafafa] py-6 px-4">
    <div className="flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6">
      <h2 className="text-2xl font-medium">cart totals</h2>
      <p className="flex items-center gap-4 text-base">
        Subtotal{" "}
        <span className="font-titleFont font-bold text-lg">$ {totalAmt}</span>
      </p>
      <p className="flex items-start gap-4 text-base">
        Shipping{" "}
        <span>
          lorem ipusm dolor sit amet consectuer, adipising elit. Explicapo,
          ques fugit inventore,
        </span>
      </p>
    </div>
    <p className="font-titleFont font-semibold flex justify-between mt-6">
      Total <span className="text-xl font-bold">$ {totalAmt}</span>
    </p>
    <button
      onClick={handleCheckout}
      className="text-base bg-black text-white w-full py-3 mt-6 hover:bg-gray-800 active:bg-gray-900 duration-300"
    >
      proceed to checkout
    </button>
    {payNow && (
      <div className="w-full mt-6 flex items-center justify-center">
        <StripeCheckout
          stripeKey="pk_test_51NrmvCAzBYmRalGlRM55DIeDVhrKJC5gUaqbqplII20XSTrutOWFntxrcjZS0dsfskRRFkn75QXy10PvucEbUpAj00mRECTAA3"
          name="a&m Online Shopping"
          amount={totalAmt * 100}
          label="Pay to a&m"
          description={`Your Payment amount is $${totalAmt}`}
          email={userInfo.email}
        />
      </div>
    )}
  </div>
      </div>
      

     </>
     
      
    
  )
}

export default Cart