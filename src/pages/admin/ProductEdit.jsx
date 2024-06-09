import { zodResolver } from '@hookform/resolvers/zod';
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { z } from 'zod';
import instance from '../../axios';

const schemaProduct = z.object({
    title: z.string().min(3,{message: "Phải có ít nhất 3 ký tự"}),
    price: z.number().min(1, {message: "Giá phải lớn 0"}),
    description: z.string().optional(),
    thumbnail: z.string().optional(),
});

const ProductEdit = ({pEdit}) => {
    const {id} = useParams();
    const {
        register,
        handleSubmit,
        formState: {errors},
        reset,
    } = useForm({
        resolver: zodResolver(schemaProduct),
    });
    useEffect(() =>{
        (async ()=>{
            const {data} = await instance.get(`/products/${id}`);
            reset(data);
        })();
    },[]);
    const onSubmit = (data) =>{
        // console.log("them");
        pEdit({...data, id});
    };
  return (
   <>
   <section className="pt-16"></section>
    <section className='max-w-screen-sm m-auto pt-8 shadow-xl border rounded-xl'>
    <form onSubmit={handleSubmit(onSubmit)} className="p-3">
      <h1 className="text-center text-[40px] font-bold text-yellow-600">Product Edit</h1>
      <div className="w-full grid grid-cols-1">
          <label htmlFor="title" className="my-2 text-xl font-semibold text-yellow-600 ">Title</label>
          <input className="outline-none py-2 pl-3 border" type="text" name="" id="title" {...register("title", {required : true})} />
          {errors.title?.message && <p className='text-danger'>{errors.title?.message}</p>}
      </div>
      <div className="w-full grid grid-cols-1">
          <label htmlFor="price" className="my-2 text-xl font-semibold text-yellow-600 ">Price</label>
          <input className="outline-none py-2 pl-3 border" type="number" name="" id="price" {...register("price", {valueAsNumber: true})} />
          {errors.price?.message && <p className='text-danger'>{errors.price?.message}</p>}
      </div>
      <div className="w-full grid grid-cols-1">
          <label htmlFor="description" className="my-2 text-xl font-semibold text-yellow-600 ">Description</label>
          <input className="outline-none py-2 pl-3 border" type="text" name="" id="description" {...register("description")} />
          {errors.description?.message && <p className='text-danger'>{errors.description?.message}</p>}
      </div>
      <div className="w-full grid grid-cols-1">
          <label htmlFor="thumbnail" className="my-2 text-xl font-semibold text-yellow-600 ">Thumbnail</label>
          <input className="outline-none py-2 pl-3 border" type="text" name="" id="thumbnail" {...register("thumbnail")} />
          {errors.thumbnail?.message && <p className='text-danger'>{errors.thumbnail?.message}</p>}
      </div>
      <div className="w-full my-3 bg-yellow-600 text-white font-semibold text-xl hover:bg-yellow-700">
          <button className='w-full text-center py-3'type='submit'>Edit product</button>
      </div>
    </form>
  </section>
   </>
  )
}

export default ProductEdit;
