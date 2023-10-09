import React, { useState, useRef, useEffect } from 'react';

const ProductList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [products] = useState([
    { _id: 9001, title: 'Acer Nitro 5 AN515-57-79TD Gaming Laptop',"category":"Laptops"},
    { _id: 9002, title: 'Acer Aspire 5 A515-45-R74Z Slim Laptop',"category":"Laptops" },
    { _id: 9003, title: '2020 Apple iPad Pro',"category":"Ipads" },
    { _id: 9004, title: 'Smart Watches for Men',"category":"Smart Watches" },
    { _id: 9005, title: 'KOORUI 24 Inch Computer Monitor -FHD 1080P Gaming Monitor',"category":"Electronics" },
    { _id: 9006, title: 'GMKtec Mini PC Window 11 Pro',"category":"Electronics" },
    { _id: 9007, title: 'larco Gaming PC Desktop Computer Intel i7',"category":"Desktops" },
    { _id: 9008, title: 'SkyTech Shadow 3.0 Gaming Computer PC',"category":"Desktops" },
    { _id: 9009, title: 'Skullcandy Crusher Evo Wireless Over-Ear Bluetooth Headphones',"category":"Headphones" },
    { _id: 9010, title: 'Garmin 010-02430-01 Venu 2',"category":"Electronics" },
    { _id: 9011, title: 'Canon EOS Rebel T100',"category":"Camera" },
    { _id: 9013, title: 'Apple 10.2-inch iPad',"category":"Ipads" },
    { _id: 9014, title: 'iPhone 14',"category":"Iphones" },
    { _id: 9015, title: 'Apple Watch SE',"category":"Smart Watches" },
    { _id: 9016, title: 'Beats Solo3',"category":"Headphones" },
    { _id: 9017, title: 'uhomepro TV Stand Cabinet',"category":"Electronics" },
    { _id: 9018, title: 'Pupuskyer Smart Watch',"category":"Smart Watches" },
    { _id: 9019, title: 'SAMSUNG Galaxy S23 Ultra Cell Phone',"category":"Phones" },
    { _id: 9020, title: 'Apple iPhone 12 Mini 5G',"category":"Iphones" },
  ]);
  const [showResults, setShowResults] = useState(false);

  const searchInputRef = useRef(null);
  const resultsContainerRef = useRef(null);

  useEffect(() => {
    // Event listener to close results when clicking outside
    const handleClickOutside = (e) => {
      if (
        resultsContainerRef.current &&
        !resultsContainerRef.current.contains(e.target) &&
        searchInputRef.current &&
        !searchInputRef.current.contains(e.target)
      ) {
        setShowResults(false);
      }
    };

    // Add the event listener when the component mounts
    document.addEventListener('click', handleClickOutside);

    // Cleanup: remove event listener when the component unmounts
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    // Show the results only if there's a search term
    setShowResults(!!value);
  };

  const selectProduct = (productTitle) => {
    // Fill the search input with the selected product title
    setSearchTerm(productTitle);
    // Hide the results
    setShowResults(false);
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4 relative">
      <div className="mb-4 flex justify-center relative" ref={searchInputRef}>
        <input
          type="text"
          placeholder="                                         What are you looking for"
          value={searchTerm}
          onChange={handleSearch}
          className="form-control border-2 border-gray-600 active:border-gray-800 w-[550px] rounded"
        />
        <button
          onClick={handleSearch}
          className="bg-black text-white py-2 px-4 ml-2 rounded"
        >
          Search
        </button>
        {showResults && (
          <div
          className="absolute top-full left-[46%] transform -translate-x-1/2 z-10 w-full md:w-[550px] bg-white border border-gray-300 mt-2 shadow-md rounded-md max-h-60 overflow-y-auto"
          ref={resultsContainerRef}
        >
          {filteredProducts.length === 0 ? (
            <div className="py-2 px-4 text-gray-500">No products found</div>
          ) : (
            <ul className="py-2 space-y-2">
              {filteredProducts.map((product) => (
                <li
                  key={product._id}
                  className="px-4 py-2 hover:bg-gray-100 transition duration-300 cursor-pointer"
                  onClick={() => selectProduct(product.title)}
                >
                  <div className="text-lg font-semibold">{product.title}</div>
                  <div className="text-gray-500">{product.category}</div>
                </li>
              ))}
            </ul>
          )}
        </div>
        
        )}
      </div>
    </div>
  );
};

export default ProductList;
