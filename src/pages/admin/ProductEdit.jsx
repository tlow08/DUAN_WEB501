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
    <div className='max-w-screen-sm m-auto'>
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Product Add</h1>
      <div className='form-group mb-3'>
          <label htmlFor="title" className='form-label'>Title</label>
          <input className='form-control' type="text" name="" id="title" {...register("title", {required : true})} />
          {errors.title?.message && <p className='text-danger'>{errors.title?.message}</p>}
      </div>
      <div className='form-group mb-3'>
          <label htmlFor="price" className='form-label'>Price</label>
          <input className='form-control' type="number" name="" id="price" {...register("price", {valueAsNumber: true})} />
          {errors.price?.message && <p className='text-danger'>{errors.price?.message}</p>}
      </div>
      <div className='form-group mb-3'>
          <label htmlFor="description" className='form-label'>Description</label>
          <input className='form-control' type="text" name="" id="description" {...register("description")} />
          {errors.description?.message && <p className='text-danger'>{errors.description?.message}</p>}
      </div>
      <div className='form-group mb-3'>
          <label htmlFor="thumbnail" className='form-label'>Thumbnail</label>
          <input className='form-control' type="text" name="" id="thumbnail" {...register("thumbnail")} />
          {errors.thumbnail?.message && <p className='text-danger'>{errors.thumbnail?.message}</p>}
      </div>
      <div className="form-group mb-3">
          <button className='btn btn-primary w-100' type='submit'>Add new product</button>
      </div>
    </form>
  </div>
  )
}

export default ProductEdit;
