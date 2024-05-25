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
    <div className="flex m-6">
      <div className="a-sp col-5">
        <div className="a-c">
          <img src={item.thumbnail} alt="" />
        </div>
      </div>
      <div className="tt-sp col-7">
        <p className="tt-sp-n">{item.title}</p>
        <p>-Thương hiệu: {item.brand}</p>
        <p>-Miêu tả: {item.description}</p>
        <p>-Tỉ lệ chiết khấu: {item.discountPercentage}%</p>
        <p>Số lượng: <input type="number" /></p>
        <p>Màu sắc:</p>
        <p>Bộ nhớ:</p>
        <p className="sp-g">Giá: {item.price} $</p>
        <p className="sp-ttoan"><a href="">Thanh toán</a></p>
      </div>
    </div>
  );
};
export default ProductDetail;
