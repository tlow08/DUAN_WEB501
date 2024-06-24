import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

export default function Header() {
  // const user = JSON.parse(localStorage.getItem("user"));
  const { isAuthenticated } = useContext(AuthContext);
  const [searchTerm, setSearchTerm] = useState("");
  const nav = useNavigate();

  const handleSearch = (event) =>{
    event.preventDefault();
    if(searchTerm.trim() !== ""){
      nav(`/shop?search=${searchTerm}`);
    }
  }
  return (
    <header className=" lg:fixed w-full z-50 bg-white">
      <section className=" xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md m-auto sm:p-2 ">
        <div className="grid lg:grid-cols-4 md:grid-cols-1 md:text-center gap-8 my-4">
          <Link to="/">
          <div className="flex justify-center items-center gap-2">
            <i className="bi bi-cup-hot-fill text-xl text-yellow-700"></i>
            <p className="text-xl font-semibold text-yellow-700">Low-Coffee</p>
          </div>
          </Link>
          <div className="container lg:col-span-2 flex  ">
            <form onSubmit={handleSearch} className="w-full flex justify-center items-center">
              <div className="w-5/6 border border-yellow-400">
                <input
                  className="w-full px-[12px] py-[6px] outline-none"
                  type="text"
                  value={searchTerm}
                  placeholder="Enter search content ..."
                  onChange = {(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="w-1/6 text-left">
                <button className=" px-[12px] py-[6px] rounded bg-yellow-600 hover:bg-yellow-700 text-white">
                  <i className="bi bi-search"></i>
                </button>
              </div>
            </form>
          </div>
          <div className="flex justify-center items-center gap-4 text-yellow-700 text-base font-semibold ">
            {/* {isAuthenticated ? <Link to="/admin/dashboard">You are admin?</Link> : <></>} */}
            <Link className="hover:underline" to={isAuthenticated ? `/about-user` : "/register"}>
              <i className="bi bi-person-fill px-1"></i>Account
            </Link>
            <Link className="hover:underline" to="/cart">
              <i className="bi bi-cart3 px-1"></i>Shopping cart
            </Link>
            <div className="lg:hidden">
              <div className="btn-group">
                <button
                  className="btn btn-secondary dropdown-toggle bg-yellow-600 border-none hover:bg-yellow-700"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Menu
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
          </div>
        </div>
        
      </section>
     <section className="  bg-yellow-600">
     <div className="w-full container xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md m-auto grid lg:grid-cols-4 gap-8 text-xl font-semibold  text-white rounded">
          <div className="text-center text-base py-3">
            <p>Welcome to Low-Coffee</p>
          </div>
          <div className="col-span-3 py-3 hidden lg:table-cell">
            <ul className="check flex gap-8">
              <li>
                <Link className="p-2 hover:underline" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="p-2 hover:underline" to="/shop">
                  Shop
                </Link>
              </li>
              <li>
                <Link className="p-2 hover:underline" to="/contact">
                  Contact
                </Link>
              </li>
              <li>
                <Link className="p-2 hover:underline" to="/about">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
     </section>
    </header>
  );
}
