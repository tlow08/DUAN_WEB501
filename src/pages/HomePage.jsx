/* eslint-disable react/prop-types */
// import react from "react";
import { Link } from "react-router-dom";
function HomePage() {
  return (
    <>
      <section className=" lg:grid-cols-4 md:grid-cols-1 gap-8">
        <div className="w-full hidden lg:block">
          <ul className="w-full p-4  text-gray-400 ">
            <li className="py-3 text-xl font-semibold hover:text-yellow-700 border-b">
              <Link>Traditional coffee</Link>
            </li>
            <li className="py-3 text-xl font-semibold hover:text-yellow-700 border-b">
              <Link>Vietnamese Coffee</Link>
            </li>
            <li className="py-3 text-xl font-semibold hover:text-yellow-700 border-b">
              <Link>Instant coffee</Link>
            </li>
            <li className="py-3 text-xl font-semibold hover:text-yellow-700 border-b">
              <Link>Canned coffee</Link>
            </li>
          </ul>
        </div>
        <div className="slider col-span-3">
          <div
            id="carouselExampleFade"
            className="carousel slide carousel-fade "
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="https://minhanhcafe.vn/wp-content/uploads/2023/08/Banner-2-trai-nghiem.jpg"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://minhanhcafe.vn/wp-content/uploads/2023/08/Banner-2-truyen-thong.jpg"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleFade"
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
              data-bs-target="#carouselExampleFade"
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
      <section className=" container lg:max-w-screen-lg grid lg:grid-cols-3 md:grid-cols-1 gap-8 mt-16 ">
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
              <p>Bringing high quality cups of coffee with unique flavors</p>
              <p>Use clean and safe ingredients for health</p>
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
              <p>Building a reputable and trustworthy coffee brand</p>
              <p>Contribute to improving the culture of enjoying coffee</p>
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
              <p>Dedication: Serve customers with all your heart</p>
              <p>Honesty: Always be transparent and honest in business</p>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-16">
        <div className="flex justify-between">
          <h1 className="text-[40px] font-semibold text-yellow-600 ">
            Bestseller
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
                <div className="w-full flex justify-center items-center text-yellow-600 text-base font-bold text-center ">
                  <Link
                    to=""
                    className=" w-full border-2 py-2 border-yellow-600 hover:text-white hover:bg-yellow-600 rounded-b-xl"
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
                <div className="w-full flex justify-center items-center text-yellow-600 text-base font-bold text-center ">
                  <Link
                    to=""
                    className=" w-full border-2 py-2 border-yellow-600 hover:text-white hover:bg-yellow-600 rounded-b-xl"
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
                <div className="w-full flex justify-center items-center text-yellow-600 text-base font-bold text-center ">
                  <Link
                    to=""
                    className=" w-full border-2 py-2 border-yellow-600 hover:text-white hover:bg-yellow-600 rounded-b-xl"
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
                <div className="w-full flex justify-center items-center text-yellow-600 text-base font-bold text-center ">
                  <Link
                    to=""
                    className=" w-full border-2 py-2 border-yellow-600 hover:text-white hover:bg-yellow-600 rounded-b-xl"
                  >
                    Buy now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="grid lg:grid-cols-2 md:grid-cols-1 gap-8 mt-16">
        <div>
          <img
            className="w-full"
            src="https://vietthuancoffee.com/wp-content/uploads/2020/05/Cafe-banner-01-scaled.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="w-full"
            src="https://vietthuancoffee.com/wp-content/uploads/2020/05/Cafe-banner-01-scaled.jpg"
            alt=""
          />
        </div>
      </section>
      <section className="mt-16">
        <div className="flex justify-between">
          <h1 className="text-[40px] font-semibold text-yellow-600">News</h1>
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
        <div className="flex justify-between">
          <h1 className="text-[40px] font-semibold text-yellow-600">
            Customer is feedback
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
