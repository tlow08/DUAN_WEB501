// import React from 'react'
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import instance from '../axios';
import { Link, useNavigate } from 'react-router-dom';

const schema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
});

const Register = () => {
    const nav = useNavigate();
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm({
        resolver: zodResolver(schema),
    });
    const onSubmit = (data) => {
        // console.log("them thanh cong");
        (async () => {
            try{
                const res = await instance.post(`/register`, data);
                console.log(res);
                if(confirm("Register successfully")){
                    nav("/home");
                }
            }catch(error){
                alert("tai khoan da ton tai");
                console.error("Error", error);
            }
        })();

    };
  return (
    <div className='max-w-screen-sm m-auto'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className='font-bold text-2xl'>Register</h1>
        <div className="form-group mb-3">
            <label htmlFor="email" className='form-label'>Email</label>
            <input className='form-control' type="email" name="" id="email" {...register("email",{required:true})} />
            {errors.email?.message && <p className='text-danger'>{errors.email?.message}</p>}
        </div>
        <div className="form-group mb-3">
            <label htmlFor="password" className='form-label'>Password</label>
            <input className='form-control' type="password" name="" id="password" {...register("password",{required:true})} />
            {errors.password?.message && <p className='text-danger'>{errors.password?.message}</p>}
        </div>
        
        <div className="form-group mb-3">
            <button type='submit' className='btn btn-primary w-100'>Register</button>
        </div>
      </form>
      <Link to="/login">Login?</Link>
    </div>
  )
}

export default Register;
