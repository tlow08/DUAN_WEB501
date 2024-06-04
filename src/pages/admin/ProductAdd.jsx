import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react'
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const schemaProduct = z.object({
    title: z.string().min(3,{message: "Phải có ít nhất 3 ký tự"}),
    price: z.number().min(1, {message: "Giá phải lớn 0"}),
    description: z.string().optional(),
    thumbnail: z.string().optional(),
});

const ProductAdd = ({pAdd}) => {
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm({
        resolver: zodResolver(schemaProduct),
    })
    const onSubmit = (data) =>{
        // console.log("them");
        pAdd(data);
    }
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

export default ProductAdd;
