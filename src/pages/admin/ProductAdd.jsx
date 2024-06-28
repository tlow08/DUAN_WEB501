import { zodResolver } from "@hookform/resolvers/zod";
import { useContext, useState } from "react";
// import React from 'react'
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { ProductContext } from "../../contexts/ProductContext";
import instance from "../../axios";

const schemaProduct = z.object({
  title: z.string().min(3, { message: "Phải có ít nhất 3 ký tự" }),
  price: z.number().min(1, { message: "Giá phải lớn 0" }),
  description: z.string().optional(),
  thumbnail: z.any().optional(),
});

const ProductAdd = () => {
  const nav = useNavigate();
  const { dispatch } = useContext(ProductContext);

  const [thumbnailUrl, setThumbnailUrl] = useState(null);
  const [thumbnailOption, setThumbnailOption] = useState("keep");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schemaProduct),
  });

  const uploadThumbnail = async (file) => {
   
      try {
        const UPLOAD_PRESET = "demo-upload";
        const CLOUD_NAME = "dfwhqf2w6";
        const FOLDER_NAME = "image";

        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", UPLOAD_PRESET);
        formData.append("folder", FOLDER_NAME);

        const response = await fetch(
          `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
          {
            method: "POST",
            body: formData,
          }
        );
        const data = await response.json();
        console.log(data);
        return data.secure_url;
      } catch (error) {
        console.log(error);
      }
  
  };
  const onSubmit = async (product) => {
      try {
        let updatedProduct = { ...product };
        switch (thumbnailOption) {
          case "upload":
            if (product.thumbnail && product.thumbnail[0]) {
              const thumbnailUrl = await uploadThumbnail(product.thumbnail[0]);
              updatedProduct = { ...updatedProduct, thumbnail: thumbnailUrl };
            }
            break;
          default:
        }
        const res = await instance.post("/products", updatedProduct);
        dispatch({ type: "ADD_PRODUCT", payload: res.data });
        if (confirm("Successfully, redirect to admin page!")) {
          nav("/admin/products");
        }
      } catch (error) {
        console.log(error);
      }
  };
  return (
    <>
      <section className="pt-16"></section>
      <section className=" container max-w-screen-sm m-auto pt-8 shadow-xl border rounded-xl">
        <form onSubmit={handleSubmit(onSubmit)} className="p-3">
          <h1 className="text-center text-[40px] font-bold text-yellow-600">
            Product Add
          </h1>
          <div className="w-full grid grid-cols-1">
            <label
              htmlFor="title"
              className="my-2 text-xl font-semibold text-yellow-600 "
            >
              Title
            </label>
            <input
              className="form-control"
              type="text"
              name=""
              id="title"
              {...register("title", { required: true })}
            />
            {errors.title?.message && (
              <p className="text-danger">{errors.title?.message}</p>
            )}
          </div>
          <div className="w-full grid grid-cols-1">
            <label
              htmlFor="price"
              className="my-2 text-xl font-semibold text-yellow-600 "
            >
              Price
            </label>
            <input
              className="outline-none py-2 pl-3 border"
              type="number"
              name=""
              id="price"
              {...register("price", { valueAsNumber: true })}
            />
            {errors.price?.message && (
              <p className="text-danger">{errors.price?.message}</p>
            )}
          </div>
          <div className="w-full grid grid-cols-1">
            <label
              htmlFor="description"
              className="my-2 text-xl font-semibold text-yellow-600 "
            >
              Description
            </label>
            <input
              className="outline-none py-2 pl-3 border"
              type="text"
              name=""
              id="description"
              {...register("description")}
            />
            {errors.description?.message && (
              <p className="text-danger">{errors.description?.message}</p>
            )}
          </div>
          <div className="w-full grid grid-cols-1">
            <label
              htmlFor="thumbnail"
              className="my-2 text-xl font-semibold text-yellow-600 "
            >
              Thumbnail
            </label>
            <select
              className="outline-none py-2 pl-3 border"
              value={thumbnailOption}
              name=""
              id="thumbnailOption"
              onChange={(e) => setThumbnailOption(e.target.value)}
            >
              <option value="keep">Keep Current Thumbnail</option>
              <option value="link">Add Thumbnail from Link</option>
              <option value="upload">Upload Thumbnail from Local</option>
            </select>
          </div>
          <div className="w-full grid grid-cols-1">
            <label
              htmlFor="thumbnail"
              className="my-2 text-xl font-semibold text-yellow-600 "
            >
              Thumbnail
            </label>
            {thumbnailOption === "link" && (
              <input
                type="text"
                className="outline-none py-2 pl-3 border"
                id="thumbnail"
                {...register("thumbnail")}
              />
            )}
            {thumbnailOption === "upload" && (
              <input
                type="file"
                className="outline-none py-2 pl-3 border"
                id="thumbnail"
                {...register("thumbnail", { required: true })}
              />
            )}
            {errors.thumbnail?.message && (
              <p className="text-danger">{errors.thumbnail?.message}</p>
            )}
            {thumbnailUrl && (
              <img
                src={thumbnailUrl}
                alt="Product Thumbnail"
                style={{ maxWidth: "200px", marginTop: "10px" }}
              />
            )}
          </div>
          <div className="w-full my-3 bg-yellow-600 text-white font-semibold text-xl hover:bg-yellow-700">
            <button className="w-full text-center py-3" type="submit">
              Add new product
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default ProductAdd;
