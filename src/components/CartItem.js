import { useDispatch, useSelector } from 'react-redux'
import React, {  useState } from 'react'
import { MdOutlineClose } from "react-icons/md";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { decreamentQuantity, deleteItem, increamentQuantity, resetCart } from '../redux/amSlice';
import { toast , ToastContainer} from 'react-toastify';
import { Link } from 'react-router-dom';



const CartItem = () => {
    const dispatch = useDispatch()
    let [baseQty, setBaseQty] = useState(1);
    const productData =useSelector((state) => state.am.productData )
    return (
    <>
     <div className="w-full md:w-2/3 pr-10">
  <div className="w-full">
    <h2 className="font-titleFont text-2xl pl-5 pt-5">Shopping cart</h2>
  </div>
  <div>
    {productData.map((item) => (
      <div
        key={item._id}
        className="flex flex-col md:flex-row items-center justify-between gap-6 mt-6"
      >
        <div className="flex items-center gap-2 pl-5">
          <MdOutlineClose
            onClick={() =>
              dispatch(deleteItem(item._id)) &
              toast.error(`${item.title} is removed`)
            }
            className="text-xl text-gray-600 hover:text-red-600 cursor-pointer duration-300"
          />
          <img
            className="w-32 h-32"
            src={item.image}
            alt="proimg"
          />
        </div>
        <div className="md:w-52">
          <h2>{item.title}</h2>
        </div>
        <p className="md:w-10">${item.price}</p>
        <div className="md:w-52 flex items-center justify-between text-gray-500 gap-4 border p-3">
          <p className="text-sm">Quantity</p>
          <div className="flex items-center gap-4 text-sm font-semibold">
            <span
              onClick={() =>
                dispatch(
                  decreamentQuantity({
                    _id: item._id,
                    title: item.title,
                    image: item.image,
                    price: item.price,
                    quantity: 1,
                    discription: item.description,
                  })
                )
              }
              className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
            >
              -
            </span>
            {item.quantity}
            <span
              onClick={() =>
                dispatch(
                  increamentQuantity({
                    _id: item._id,
                    title: item.title,
                    image: item.image,
                    price: item.price,
                    quantity: 1,
                    discription: item.description,
                  })
                )
              }
              className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
            >
              +
            </span>
          </div>
        </div>
        <p className="md:w-14">${item.quantity * item.price}</p>
      </div>
    ))}
  </div>
  <button
    onClick={() => dispatch(resetCart()) & toast.error("Your Cart is Empty!")}
    className="bg-red-500 text-white mt-8 ml-7 py-1 px-6 hover:bg-red-800 duration-300 active:bg-red-900"
  >
    Reset Cart
  </button>
  <Link to="/">
    <button className="mt-8 ml-7 flex items-center gap-1 pb-6 text-gray-400 hover:text-black duration-300">
      <span>
        <HiOutlineArrowLeft />
      </span>
      go shopping
    </button>
  </Link>
  <ToastContainer
    position="top-left"
    autoClose={3000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="dark"
  />
</div>
    </>
  )
}

export default CartItem