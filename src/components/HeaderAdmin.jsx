// import React from 'react'

import { Link } from "react-router-dom";

const HeaderAdmin = () => {
  return (
    <header className="lg:fixed w-full z-50">
      <section className="bg-yellow-600 flex justify-between text-white font-semibold text-xl px-4 py-2">
        <div className="flex justify-center items-center gap-2">
          <i className="bi bi-cup-hot-fill "></i>
          <p>Low-Coffee</p>
        </div>
        <Link to="/">
          {" "}
          <i className="bi bi-box-arrow-right pr-1"></i>Out
        </Link>
      </section>
      {/* <section className="grid grid-cols-5 p-3 gap-8">
        <div className="col-span-1">
          <div className="w-full flex justify-center items-center ">
            <img
              className="rounded-full w-[80px] h-[80px]"
              src="https://cellphones.com.vn/sforum/wp-content/uploads/2024/02/anh-avatar-cute-84.jpg"
              alt=""
            />
          </div>
          <p className="text-center py-2">Hello admin</p>
          <ul className="w-full text-base font-semibold text-yellow-700 border-yellow-700  mt-4 grid grid-cols-1">
            
            <li className="w-full mb-3 border-b-2">
              <Link to="/admin" className="p-2">Dashboard</Link>
            </li>
            <li className="w-full mb-3 border-b-2">
              <Link to="/admin/users" className="p-2">List Of Users</Link>
            </li>
            <li className="w-full mb-3 border-b-2">
              <Link to="/admin/products" className="p-2">List Of Products</Link>
            </li>
          </ul>
        </div>
       <div className="col-span-3 z--10"></div>
      </section> */}
    </header>
  );
};

export default HeaderAdmin;
