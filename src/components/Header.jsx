import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="lg:fixed w-full z-50 bg-white">
      <section className="container 2xl:max-w-screen-2xl xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md m-auto sm:p-2 ">
      <div className="grid lg:grid-cols-4 md:grid-cols-1 md:text-center gap-8 my-4">
        <div className="flex justify-center items-center gap-2">
          <i className="bi bi-cup-hot-fill text-xl text-yellow-700"></i>
          <p className="text-xl font-semibold text-yellow-700">Low-Coffee</p>
        </div>
        <div className="lg:col-span-2 flex justify-center items-center">
          <form action="" className="w-full flex">
            <div className="w-5/6 border border-yellow-400"> <input className="w-full px-[12px] py-[6px] outline-none" type="text" placeholder="Enter search content ..." /></div>
            <div className="w-1/6"><button className=" px-[12px] py-[6px] rounded bg-yellow-700 text-white"><i className="bi bi-search"></i></button></div>
          </form>
        </div>
        <div className="flex justify-center items-center gap-4 text-yellow-700 text-base font-semibold ">
          <Link className="hover:underline" to="/login">
            <i className="bi bi-person-fill px-1"></i>Account
          </Link>
          <Link className="hover:underline" to="/cart">
            <i className="bi bi-cart3 px-1"></i>Shopping cart
          </Link>
          <button className="lg:hidden">
          <i className="bi bi-list px-1"></i>Menu
          </button>
        </div>
      </div>
      <div className="container grid lg:grid-cols-4 gap-8 text-xl font-semibold bg-yellow-600 text-white rounded">
        <div className="text-center text-base py-3">
          <p>Welcome to Low-Coffee</p>
        </div>
        <div className="col-span-3 py-3 hidden lg:table-cell">
          <ul className="check flex gap-8">
            <li>
              <Link className="p-2 hover:underline" to="/">Home</Link>
            </li>
            <li>
              <Link className="p-2 hover:underline" to="/shop">Shop</Link>
            </li>
            <li>
              <Link className="p-2 hover:underline" to="/contact">Contact</Link>
            </li>
            <li>
              <Link className="p-2 hover:underline" to="/about">About</Link>
            </li>
            <li>
              <Link className="p-2 hover:underline" to="/admin">Admin</Link>
            </li>
          </ul>
        </div>
      </div>
      </section>
     
    </header>
  );
}
