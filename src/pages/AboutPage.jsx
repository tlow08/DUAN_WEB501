// import React from 'react';

function AboutPage() {
  return (
    <>
      <section className="grid lg:grid-cols-3 md:grid-cols-1 gap-8 mt-16">
        <div className="grid grid-cols-4 border p-2 gap-2 rounded-xl shadow-xl">
          <div className="col-span-1 flex justify-center items-center">
            <img
              className="w-[100px] h-auto"
              src="https://moitruongeco.vn/wp-content/uploads/2021/08/cropped-moi-truong-eco-favicon.png"
              alt=""
            />
          </div>
          <div className="col-span-3">
            <h3 className="text-xl font-semibold text-yellow-600 text-center my-2">
              Environment
            </h3>
            <p className="text-base font-normal text-justify text-gray-400">
              Low-Coffee: space is designed with a combination of modernity and
              coziness, bringing a comfortable feeling to anyone who enters.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-4 border p-2 gap-2 rounded-xl shadow-xl">
          <div className="col-span-1 flex justify-center items-center">
            <img
              className="w-[100px] h-auto"
              src="https://noithatvuonggia.com/wp-content/uploads/2019/03/icon-dich-vu-sua-chua-400x400.png"
              alt=""
            />
          </div>
          <div className="col-span-3">
            <h3 className="text-xl font-semibold text-yellow-600 text-center my-2">
              Products and services
            </h3>
            <p className="text-base font-normal text-justify text-gray-400">
            We are proud of our diverse menu, from traditional coffees such as Espresso, Cappuccino, Latte to special dishes such as Cold Brew and Vietnamese filter coffee.

            </p>
          </div>
        </div>
        <div className="grid grid-cols-4 border p-2 gap-2 rounded-xl shadow-xl">
          <div className="col-span-1 flex justify-center items-center">
            <img
              className="w-[100px] h-auto"
              src="https://cdn1.iconfinder.com/data/icons/ui-5/502/crowd-512.png"
              alt=""
            />
          </div>
          <div className="col-span-3">
            <h3 className="text-xl font-semibold text-yellow-600 text-center my-2">
            Team
            </h3>
            <p className="text-base font-normal text-justify text-gray-400">
            Our team includes experienced baristas and service staff who are passionate about coffee. They are always ready to share their knowledge and advise you on the best types of coffee and how to enjoy it.

            </p>
          </div>
        </div>
      </section>
      <section className="grid md:grid-cols-2 sm:grid-cols-1 gap-8 mt-16">
        <div className="text-base font-normal">
          <h1 className="text-2xl text-yellow-700 font-semibold my-8">
            Overview Introduction
          </h1>
          <p className="text-justify leading-9">
            Welcome to Low-Coffee - a place that combines the great taste of
            coffee and a comfortable relaxing space. At Low-Coffee, we believe
            that every cup of coffee has its own story. We not only bring
            quality coffee but also create a space for you to enjoy every
            special moment.
          </p>
        </div>
        <div>
          <img
            className="w-full rounded-xl shadow-2xl"
            src="https://file.hstatic.net/200000665395/file/loi-gioi-thieu-hay-ve-quan-cafe-6_e2b2f62e719d453381bf62a4f8d5b856_grande.jpg"
            alt=""
          />
        </div>
      </section>
      <section className="grid md:grid-cols-2 sm:grid-cols-1  gap-8 mt-16">
        <div>
          <img
            className="w-full rounded-xl shadow-2xl"
            src="https://thanhnien.mediacdn.vn/uploaded/minhnguyet/2018_05_06/uongcafe2_NGCF.jpg?width=500"
            alt=""
          />
        </div>

        <div className="text-base font-normal">
          <h1 className="text-2xl text-yellow-700 font-semibold my-8">
            History
          </h1>
          <p className="text-justify leading-9">
            Low-Coffee was founded in 2015 with the mission of bringing
            customers the best coffee experience. From a small shop located in a
            quiet alley, we have continuously developed and expanded to become a
            familiar destination for many coffee lovers. Over the years, we have
            not only grown in scale but also continuously improved the quality
            of services and products.
          </p>
        </div>
      </section>
      <section className="grid md:grid-cols-2 sm:grid-cols-1  gap-8 mt-16">
        <div className="text-base font-normal">
          <h1 className="text-2xl text-yellow-700 font-semibold my-8">
            Mission and Values
          </h1>
          <p className="text-justify leading-9">
            Our mission is to bring customers the best cups of coffee, made from
            high quality coffee beans. We always put customers first, committed
            to providing dedicated service and comfortable spaces for everyone
            to relax and enjoy.
          </p>
        </div>
        <div>
          <img
            className="w-full rounded-xl shadow-2xl"
            src="https://caphedakland.com/upload/hinhanh/496363.jpg"
            alt=""
          />
        </div>
      </section>
      <section className="grid md:grid-cols-2 sm:grid-cols-1  gap-8 mt-16">
        <div>
          <img
            className="w-full rounded-xl shadow-2xl"
            src="https://vcdn1-dulich.vnecdn.net/2016/10/02/14192582-1085550981482409-9025744372749409835-n.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=kr4quy2KU9ffCVlWoAn4Gg"
            alt=""
          />
        </div>

        <div className="text-base font-normal">
          <h1 className="text-2xl text-yellow-700 font-semibold my-8">
          Environmental Protection commitments
          </h1>
          <p className="text-justify leading-9">
          At Low-Coffee, we understand our responsibility towards the environment. We use organic ingredients and apply sustainable processing methods. We also encourage customers to use reusable cups and always look for ways to reduce plastic waste in daily activities.
          </p>
        </div>
      </section>
    </>
  );
}

export default AboutPage;
