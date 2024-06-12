// import React from 'react'

import { Link } from "react-router-dom";

const ShopPage = ({ data }) => {
  if (!data || data.length === 0) {
    return <div>No data</div>;
  }
  return (
    <section className="  grid  lg:grid-cols-4 md:grid-cols-1 sm:grid-cols-1 gap-8">
      <div >
        <ul className="w-full p-4  text-gray-400 hidden lg:table-cell">
          <li className="w-full text-xl font-semibold hover:text-yellow-700 ">
            <Link className="w-full">Traditional coffee</Link>
          </li>
          <li className="pt-3 text-xl font-semibold hover:text-yellow-700 ">
            <Link>Vietnamese Coffee</Link>
          </li>
          <li className="pt-3 text-xl font-semibold hover:text-yellow-700 ">
            <Link>Instant coffee</Link>
          </li>
          <li className="pt-3 text-xl font-semibold hover:text-yellow-700 ">
            <Link>Canned coffee</Link>
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
      <div className="w-full lg:col-span-3 lg:mt-8 grid  lg:grid-cols-3 md:grid-cols-2  gap-8 p-4 ms:p-0 ">
        {data.map((item) => (
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
                      {item.price}$
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
  );
};

export default ShopPage;
