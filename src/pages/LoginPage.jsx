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
              const result = await instance.post(`/login`, data);
              localStorage.setItem("user", JSON.stringify(result.data));
              if(confirm("Login successfully, do you want to return to the admin page?")){
                nav("/admin");
              }
            }catch(error){
              alert(error?.response?.data);
              // console.error("Error : ", error);
            }
        })();
    };
  return (
    <>
    <section className="pt-16"></section>
    <section className='container max-w-screen-sm m-auto pt-8 shadow-xl border rounded-xl'>
     <form onSubmit={handleSubmit(onSubmit)} className="p-3">
        <h1 className="text-center text-[40px] font-bold text-yellow-600">Login</h1>
        <div className="w-full grid grid-cols-1">
            <label htmlFor="email" className="my-2 text-xl font-semibold text-yellow-600 " >Email:</label>
            <input type="email" name="" id="email" {...register("email",{required: true})} className="outline-none py-2 pl-3 border" />
            {errors.email?.message && <p className="text-danger">{errors.email?.message}</p>}
        </div>
        <div className="w-full grid grid-cols-1">
            <label htmlFor="password"  className="my-2 text-xl font-semibold text-yellow-600 ">Password:</label>
            <input className="outline-none py-2 pl-3 border"type="password" name="" id="password" {...register("password")} />
            {errors.password?.message && <p className="text-danger">{errors.password?.message}</p>}
        </div>
        <div className="w-full my-3 bg-yellow-600 text-white font-semibold text-xl hover:bg-yellow-700">
            <button type="submit" className='w-full text-center py-3'>Login</button>
        </div>
      </form>
      <div className="text-center mb-4 text-base font-semibold hover:text-yellow-600">
      <Link to="/register">Register?</Link>
      </div>
    </section>
    </>
  );
}

export default LoginPage;
