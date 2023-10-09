import React, { useState, useEffect } from 'react';
import { Circles } from 'react-loader-spinner'
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
import Cart from "./pages/Cart";
import { productsData } from "./api/Api";
import Product from "./components/Product";
import Login from "./pages/Login";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ScrollToTopButton from './components/ScrollToTopButton';
import Chatbot from './components/Chatbot';

const Layout=()=>{
  return(
    
    <div>
      <Header />
      <ScrollRestoration />
      <Outlet />
      <Footer />
      <ScrollToTopButton />
      <Chatbot />
          </div>
  )
}
const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout />,
    children:[
      {
        path:"/",
        element:<Home />,
        loader:productsData,
      },
      {
        path:"/product/:id",
        element:<Product />
      },
      {
        path:"/cart",
        element:<Cart />,
      },
      {
        path:"/Login",
        element: <Login />,
      },
      {
        path:"/About",
        element: <About />,
      },
      {
        path:"/Contact",
        element: <Contact />,
      },
    ]
  }
])


function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay (e.g., fetching data from an API)
    setTimeout(() => {
      setLoading(false); // Set loading to false when data is loaded
    }, 100); // Adjust the delay as needed
  }, []);

  return (
    <>
    <div className="App fixed bg-white left-[47%] top-[32%]  ">
      {loading ? <Circles color='gray' height='150px' width='150px' /> : <p></p>}
    </div>
    
    <div className="font-bodyFont">
      <RouterProvider router={router} />
    </div>
    
    </>
    
    
  );
}

export default App;
