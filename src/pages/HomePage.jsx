/* eslint-disable react/prop-types */
function HomePage({ data }) {
  if (!data || data.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <div >
      <h1>Danh sách sản phẩm</h1>
      <div className="container">
      {data.map((product) => (
        <div key={product.id} className="card"> {/* Corrected className */}
          <img src={product.thumbnail} alt="" />
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>{product.price} $</p>
        </div>
      ))}
    </div>
    </div>
  );
}

export default HomePage;
