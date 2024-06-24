import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { loginSchema, registerSchema } from "../schemaValid/authSchema";
import { AuthContext } from "../contexts/AuthContext";
import { zodResolver } from "@hookform/resolvers/zod";

const AuthForm = ({ isRegister }) => {
  const nav = useNavigate();
  const { login, register: registerUser } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(isRegister ? registerSchema : loginSchema),
  });

  const onSubmit = async (data) => {
    (async ()=>{
        try {
            if (isRegister) {
              await registerUser(data.email, data.password, data.confirmPass);
              if (confirm("Successfully, redirect login page?")) {
                nav("/login");
              }
            } else {
              await login(data.email, data.password);
              if (confirm("successfully, redirect about user page?")) {
                nav("/about-user");
              }
            }
          } catch (error) {
            alert(error?.response?.data || "failed");
          }
    })();
  };
  return (
    <div className="mt-8">
      <section className="max-w-screen-sm m-auto  shadow-xl border rounded-xl">
        <form onSubmit={handleSubmit(onSubmit)} className="p-3">
          <h1 className="text-center text-[40px] font-bold text-yellow-600">
            {isRegister ? "Register" : "Login"}
          </h1>
          <div className="w-full grid grid-cols-1">
            <label
              htmlFor="email"
              className="my-2 text-xl font-semibold text-yellow-600 "
            >
              Email:
            </label>
            <input
              type="email"
              name=""
              id="email"
              {...register("email", { required: true })}
              className="outline-none py-2 pl-3 border"
            />
            {errors.email?.message && (
              <p className="text-danger">{errors.email?.message}</p>
            )}
          </div>
          <div className="w-full grid grid-cols-1">
            <label
              htmlFor="password"
              className="my-2 text-xl font-semibold text-yellow-600 "
            >
              Password:
            </label>
            <input
              className="outline-none py-2 pl-3 border"
              type="password"
              name=""
              id="password"
              {...register("password", { required: true })}
            />
            {errors.password?.message && (
              <p className="text-danger">{errors.password?.message}</p>
            )}
          </div>
          {isRegister && (
            <div className="w-full grid grid-cols-1">
              <label
                htmlFor="confirmPass"
                className="my-2 text-xl font-semibold text-yellow-600 "
              >
                Confirm password:
              </label>
              <input
                className="outline-none py-2 pl-3 border"
                type="password"
                name=""
                id="confirmPass"
                {...register("confirmPass", { required: true })}
              />
              {errors.confirmPass?.message && (
                <p className="text-danger">{errors.confirmPass?.message}</p>
              )}
            </div>
          )}
          <div className="w-full my-3 bg-yellow-600 text-white font-semibold text-xl hover:bg-yellow-700">
            <button type="submit" className="w-full text-center py-3">
              {isRegister ? "Register" : "Login"}
            </button>
          </div>
        </form>
        <div className="text-center mb-4 font-semibold text-xl hover:text-yellow-600">
          {isRegister && <Link to="/login">Login?</Link>}
        </div>
      </section>
    </div>
  );
};

export default AuthForm;
