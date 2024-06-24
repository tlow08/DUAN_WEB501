// import React from 'react'

const ContactPage = () => {
  return (
    <>
      <section className="container">
        <div>
          <iframe
            className="w-full "
            src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d7448.0546930653545!2d105.83027763857612!3d21.031591772473334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d21.0277644!2d105.8341598!4m5!1s0x3135aba3847870db%3A0x3e6627a44ec34b3d!2zTmjDoCBRdeG7kWMgaOG7mWkgVmnhu4d0IE5hbQ!3m2!1d21.0372126!2d105.8371014!5e0!3m2!1svi!2s!4v1716653450294!5m2!1svi!2s"
            height={400}
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
      <section className="container grid lg:grid-cols-2 md:grid-cols-1 mt-16 gap-8">
        <div className="text-2xl font-semibold text-yellow-600 pl-8">
          <div>
            <h2>Open time information</h2>
            <div className="mt-4 text-xl font-bold text-red-700">
              <p> - 9 am - 11 am</p>
              <p> - 13pm - 22 pm</p>
            </div>
          </div>
          <h2 className="py-4">Email : DDD@gmail.com</h2>
          <h2>Hotline : 1900 1900</h2>
        </div>
        <div className="p-2">
          <form action="" className="grid grid-cols-1 shadow-xl rounded-xl p-4">
            <h1 className="text-2xl text-center font-bold text-yellow-600 my-3">
              Enter your request
            </h1>
            <div className="w-full grid grid-cols-1">
              <label htmlFor="" className="text-xl font-semibold my-2">
                Full Name:
              </label>
              <input
                type="text"
                name=""
                id=""
                className="border py-2 pl-3 outline-none"
                placeholder="Not be empty..."
              />
            </div>
            <div className="w-full grid grid-cols-1">
              <label htmlFor="" className="text-xl font-semibold my-2">
                Email:
              </label>
              <input
                type="text"
                name=""
                id=""
                className="border py-2 pl-3 outline-none"
                placeholder="Not be empty..."
              />
            </div>
            <div className="w-full grid grid-cols-1">
              <label htmlFor="" className="text-xl font-semibold my-2">
                Address:
              </label>
              <input
                type="text"
                name=""
                id=""
                className="border py-2 pl-3 outline-none"
                placeholder="Not be empty..."
              />
            </div>
            <div className="w-full grid grid-cols-1">
              <label htmlFor="" className="text-xl font-semibold my-2">
                Content:
              </label>
              <textarea
                name=""
                id=""
                className="border py-2 pl-3 outline-none"
                placeholder="Not be empty..."
              ></textarea>
            </div>
            <div className="my-4 text-white text-xl font-semibold">
              <button
                type="submit"
                className="w-full py-3 bg-yellow-600 hover:bg-yellow-700"
              >
                Send now
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
