// import React from "react";

import { Link } from "react-router-dom";

function Dashboard({ data, removeProduct }) {
  // console.log(data);
  if (!data || data.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <>
    <section className="pt-16"></section>
    <section>
      <h1 className="text-center font-bold text-2xl text-red-600">Admin page</h1>
      <div className="flex gap-3 text-xl">
      <Link to="/admin" className="btn btn-info">List of products</Link>
      <Link to="/admin/users" className="btn btn-success">List of Users</Link>
      <Link to="/admin/product-add" className="btn btn-primary">
        Add new product
      </Link>
      </div>
      <h3 className="text-center text-xl font-semibold my-3">LIST OF PRODUCTS</h3>
      <table className="table  w-full border table-striped">
        <thead className="text-xl text-center ">
          <tr>
            <th className="py-4">ID</th>
            <th className="py-4">Products name</th>
            <th className="py-4">Price</th>
            <th className="py-4">Thumbnail</th>
            <th className="py-4">Action</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {data.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>{product.price}$</td>
              <td className="flex justify-center items-center">
                <img className="w-[70px] h-[70px]" src={product.thumbnail} alt={product.title} />
              </td>
              <td>
                <Link className="btn btn-warning mx-4" to={`/admin/product-edit/${product.id}`}>Edit</Link>
                <button className="btn btn-danger" onClick={() => removeProduct(product.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
    </>
  );
}

export default Dashboard;
