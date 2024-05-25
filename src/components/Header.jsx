import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="top-h row">
        <div className="top-h-d col d-flex flex-row">
          <img
            src="https://file.hstatic.net/200000265255/file/logo-min_659f1336baab4e208eae9fcb45e22567.png"
            alt=""
          />
        </div>
        <div className="top-h-t col d-flex justify-content-center">
          <form action="">
            <input type="text" placeholder="Nhập nội dung cần tìm ..." />
            <button className="btn btn-primary"><i className="bi bi-search"></i></button>
          </form>
        </div>
        <div className="top-h-e col flex flex-row-reverse gap-3">
          <Link to="/login">
            <i className="bi bi-person-fill"></i>Tài khoản
          </Link>
          <a href="">
            <i className="bi bi-cart3"></i>Giỏ hàng
          </a>
        </div>
      </div>
      <div className="main-h row">
        <div className="col-4">
          <p>Chào mừng bạn đến với Mobile</p>
        </div>
        <div className="col-6">
          <ul className="flex gap-5">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">Contact</Link>
            </li>
            <li>
              <Link to="/products">Shop</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/admin">Admin</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
