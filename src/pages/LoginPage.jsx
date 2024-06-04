// import React from 'react'
// import React from 'react'

import { z } from "zod";
import instance from "../axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

const schema = z.object({
  email: z.string().email(),
  password : z.string().min(6),
});

function LoginPage() {
  const nav = useNavigate();
    const{
        register,
        handleSubmit,
        formState: {errors},
    }= useForm({
        resolver: zodResolver(schema),
    });
    const onSubmit = (data) =>{
        (async () => {
            try{
              await instance.post(`/login`, data);
              if(confirm("Login successfully!")){
                nav("/admin");
              }
            }catch(error){
              alert(error?.response?.data);
              // console.error("Error : ", error);
            }
        })();
    };
  return (
    <div className='max-w-screen-sm m-auto'>
     <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-center text-2xl font-bold">Login</h1>
        <div className="form-group mb-3">
            <label htmlFor="email" className="form-group">Email</label>
            <input className="form-control" type="email" name="" id="email" {...register("email",{required: true})} />
            {errors.email?.message && <p className="text-danger">{errors.email?.message}</p>}
        </div>
        <div className="form-group mb-3">
            <label htmlFor="password" className="form-group">Password</label>
            <input className="form-control" type="password" name="" id="password" {...register("password")} />
            {errors.password?.message && <p className="text-danger">{errors.password?.message}</p>}
        </div>
        <div className="form-group mb-3">
            <button type="submit" className='btn btn-primary w-100'>Login</button>
        </div>
      </form>
      <Link to="/register">Register?</Link>
    </div>
  );
}

export default LoginPage;
