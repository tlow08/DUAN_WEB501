/* eslint-disable react/prop-types */
// import react from "react";
import { Link } from "react-router-dom";
function HomePage({ data }) {
  if (!data || data.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <>
      <div className="m-s">
        <div className="menu">
          <ul>
            <li>
              <Link to="/">Điện thoại</Link>
            </li>
            <li>
              <Link>Laptop</Link>
            </li>
            <li>
              <Link>Tivi</Link>
            </li>
            <li>
              <Link>Đồng hồ</Link>
            </li>
          </ul>
        </div>
        <div className="slider">
          <div
            id="carouselExampleFade"
            className="carousel slide carousel-fade"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="https://file.hstatic.net/200000265255/file/img1_b7c7ffe15ad04560889c1a183b7f96fb.jpg"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://file.hstatic.net/200000265255/file/img2_4e9100790d11466e95aaf785b6dffa9f.jpg"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://file.hstatic.net/200000265255/file/img4_a0bac513a67c4331882dd3ce20259a72.jpg"
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
      </div>
      <div>
        <h1 className="tieu-de">Danh sách sản phẩm</h1>
        <div className="container  text-center">
          <div className="row ">
            {data.map((product) => (
              <div key={product.id} className="col-6 col-md-4 col-lg-2 mb-4">
                <div className="card h-100">
                  <Link to={`/product-detail/${product.id}`}>
                  <img
                    src={product.thumbnail}
                    className="card-img-top"
                    alt={product.title}
                  />
                  </Link>
                  <div className="card-body">
                    <Link to={`/product-detail/${product.id}`}><h5 className="card-title">{product.title}</h5></Link>
                    <p className="card-text">{product.description}</p>
                    <p className="card-text">{product.price} $</p>
                  </div>
                  <button type="button" className="btn btn-danger">Add to Cart</button>
                </div>
              
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
