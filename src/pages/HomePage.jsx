/* eslint-disable react/prop-types */
// import react from "react";
import { Link } from "react-router-dom";
function HomePage() {
  return (
    <>
      <section className="max-w-screen-2xl m-auto">
        {/* <div className="col-span-1 w-full overflow-hidden hidden lg:block">
          <img
            className="h-full w-auto"
            src="https://i.pinimg.com/736x/ab/90/a8/ab90a8b8a3f184d4a39357237cc75618.jpg"
            alt=""
          />
        </div> */}
        <div className="slider w-full">
          <div
            id="carouselExampleInterval"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="3000">
                <img
                  src="https://minhanhcafe.vn/wp-content/uploads/2023/08/Banner-2-trai-nghiem.jpg"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item" data-bs-interval="3000">
                <img
                  src="https://minhanhcafe.vn/wp-content/uploads/2023/08/Banner-2-truyen-thong.jpg"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item" data-bs-interval="3000">
                <img
                  src="https://minhanhcafe.vn/wp-content/uploads/2023/08/Banner-2-cho-quan-1.jpg"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>
      <section className=" grid lg:grid-cols-3 md:grid-cols-1 gap-8 mt-16 ">
        <div className="grid grid-cols-3 justify-center items-center p-3 border rounded-lg shadow-md">
          <div>
            <img
              src="https://png.pngtree.com/png-clipart/20211128/original/pngtree-takeaway-coffee-sticker-vector-illustration-png-image_6955796.png"
              alt=""
            />
          </div>
          <div className="col-span-2">
            <h1 className="text-2xl text-yellow-700 font-semibold py-3">
              OUR MISSION
            </h1>
            <div className="text-base text-left text-gray-400">
              <p>
                Bringing high quality cups of coffee with unique flavors.Use
                clean and safe ingredients for health
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 justify-center items-center p-3 border rounded-lg shadow-md">
          <div>
            <img
              src="https://images.vexels.com/media/users/3/324396/isolated/preview/a60019ddac2b50b65df2812e03ce261f-quita-el-trazo-de-color-del-cafa-lleno-de-vapor.png"
              alt=""
            />
          </div>
          <div className="col-span-2">
            <h1 className="text-2xl text-yellow-700 font-semibold py-3">
              OUR VISION
            </h1>
            <div className="text-base text-left text-gray-400">
              <p>
                Building a reputable and trustworthy coffee brand. Contribute to
                improving the culture of enjoying coffee
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 justify-center items-center p-3 border rounded-lg shadow-md">
          <div>
            <img
              className="w-full"
              src="https://png.pngtree.com/png-clipart/20211128/original/pngtree-takeaway-coffee-sticker-vector-illustration-png-image_6955796.png"
              alt=""
            />
          </div>
          <div className="col-span-2">
            <h1 className="text-2xl text-yellow-700 font-semibold py-3">
              OUR VALUES
            </h1>
            <div className="text-base text-left text-gray-400">
              <p>
                Dedication: Serve customers with all your heart. Honesty: Always
                be transparent and honest in business
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-16">
        <div className="flex justify-between flex-row flex-wrap">
          <h1 className="text-[40px] font-semibold text-yellow-600 ">
            Best Seller
          </h1>
          <Link to="">
            <p className="text-yellow-600 text-xl font-semibold py-2 px-4 border border-yellow-600 hover:text-white hover:bg-yellow-600">
              View all
            </p>
          </Link>
        </div>
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
      <section className=" mt-16">
        <div className="flex justify-between flex-row flex-wrap">
          <h1 className="text-[40px] font-semibold text-yellow-600">
            Shop Space
          </h1>
          <Link to="">
            <p className="text-yellow-600 text-xl font-semibold py-2 px-4 border border-yellow-600 hover:text-white hover:bg-yellow-600">
              View all
            </p>
          </Link>
        </div>
        <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-8 mt-8">
          <div className="overflow-hidden">
            <img
              className="w-full hover:scale-125 transition-transform duration-1000"
              src="https://www.noithatnewdecor.com/wp-content/uploads/2019/08/quan-cafe4.jpg"
              alt=""
            />
          </div>
          <div className="overflow-hidden">
            <img
              className="w-full hover:scale-125 transition-transform duration-1000"
              src="https://www.noithatnewdecor.com/wp-content/uploads/2019/08/quan-cafe4.jpg"
              alt=""
            />
          </div>
          <div className="overflow-hidden">
            <img
              className="w-full hover:scale-125 transition-transform duration-1000"
              src="https://www.noithatnewdecor.com/wp-content/uploads/2019/08/quan-cafe4.jpg"
              alt=""
            />
          </div>
          <div className="overflow-hidden">
            <img
              className="w-full hover:scale-125 transition-transform duration-1000"
              src="https://www.noithatnewdecor.com/wp-content/uploads/2019/08/quan-cafe4.jpg"
              alt=""
            />
          </div>
        </div>
      </section>
      <section className="mt-16">
        <div className="flex justify-between flex-row flex-wrap">
          <h1 className="text-[40px] font-semibold text-yellow-600">
            Blog and News
          </h1>
          <Link to="">
            <p className="text-yellow-600 text-xl font-semibold py-2 px-4 border border-yellow-600 hover:text-white hover:bg-yellow-600">
              View all
            </p>
          </Link>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-1 mt-8 gap-8">
          <div className="p-3 shadow-md rounded-lg border">
            <div>
              <img
                className="w-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO-HxafTsTF8l6aC0aTSgeotCZX_4FYuBtcDxz_-DHsQrgZyC6jZhHjKmnsEvVkxBZpMU&usqp=CAU"
                alt=""
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-yellow-600 my-3">
                Lorem ipsum dolor sit.
              </h3>
              <p className="text-gray-400 text-base font-normal text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente eos libero adipisci voluptas sed! Adipisci molestiae,
                deserunt corporis esse sit itaque, ducimus necessitatibus
                nesciunt similique aspernatur quaerat animi ipsa nisi.
              </p>
            </div>
          </div>
          <div className="p-3 shadow-md rounded-lg border">
            <div>
              <img
                className="w-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO-HxafTsTF8l6aC0aTSgeotCZX_4FYuBtcDxz_-DHsQrgZyC6jZhHjKmnsEvVkxBZpMU&usqp=CAU"
                alt=""
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-yellow-600 my-3">
                Lorem ipsum dolor sit.
              </h3>
              <p className="text-gray-400 text-base font-normal text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente eos libero adipisci voluptas sed! Adipisci molestiae,
                deserunt corporis esse sit itaque, ducimus necessitatibus
                nesciunt similique aspernatur quaerat animi ipsa nisi.
              </p>
            </div>
          </div>
          <div className="p-3 shadow-md rounded-lg border">
            <div>
              <img
                className="w-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO-HxafTsTF8l6aC0aTSgeotCZX_4FYuBtcDxz_-DHsQrgZyC6jZhHjKmnsEvVkxBZpMU&usqp=CAU"
                alt=""
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-yellow-600 my-3">
                Lorem ipsum dolor sit.
              </h3>
              <p className="text-gray-400 text-base font-normal text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente eos libero adipisci voluptas sed! Adipisci molestiae,
                deserunt corporis esse sit itaque, ducimus necessitatibus
                nesciunt similique aspernatur quaerat animi ipsa nisi.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-16">
        <img
          className="w-full"
          src="https://ttmvietnam.com.vn/agriculture/upload/images/coffee-banner.png"
          alt=""
        />
      </section>
      <section className="mt-16">
        <div className="flex justify-between flex-row flex-wrap">
          <h1 className="text-[40px] font-semibold text-yellow-600">
            What do customers say?
          </h1>
          <Link to="">
            <p className="text-yellow-600 text-xl font-semibold py-2 px-4 border border-yellow-600 hover:text-white hover:bg-yellow-600">
              View all
            </p>
          </Link>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-1 mt-8 gap-8">
          <div className="flex gap-8 shadow-md rounded-xl border p-4">
            <div className="w-1/5">
              <img
                className="w-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIWR4IZjAoTYQkd1rBssqqo3Ua_0IAomVz8Q&s"
                alt=""
              />
            </div>
            <div className="w-4/5">
              <h4 className="text-xl font-semibold text-yellow-600">
                Name Customer One
              </h4>
              <p className="text-gray-400 text-base font-normal text-justify mt-3">
                As a meticulous person with high product requirements, I always
                choose quality products to use and this is the place I always
                trust.
              </p>
            </div>
          </div>
          <div className="flex gap-8 shadow-md rounded-xl border p-4">
            <div className="w-1/5">
              <img
                className="w-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIWR4IZjAoTYQkd1rBssqqo3Ua_0IAomVz8Q&s"
                alt=""
              />
            </div>
            <div className="w-4/5">
              <h4 className="text-xl font-semibold text-yellow-600">
                Name Customer One
              </h4>
              <p className="text-gray-400 text-base font-normal text-justify mt-3">
                As a meticulous person with high product requirements, I always
                choose quality products to use and this is the place I always
                trust.
              </p>
            </div>
          </div>
          <div className="flex gap-8 shadow-md rounded-xl border p-4">
            <div className="w-1/5">
              <img
                className="w-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIWR4IZjAoTYQkd1rBssqqo3Ua_0IAomVz8Q&s"
                alt=""
              />
            </div>
            <div className="w-4/5">
              <h4 className="text-xl font-semibold text-yellow-600">
                Name Customer One
              </h4>
              <p className="text-gray-400 text-base font-normal text-justify mt-3">
                As a meticulous person with high product requirements, I always
                choose quality products to use and this is the place I always
                trust.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
