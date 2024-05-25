// import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../axios";
import { useEffect, useState } from "react";
const ProductDetail = () => {
  const { id } = useParams();
  const [item, setProduct] = useState({});
  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.get(`/products/${id}`);
        setProduct(data);
      } catch (error) {
        console.log("Error fetching data: ", error);
      }
    })();
  }, [id]);
  return (
    <div>
      <div className="a-sp">
        <div className="a-c">
            <img src={item.thumbnail} alt="" />
        </div>
        {/* <div className=".autoplay">
        {item.images &&
            item.images.map((image, index) => (
              <div key={index}>
                <img src={image} alt={`Image ${index + 1}`} />
              </div>
            ))}
        </div> */}
      </div>
      <div className="tt-sp">
        <h1>{item.title}</h1>

        <p>{item.description}</p>
        <p>{item.price} $</p>
      </div>
    </div>
  );
};
export default ProductDetail;
