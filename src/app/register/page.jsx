"use client";
import Link from "next/link";
import { FaUser, FaKey } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useForm } from "react-hook-form";
import { useAuth } from "@/contexts/AuthContext";
import toast from "react-hot-toast";

const RegisterPage = () => {
  const { register, handleSubmit } = useForm();
  const { signUp } = useAuth();

  const onSubmit = handleSubmit(async (data) => {
    if (data.password !== data.confirm_password) {
      return toast.error("Passwords do not match");
    }
    await signUp(data);
    toast.success("Welcome.!");
  });

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <form className="w-2/6 p-10 bg-neutral glass rounded" onSubmit={onSubmit}>
        <label className="input input-bordered flex items-center gap-2 mb-3">
          <FaUser className="w-4 h-4 opacity-70" />
          <input
            type="text"
            className="grow"
            placeholder="First Name"
            {...register("first_name")}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2 mb-3">
          <FaUser className="w-4 h-4 opacity-70" />
          <input
            type="text"
            className="grow"
            placeholder="Last Name"
            {...register("last_name")}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2 mb-3">
          <MdEmail className="w-4 h-4 opacity-70" />
          <input
            type="text"
            className="grow"
            placeholder="Email"
            {...register("email")}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2 mb-3">
          <FaUser className="w-4 h-4 opacity-70" />
          <input
            type="number"
            className="grow"
            placeholder="Age"
            {...register("age")}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2 mb-3">
          <FaKey className="w-4 h-4 opacity-70" />
          <input
            type="password"
            className="grow"
            placeholder="********"
            {...register("password")}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2 mb-3">
          <FaKey className="w-4 h-4 opacity-70" />
          <input
            type="password"
            className="grow"
            placeholder="confirm password"
            {...register("confirm_password")}
          />
        </label>
        <button className="btn btn-primary block mx-auto">Register</button>
      </form>
      <div className=" w-2/6 flex flex-col items-center">
        <div className="divider divider-neutral mt-3"></div>
        <p className="text-white">
          If you already have an account
          <Link href={"/login"} className="text-accent">
            {" "}
            Login
          </Link>
        </p>
        <div className="divider divider-neutral mt-3"></div>
      </div>
    </div>
  );
};

export default RegisterPage;
