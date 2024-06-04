// import React from "react";

import { Link } from "react-router-dom";

function Dashboard({ data, removeProduct }) {
  // console.log(data);
  if (!data || data.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <div>
      <p className="tb-ad">Trang quản trị</p>
      <h1 className="tieu-de02">Danh sách sản phẩm</h1>
      {/* {JSON.stringify(data)} */}
      <Link to="/admin/users">Users</Link>
      <div className="flex gap-2">
        <Link to="/admin/product-add" className="btn btn-warning">
          Thêm mới
        </Link>
        <button type="button" className="btn btn-info">
          Chọn tất cả
        </button>
        <button type="button" className="btn btn-success">
          Bỏ mục đã chọn
        </button>
        <button type="button" className="btn btn-danger">
          Xóa mục đã chọn
        </button>
      </div>
      <table className="dashboard-table">
        <thead>
          <tr>
            <th></th>
            <th>Mã sản phẩm</th>
            <th>Tên sản phẩm</th>
            <th>Giá sản phẩm</th>
            <th>Ảnh sản phẩm</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((product) => (
            <tr key={product.id}>
              <td>
                <input type="checkbox" name="" id="" />
              </td>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>{product.price}$</td>
              <td>
                <img src={product.thumbnail} alt={product.title} />
              </td>
              <td>
                <Link to={`/admin/product-edit/${product.id}`}>Sửa</Link>
                <button onClick={() => removeProduct(product.id)}>Xóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;
