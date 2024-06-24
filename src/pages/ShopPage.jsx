// import React from 'react'

import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ProductContext } from "../contexts/ProductContext";

const ShopPage = () => {
  const nav = useNavigate();
  const {state} = useContext(ProductContext);
  // console.log(state);
  const location = useLocation();
  const [searchResults, setSearchResults] = useState(state.products);

  useEffect(()=>{
    const queryParams = new URLSearchParams(location.search);
    const searchTerm = queryParams.get("search")?.toLowerCase() || "";
    const category = queryParams.get("category")?.toLowerCase() || "";
    const price = queryParams.get("price") || "";

    let filteredProducts = state.products.filter(
      (products) => 
      products.title.toLowerCase().includes(searchTerm)
      && 
      products.category.toLowerCase().includes(category)
    );

    if(price){
      const [minPrice, maxPrice] = price.split("-").map(Number);
      filteredProducts = filteredProducts.filter(
        (product) => product.price >= minPrice && product.price <= maxPrice 
      );
    }
    setSearchResults(filteredProducts);
  },[location.search, state.products]);
  // if(!state.products || !Array.isArray(state.products) || state.products.length === 0){
  //   return <div>No data</div>
  // }
  if(!searchResults || !Array.isArray(searchResults) || searchResults.length === 0){
    return (
      <div className="flex justify-center items-center h-screen">
      <div className="text-center">
      <h2 className="text-red-500 text-4xl font-semibold">Product name does not exist</h2>
      <p className="my-2 font-semibold text-base">No product found. Redirecting to shop page...</p>
      </div>
    </div>
    );
  }

  
  return (
    <>
    <section>
    <div className="mt-4 flex justify-end">
          <select
            className="p-2 border border-yellow-600 rounded"
            onChange={(e) => nav(`/shop?price=${e.target.value}`)}
          >
            <option value="">Filter by price</option>
            <option value="0-30000">Under 30000 VNĐ</option>
            <option value="30000-50000">30000 - 50000 VNĐ</option>
            <option value="50000-70000">50000 - 700000 VNĐ</option>
            <option value="70000-120000">Above 70000 VNĐ</option>
          </select>
        </div>
    </section>
    <section className="  grid  lg:grid-cols-4 md:grid-cols-1 sm:grid-cols-1 gap-8">
      <div >
        <ul className="w-full p-4  text-gray-400 hidden lg:table-cell">
          <li className="w-full text-xl font-semibold hover:text-yellow-700 ">
            <Link to="/shop?category=Traditional coffee" className="w-full">Traditional coffee</Link>
          </li>
          <li className="pt-3 text-xl font-semibold hover:text-yellow-700 ">
            <Link to="/shop?category=Vietnamese Coffee">Vietnamese Coffee</Link>
          </li>
          <li className="pt-3 text-xl font-semibold hover:text-yellow-700 ">
            <Link to="/shop?category=Instant coffee">Instant coffee</Link>
          </li>
          <li className="pt-3 text-xl font-semibold hover:text-yellow-700 ">
            <Link to="/shop?category=Canned coffee">Canned coffee</Link>
          </li>
        </ul>
     
      </div>
      <div className="lg:hidden mt-4 w-full ">
              <div className="btn-group">
                <button
                  className="btn btn-secondary dropdown-toggle bg-yellow-600 border-none hover:bg-yellow-700"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Category
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/shop">
                      Shop
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/contact">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/about">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/admin">
                      Admin
                    </Link>
                  </li>
                </ul>
              </div>
        </div>
      <div className="w-full lg:col-span-3 grid  lg:grid-cols-3 md:grid-cols-2  gap-8 p-4 ms:p-0 ">
        {searchResults.map((item) => (
          <div key={item.id} className="w-full">
            <div className="shadow-md rounded-xl border h-full">
              <div className="overflow-hidden rounded-t-xl">
                <Link to={`/product-detail/${item.id}`}>
                  <img
                    className="w-full h-full object-cover hover:scale-110 duration-1000"
                    src={item.thumbnail}
                    alt=""
                  />
                </Link>
              </div>
              <div className="mt-2">
                <div>
                  <div className="mx-6">
                    <h4 className="text-2xl font-semibold text-yellow-700">
                      {item.title}
                    </h4>
                    <p className="text-red-500 text-xl font-bold my-2">
                      {item.price}VNĐ
                    </p>
                  </div>
                  <div className="w-full flex justify-center items-center text-base font-bold text-center ">
                    <Link
                      to={`/product-detail/${item.id}`}
                      className="w-full py-2 border-yellow-600 text-white bg-yellow-600 hover:bg-yellow-700 rounded-b-xl"
                    >
                      Buy now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
    </>
  );
};

export default ShopPage;
