// import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../axios";
import { useEffect, useState } from "react";

const ProductDetail = () => {
  const { id } = useParams();
  const [item, setProduct] = useState({});
  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.get(`/products/${id}`);
        setProduct(data);
      } catch (error) {
        console.log("Error fetching data: ", error);
      }
    })();
  }, [id]);

  return (
    <>
      <section className="grid grid-cols-2 gap-8 mt-8">
      <div className="w-full">
        <img className="w-full rounded-xl" src={item.thumbnail} alt="" />
      </div>
      <div>
        <h1 className="text-[40px] font-semibold text-black">{item.title}</h1>

        <p className="font-semibold text-2xl text-yellow-600 mt-2 mb-4">
          {item.price} VNĐ
        </p>

        <h3 className="text-xl font-semibold text-gray-400 mb-3">
          Choose size (required)
        </h3>
        <div className="flex gap-8">
          <div className="py-2 px-4 border rounded-lg font-bold text-base hover:bg-yellow-600 hover:text-white">
            L
          </div>
          <div className="py-2 px-4 border rounded-lg font-bold text-base hover:bg-yellow-600 hover:text-white">
            L
          </div>
          <div className="py-2 px-4 border rounded-lg font-bold text-base hover:bg-yellow-600 hover:text-white">
            L
          </div>
        </div>

        <h3 className="text-xl font-semibold text-gray-400 my-3">Topping</h3>
        <div className="flex gap-8">
          <div className="py-2 px-4 border rounded-lg font-bold text-base hover:bg-yellow-600 hover:text-white">
            + 10000
          </div>
          <div className="py-2 px-4 border rounded-lg font-bold text-base hover:bg-yellow-600 hover:text-white">
            + 10000
          </div>
          <div className="py-2 px-4 border rounded-lg font-bold text-base hover:bg-yellow-600 hover:text-white">
            + 10000
          </div>
        </div>

        <div className="w-full mt-8 bg-yellow-600 flex items-center text-xl font-semibold text-white hover:bg-yellow-700 rounded-md">
          <a className="w-full text-center my-2" href="">
          Buy now
          </a>
        </div>
      </div>
    </section>
    <section className="mt-16">
      <hr />
      <h1 className="text-yellow-600 text-2xl font-semibold my-3">Description</h1>
    </section>
    
    <section className="mt-16 grid grid-cols-1">
      <hr />
      <h1 className="text-yellow-600 text-2xl font-semibold my-3">Related products</h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mt-8 ">
          <div className="shadow-md rounded-xl border">
            <div className="overflow-hidden rounded-t-xl">
              <Link>
                <img
                  className="w-full hover:scale-110 duration-1000"
                  src="https://royalceramic.net/wp-content/uploads/2023/07/ly-ca-phe-duoc-chup-dep.jpg"
                  alt=""
                />
              </Link>
            </div>
            <div className="mt-2">
              <div>
                <div className="mx-6">
                  <h4 className="text-2xl font-semibold text-yellow-700">
                    Product One
                  </h4>
                  <p className="text-red-500 text-xl font-bold my-2">45.000đ</p>
                </div>
                <div className="w-full flex justify-center items-center  text-base font-bold text-center ">
                  <Link
                    to=""
                    className=" w-full py-2 text-white bg-yellow-600 hover:bg-yellow-700 rounded-b-xl"
                  >
                    Buy now
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="shadow-md rounded-xl border">
            <div className="overflow-hidden rounded-t-xl">
              <Link>
                <img
                  className="w-full hover:scale-110 duration-1000"
                  src="https://royalceramic.net/wp-content/uploads/2023/07/ly-ca-phe-duoc-chup-dep.jpg"
                  alt=""
                />
              </Link>
            </div>
            <div className="mt-2">
              <div>
                <div className="mx-6">
                  <h4 className="text-2xl font-semibold text-yellow-700">
                    Product One
                  </h4>
                  <p className="text-red-500 text-xl font-bold my-2">45.000đ</p>
                </div>
                <div className="w-full flex justify-center items-center  text-base font-bold text-center ">
                  <Link
                    to=""
                    className=" w-full py-2 text-white bg-yellow-600 hover:bg-yellow-700 rounded-b-xl"
                  >
                    Buy now
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="shadow-md rounded-xl border">
            <div className="overflow-hidden rounded-t-xl">
              <Link>
                <img
                  className="w-full hover:scale-110 duration-1000"
                  src="https://royalceramic.net/wp-content/uploads/2023/07/ly-ca-phe-duoc-chup-dep.jpg"
                  alt=""
                />
              </Link>
            </div>
            <div className="mt-2">
              <div>
                <div className="mx-6">
                  <h4 className="text-2xl font-semibold text-yellow-700">
                    Product One
                  </h4>
                  <p className="text-red-500 text-xl font-bold my-2">45.000đ</p>
                </div>
                <div className="w-full flex justify-center items-center  text-base font-bold text-center ">
                  <Link
                    to=""
                    className=" w-full py-2 text-white bg-yellow-600 hover:bg-yellow-700 rounded-b-xl"
                  >
                    Buy now
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="shadow-md rounded-xl border">
            <div className="overflow-hidden rounded-t-xl">
              <Link>
                <img
                  className="w-full hover:scale-110 duration-1000"
                  src="https://royalceramic.net/wp-content/uploads/2023/07/ly-ca-phe-duoc-chup-dep.jpg"
                  alt=""
                />
              </Link>
            </div>
            <div className="mt-2">
              <div>
                <div className="mx-6">
                  <h4 className="text-2xl font-semibold text-yellow-700">
                    Product One
                  </h4>
                  <p className="text-red-500 text-xl font-bold my-2">45.000đ</p>
                </div>
                <div className="w-full flex justify-center items-center  text-base font-bold text-center ">
                  <Link
                    to=""
                    className=" w-full py-2 text-white bg-yellow-600 hover:bg-yellow-700 rounded-b-xl"
                  >
                    Buy now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>

    <section className="mt-16">
      <hr />
      <h1 className="text-yellow-600 text-2xl font-semibold my-3">Evaluate</h1>
    </section>
    </>
  
  );
};
export default ProductDetail;
